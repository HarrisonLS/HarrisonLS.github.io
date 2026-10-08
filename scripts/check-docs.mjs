import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { extname, join, resolve } from "node:path";

const projectRoot = resolve(import.meta.dirname, "..");
const docsRoot = join(projectRoot, "docs");
const navigationFiles = [
  join(docsRoot, ".vitepress/configs/nav.ts"),
  join(docsRoot, ".vitepress/configs/sidebar.ts"),
];

const errors = [];

function walk(directory) {
  return readdirSync(directory).flatMap((name) => {
    const target = join(directory, name);
    return statSync(target).isDirectory() ? walk(target) : target;
  });
}

function hasPageContent(source) {
  return source.replace(/<!--[\s\S]*?-->/gu, "").trim();
}

function routeExists(route) {
  const normalizedRoute = route.split(/[?#]/u)[0].replace(/^\/+|\/+$/gu, "");
  const candidates = normalizedRoute
    ? [
        join(docsRoot, `${normalizedRoute}.md`),
        join(docsRoot, normalizedRoute, "index.md"),
      ]
    : [join(docsRoot, "index.md")];

  return candidates.some(existsSync);
}

for (const file of navigationFiles) {
  const source = readFileSync(file, "utf8").replace(/^\s*\/\/.*$/gmu, "");
  const links = [...source.matchAll(/\blink\s*:\s*["']([^"']+)["']/gu)].map(
    (match) => match[1]
  );

  for (const link of links) {
    if (/^(?:https?:|mailto:|#)/u.test(link)) continue;

    if (!link.startsWith("/")) {
      errors.push(`${file}: 站内链接必须以 / 开头：${link}`);
      continue;
    }

    if (!routeExists(link)) {
      errors.push(`${file}: 找不到导航目标：${link}`);
    }
  }
}

const markdownFiles = walk(docsRoot).filter(
  (file) => extname(file) === ".md" && !file.includes("/.vitepress/")
);

for (const file of markdownFiles) {
  if (!hasPageContent(readFileSync(file, "utf8"))) {
    errors.push(`${file}: Markdown 页面没有有效内容`);
  }
}

if (errors.length > 0) {
  console.error("文档健康检查失败：\n");
  console.error(errors.map((error) => `- ${error}`).join("\n"));
  process.exitCode = 1;
} else {
  console.log(
    `文档健康检查通过：${navigationFiles.length} 个导航配置，${markdownFiles.length} 个 Markdown 页面。`
  );
}
