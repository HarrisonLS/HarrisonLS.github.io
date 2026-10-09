import { parse } from "@babel/parser";
import { lookup } from "node:dns/promises";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { isIP } from "node:net";
import { dirname, join, resolve } from "node:path";

const projectRoot = resolve(import.meta.dirname, "..");
const navDataFile = join(projectRoot, "docs/nav/data.ts");
const defaultOutput = join(projectRoot, "reports/external-links");

const options = parseOptions(process.argv.slice(2));
const checkedAt = new Date().toISOString();

function parseOptions(args) {
  const parsed = {
    concurrency: 8,
    limit: Number.POSITIVE_INFINITY,
    output: defaultOutput,
    retries: 2,
    timeout: 12_000,
  };

  for (let index = 0; index < args.length; index += 1) {
    const argument = args[index];
    const value = args[index + 1];

    if (argument === "--concurrency")
      parsed.concurrency = positiveInteger(value, argument);
    else if (argument === "--limit")
      parsed.limit = positiveInteger(value, argument);
    else if (argument === "--output")
      parsed.output = resolve(projectRoot, requiredValue(value, argument));
    else if (argument === "--retries")
      parsed.retries = positiveInteger(value, argument);
    else if (argument === "--timeout")
      parsed.timeout = positiveInteger(value, argument);
    else throw new Error(`未知参数：${argument}`);

    index += 1;
  }

  return parsed;
}

function requiredValue(value, argument) {
  if (!value || value.startsWith("--"))
    throw new Error(`${argument} 缺少参数值`);
  return value;
}

function positiveInteger(value, argument) {
  const number = Number(requiredValue(value, argument));
  if (!Number.isInteger(number) || number < 1) {
    throw new Error(`${argument} 必须是正整数`);
  }
  return number;
}

function propertyName(property) {
  if (property.computed) return undefined;
  if (property.key.type === "Identifier") return property.key.name;
  if (property.key.type === "StringLiteral") return property.key.value;
  return undefined;
}

function objectProperty(object, name) {
  if (object?.type !== "ObjectExpression") return undefined;
  return object.properties.find(
    (property) =>
      property.type === "ObjectProperty" && propertyName(property) === name
  )?.value;
}

function stringValue(node, context) {
  if (node?.type !== "StringLiteral") {
    throw new Error(`${context} 必须是字符串字面量`);
  }
  return node.value;
}

async function readNavigationLinks() {
  const source = await readFile(navDataFile, "utf8");
  const ast = parse(source, { sourceType: "module", plugins: ["typescript"] });
  let navData;

  for (const statement of ast.program.body) {
    const declaration =
      statement.type === "ExportNamedDeclaration"
        ? statement.declaration
        : statement;
    if (declaration?.type !== "VariableDeclaration") continue;
    const target = declaration.declarations.find(
      (item) => item.id.type === "Identifier" && item.id.name === "NAV_DATA"
    );
    if (target) navData = target.init;
  }

  if (navData?.type !== "ArrayExpression") {
    throw new Error("未找到数组形式的 NAV_DATA 导出");
  }

  return navData.elements.flatMap((categoryNode, categoryIndex) => {
    const category = stringValue(
      objectProperty(categoryNode, "title"),
      `第 ${categoryIndex + 1} 个分类标题`
    );
    const items = objectProperty(categoryNode, "items");
    if (items?.type !== "ArrayExpression") {
      throw new Error(`${category} 的 items 必须是数组字面量`);
    }

    return items.elements.map((item, itemIndex) => ({
      category,
      title: stringValue(
        objectProperty(item, "title"),
        `${category} 第 ${itemIndex + 1} 个站点标题`
      ),
      url: stringValue(
        objectProperty(item, "link"),
        `${category} 第 ${itemIndex + 1} 个站点链接`
      ),
    }));
  });
}

function validateNavigationLinks(links) {
  const errors = [];
  const seen = new Map();

  for (const link of links) {
    let url;
    try {
      url = new URL(link.url);
    } catch {
      errors.push(`${link.category} / ${link.title}：URL 无效（${link.url}）`);
      continue;
    }

    if (url.protocol !== "https:") {
      errors.push(
        `${link.category} / ${link.title}：必须使用 HTTPS（${link.url}）`
      );
    }
    if (url.username || url.password) {
      errors.push(
        `${link.category} / ${link.title}：URL 不得包含凭证（${link.url}）`
      );
    }

    const normalized = url.href.replace(/\/$/u, "");
    const previous = seen.get(normalized);
    if (previous) {
      errors.push(
        `${link.category} / ${link.title}：与 ${previous} 重复（${link.url}）`
      );
    } else {
      seen.set(normalized, `${link.category} / ${link.title}`);
    }
  }

  return errors;
}

function isBlockedIpv4(address) {
  const [a, b] = address.split(".").map(Number);
  return (
    a === 0 ||
    a === 10 ||
    a === 127 ||
    (a === 100 && b >= 64 && b <= 127) ||
    (a === 169 && b === 254) ||
    (a === 172 && b >= 16 && b <= 31) ||
    (a === 192 && b === 0) ||
    (a === 192 && b === 168) ||
    (a === 198 && (b === 18 || b === 19)) ||
    a >= 224
  );
}

function isBlockedAddress(address) {
  const normalized = address.toLowerCase().replace(/^\[|\]$/gu, "");
  const version = isIP(normalized);
  if (version === 4) return isBlockedIpv4(normalized);
  if (version !== 6) return true;

  if (normalized === "::" || normalized === "::1") return true;
  if (/^(?:fc|fd|fe[89ab]|ff)/u.test(normalized)) return true;
  const mappedIpv4 = normalized.match(/::ffff:(\d+\.\d+\.\d+\.\d+)$/u)?.[1];
  return mappedIpv4 ? isBlockedIpv4(mappedIpv4) : false;
}

async function assertPublicUrl(value) {
  const url = new URL(value);
  if (!["http:", "https:"].includes(url.protocol)) {
    throw new Error(`不支持的协议：${url.protocol}`);
  }
  if (url.username || url.password) throw new Error("URL 包含凭证");

  const hostname = url.hostname.replace(/^\[|\]$/gu, "").toLowerCase();
  if (hostname === "localhost" || hostname.endsWith(".localhost")) {
    throw new Error("拒绝访问本机地址");
  }

  const addresses = isIP(hostname)
    ? [{ address: hostname }]
    : await lookup(hostname, { all: true, verbatim: true });
  if (
    addresses.length === 0 ||
    addresses.some(({ address }) => isBlockedAddress(address))
  ) {
    throw new Error("拒绝访问私有或保留地址");
  }

  return url;
}

async function requestOnce(value, method, redirects = []) {
  const url = await assertPublicUrl(value);
  const response = await fetch(url, {
    headers: {
      Accept:
        "text/html,application/xhtml+xml,application/json;q=0.9,*/*;q=0.8",
      "User-Agent":
        "HarrisonLS-link-checker/1.0 (+https://harrisonls.github.io)",
      ...(method === "GET" ? { Range: "bytes=0-1023" } : {}),
    },
    method,
    redirect: "manual",
    signal: AbortSignal.timeout(options.timeout),
  });

  await response.body?.cancel();

  if (response.status >= 300 && response.status < 400) {
    const location = response.headers.get("location");
    if (!location)
      return { finalUrl: url.href, redirects, status: response.status };
    if (redirects.length >= 5) throw new Error("重定向次数超过 5 次");
    const nextUrl = new URL(location, url);
    return requestOnce(nextUrl.href, method, [...redirects, nextUrl.href]);
  }

  return { finalUrl: url.href, redirects, status: response.status };
}

async function probe(value) {
  let result = await requestOnce(value, "HEAD");
  if ([400, 403, 405, 501].includes(result.status)) {
    result = await requestOnce(value, "GET");
  }
  return result;
}

function classify(status, redirected) {
  if (status >= 200 && status < 300)
    return redirected ? "redirected" : "healthy";
  if (status === 404 || status === 410) return "broken";
  if ([401, 403, 429].includes(status)) return "review";
  if (status >= 500 || (status >= 300 && status < 400)) return "transient";
  return "review";
}

function wait(milliseconds) {
  return new Promise((resolveWait) => setTimeout(resolveWait, milliseconds));
}

async function checkLink(link) {
  let lastError;

  for (let attempt = 1; attempt <= options.retries; attempt += 1) {
    try {
      const response = await probe(link.url);
      const result = {
        ...link,
        attempts: attempt,
        finalUrl: response.finalUrl,
        redirects: response.redirects,
        status: response.status,
        state: classify(response.status, response.redirects.length > 0),
      };

      const shouldRetry =
        result.state === "broken" ||
        result.state === "transient" ||
        result.status === 429;
      if (shouldRetry && attempt < options.retries) {
        await wait(500 * attempt);
        continue;
      }

      return result;
    } catch (error) {
      lastError = error;
      if (attempt < options.retries) await wait(500 * attempt);
    }
  }

  return {
    ...link,
    attempts: options.retries,
    error: lastError instanceof Error ? lastError.message : String(lastError),
    finalUrl: link.url,
    redirects: [],
    status: null,
    state: "transient",
  };
}

async function mapConcurrent(items, concurrency, mapper) {
  const results = new Array(items.length);
  let nextIndex = 0;

  async function worker() {
    while (nextIndex < items.length) {
      const currentIndex = nextIndex;
      nextIndex += 1;
      results[currentIndex] = await mapper(items[currentIndex]);
    }
  }

  await Promise.all(
    Array.from({ length: Math.min(concurrency, items.length) }, () => worker())
  );
  return results;
}

function summarize(results) {
  const summary = {
    healthy: 0,
    redirected: 0,
    review: 0,
    broken: 0,
    transient: 0,
  };
  for (const result of results) summary[result.state] += 1;
  return summary;
}

function markdownCell(value) {
  return String(value ?? "-")
    .replace(/\|/gu, "\\|")
    .replace(/\r?\n/gu, " ");
}

function buildMarkdown(report) {
  const labels = {
    healthy: "正常",
    redirected: "已重定向",
    review: "需复核",
    broken: "失效",
    transient: "暂时异常",
  };
  const lines = [
    "# 外链检查报告",
    "",
    `- 检查时间：${report.checkedAt}`,
    `- 数据文件：\`docs/nav/data.ts\``,
    `- 检查链接：${report.results.length} / ${report.totalLinks}`,
    `- 结果：正常 ${report.summary.healthy}，重定向 ${report.summary.redirected}，需复核 ${report.summary.review}，失效 ${report.summary.broken}，暂时异常 ${report.summary.transient}`,
    "",
  ];

  if (report.staticErrors.length > 0) {
    lines.push(
      "## 数据错误",
      "",
      ...report.staticErrors.map((error) => `- ${error}`),
      ""
    );
  }

  for (const state of ["broken", "redirected", "review", "transient"]) {
    const entries = report.results.filter((result) => result.state === state);
    if (entries.length === 0) continue;
    lines.push(
      `## ${labels[state]}（${entries.length}）`,
      "",
      "| 分类 | 站点 | 状态 | 原始 URL | 最终 URL / 错误 |",
      "| --- | --- | ---: | --- | --- |",
      ...entries.map(
        (entry) =>
          `| ${markdownCell(entry.category)} | ${markdownCell(
            entry.title
          )} | ${markdownCell(entry.status)} | ${markdownCell(
            entry.url
          )} | ${markdownCell(entry.error ?? entry.finalUrl)} |`
      ),
      ""
    );
  }

  lines.push(
    "## 判定说明",
    "",
    "- `2xx` 为正常；成功跳转到新地址时标记为已重定向，建议更新导航源地址。",
    "- `404/410` 在重试后标记为失效，并使任务失败。",
    "- `401/403/429` 标记为需复核；`5xx`、DNS、TLS 和超时标记为暂时异常，不直接判定链接失效。",
    "- 如果所有链接都只能得到暂时异常，说明检查环境不可用，任务也会失败。",
    "- 检查器拒绝访问本机、私有网段和保留地址，并对每次重定向重新校验目标。",
    ""
  );

  return lines.join("\n");
}

async function writeReports(report) {
  const jsonFile = `${options.output}.json`;
  const markdownFile = `${options.output}.md`;
  await mkdir(dirname(options.output), { recursive: true });
  await Promise.all([
    writeFile(jsonFile, `${JSON.stringify(report, null, 2)}\n`),
    writeFile(markdownFile, buildMarkdown(report)),
  ]);
  return { jsonFile, markdownFile };
}

const links = await readNavigationLinks();
const staticErrors = validateNavigationLinks(links);
const selectedLinks = links.slice(0, options.limit);
const results = await mapConcurrent(
  selectedLinks,
  options.concurrency,
  checkLink
);
const report = {
  checkedAt,
  options: {
    concurrency: options.concurrency,
    retries: options.retries,
    timeout: options.timeout,
  },
  results,
  staticErrors,
  summary: summarize(results),
  totalLinks: links.length,
};
const files = await writeReports(report);

console.log(
  `外链检查完成：${results.length} 个链接，正常 ${report.summary.healthy}，重定向 ${report.summary.redirected}，需复核 ${report.summary.review}，失效 ${report.summary.broken}，暂时异常 ${report.summary.transient}。`
);
console.log(`报告：${files.markdownFile}、${files.jsonFile}`);

const checkerUnavailable =
  results.length > 0 && report.summary.transient === results.length;
if (
  staticErrors.length > 0 ||
  report.summary.broken > 0 ||
  checkerUnavailable
) {
  process.exitCode = 1;
}
