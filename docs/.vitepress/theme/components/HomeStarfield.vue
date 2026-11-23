<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from "vue";
import { useData, useRoute } from "vitepress";

const route = useRoute();
const { isDark } = useData();

/* 仅在首页渲染 */
const isHome = computed(() => route.path === "/");

const canvasRef = ref<HTMLCanvasElement | null>(null);

type StarTier = "sparkle" | "cross" | "distant";

interface Star {
  x: number;
  y: number;
  radius: number;
  baseAlpha: number;
  twinklePhase: number;
  twinkleSpeed: number;
  vx: number;
  vy: number;
  tier: StarTier;
  accent: boolean;
  rayAngle: number;
}

interface Meteor {
  x: number;
  y: number;
  vx: number;
  vy: number;
  length: number;
  life: number;
  maxLife: number;
}

/* 深色主题用冷白星点，浅色主题用深蓝灰星点，保证亮暗都清晰可见 */
const STAR_COLORS = {
  dark: { r: 235, g: 238, b: 255 },
  light: { r: 52, g: 72, b: 120 },
} as const;

/* 少量点缀星用淡紫色，呼应首页标题的渐变 */
const ACCENT_COLORS = {
  dark: { r: 205, g: 198, b: 255 },
  light: { r: 106, g: 100, b: 190 },
} as const;

let rafId = 0;
let ctx: CanvasRenderingContext2D | null = null;
let stars: Star[] = [];
let meteors: Meteor[] = [];
let sceneWidth = 0;
let sceneHeight = 0;
let lastTime = 0;
let nextMeteorTime = 0;
let reducedMotion = false;

function createStars() {
  /* 数量随视口面积调整，普通笔记本上最多 280 颗，开销很小 */
  const count = Math.min(280, Math.floor((sceneWidth * sceneHeight) / 4500));
  stars = Array.from({ length: count }, () => {
    /* 按星等分三种形态：20% 十字光芒亮星、40% 小十字星、40% 远景软光斑 */
    const roll = Math.random();
    const tier: StarTier =
      roll < 0.2 ? "sparkle" : roll < 0.6 ? "cross" : "distant";
    const config =
      tier === "sparkle"
        ? { radius: 1.6 + Math.random(), baseAlpha: 0.75 + Math.random() * 0.25 }
        : tier === "cross"
          ? { radius: 1.1 + Math.random() * 0.6, baseAlpha: 0.5 + Math.random() * 0.25 }
          : { radius: 0.7 + Math.random() * 0.5, baseAlpha: 0.3 + Math.random() * 0.2 };

    return {
      x: Math.random() * sceneWidth,
      y: Math.random() * sceneHeight,
      radius: config.radius,
      baseAlpha: config.baseAlpha,
      twinklePhase: Math.random() * Math.PI * 2,
      twinkleSpeed: 0.6 + Math.random() * 1.4,
      vx: (Math.random() - 0.5) * 6,
      vy: (Math.random() - 0.5) * 6,
      tier,
      /* 亮星中约三成使用点缀色 */
      accent: tier === "sparkle" && Math.random() < 0.3,
      /* 光芒的随机倾角，避免所有十字完全对齐 */
      rayAngle: (Math.random() - 0.5) * 0.6,
    };
  });
}

function rgba(color: { r: number; g: number; b: number }, alpha: number) {
  return `rgba(${color.r}, ${color.g}, ${color.b}, ${alpha.toFixed(3)})`;
}

/* 一条从中心渐隐到尖端的光芒线 */
function drawRay(
  x: number,
  y: number,
  angle: number,
  len: number,
  alpha: number,
  color: { r: number; g: number; b: number },
) {
  if (!ctx) return;
  const tipX = x + Math.cos(angle) * len;
  const tipY = y + Math.sin(angle) * len;
  const gradient = ctx.createLinearGradient(x, y, tipX, tipY);
  gradient.addColorStop(0, rgba(color, alpha));
  gradient.addColorStop(1, rgba(color, 0));
  ctx.strokeStyle = gradient;
  ctx.lineWidth = 1;
  ctx.lineCap = "round";
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(tipX, tipY);
  ctx.stroke();
}

function spawnMeteor(now: number) {
  meteors.push({
    x: sceneWidth * (0.15 + Math.random() * 0.7),
    y: sceneHeight * Math.random() * 0.35,
    vx: -(320 + Math.random() * 180),
    vy: 160 + Math.random() * 120,
    length: 90 + Math.random() * 60,
    life: 0,
    maxLife: 1.1 + Math.random() * 0.5,
  });
  /* 约 1.5~4 秒一颗，四分之一概率成对出现，形成流星雨节奏 */
  nextMeteorTime = now + 1.5 + Math.random() * 2.5;
  if (Math.random() < 0.25) {
    window.setTimeout(() => {
      meteors.push({
        x: sceneWidth * (0.15 + Math.random() * 0.7),
        y: sceneHeight * Math.random() * 0.3,
        vx: -(320 + Math.random() * 180),
        vy: 160 + Math.random() * 120,
        length: 70 + Math.random() * 50,
        life: 0,
        maxLife: 1 + Math.random() * 0.4,
      });
    }, 150 + Math.random() * 250);
  }
}

function drawStars() {
  if (!ctx) return;
  const dark = isDark.value;
  const base = dark ? STAR_COLORS.dark : STAR_COLORS.light;
  const accentColor = dark ? ACCENT_COLORS.dark : ACCENT_COLORS.light;

  for (const star of stars) {
    if (!reducedMotion) {
      star.twinklePhase += star.twinkleSpeed * 0.016;
      star.x += star.vx * 0.016;
      star.y += star.vy * 0.016;
      if (star.x < 0) star.x += sceneWidth;
      if (star.x > sceneWidth) star.x -= sceneWidth;
      if (star.y < 0) star.y += sceneHeight;
      if (star.y > sceneHeight) star.y -= sceneHeight;
    }

    const twinkle = reducedMotion
      ? 1
      : 0.65 + 0.35 * Math.sin(star.twinklePhase);
    const alpha = star.baseAlpha * twinkle;
    const color = star.accent ? accentColor : base;

    /* 软光晕底：所有星点都用径向渐变，避免硬边圆点的廉价感 */
    const glowRadius =
      star.radius * (star.tier === "sparkle" ? 3.2 : star.tier === "cross" ? 2.4 : 1.8);
    const glow = ctx.createRadialGradient(
      star.x,
      star.y,
      0,
      star.x,
      star.y,
      glowRadius,
    );
    glow.addColorStop(0, rgba(color, alpha * 0.45));
    glow.addColorStop(1, rgba(color, 0));
    ctx.beginPath();
    ctx.arc(star.x, star.y, glowRadius, 0, Math.PI * 2);
    ctx.fillStyle = glow;
    ctx.fill();

    if (star.tier === "distant") continue;

    /* 小十字星：细短光芒 */
    if (star.tier === "cross") {
      const len = star.radius * 2.5;
      ctx.strokeStyle = rgba(color, alpha * 0.55);
      ctx.lineWidth = 0.7;
      ctx.lineCap = "round";
      ctx.beginPath();
      ctx.moveTo(star.x - Math.cos(star.rayAngle) * len, star.y - Math.sin(star.rayAngle) * len);
      ctx.lineTo(star.x + Math.cos(star.rayAngle) * len, star.y + Math.sin(star.rayAngle) * len);
      ctx.moveTo(star.x + Math.sin(star.rayAngle) * len, star.y - Math.cos(star.rayAngle) * len);
      ctx.lineTo(star.x - Math.sin(star.rayAngle) * len, star.y + Math.cos(star.rayAngle) * len);
      ctx.stroke();
      continue;
    }

    /* 十字光芒亮星：实心核心 + 四条渐隐长光芒 */
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.radius * 0.55, 0, Math.PI * 2);
    ctx.fillStyle = rgba(color, alpha);
    ctx.fill();

    const rayLen = star.radius * 3.4;
    for (let i = 0; i < 4; i++) {
      drawRay(
        star.x,
        star.y,
        star.rayAngle + (Math.PI / 2) * i,
        rayLen,
        alpha * 0.8,
        color,
      );
    }
  }
}

function drawMeteors(dt: number) {
  if (!ctx) return;

  /* 流星颜色跟随主题：深色用亮白，浅色用深蓝灰，避免白底白流星不可见 */
  const color = isDark.value ? STAR_COLORS.dark : STAR_COLORS.light;

  meteors = meteors.filter((meteor) => meteor.life < meteor.maxLife);

  for (const meteor of meteors) {
    meteor.life += dt;
    meteor.x += meteor.vx * dt;
    meteor.y += meteor.vy * dt;

    /* 淡入淡出：生命周期内按正弦包络控制亮度 */
    const progress = Math.min(1, meteor.life / meteor.maxLife);
    const alpha = Math.sin(Math.PI * progress) * 0.85;
    if (alpha <= 0) continue;

    const speed = Math.hypot(meteor.vx, meteor.vy);
    const tailX = meteor.x - (meteor.vx / speed) * meteor.length;
    const tailY = meteor.y - (meteor.vy / speed) * meteor.length;
    const gradient = ctx.createLinearGradient(
      meteor.x,
      meteor.y,
      tailX,
      tailY,
    );

    gradient.addColorStop(
      0,
      `rgba(${color.r}, ${color.g}, ${color.b}, ${alpha.toFixed(3)})`,
    );
    gradient.addColorStop(
      1,
      `rgba(${color.r}, ${color.g}, ${color.b}, 0)`,
    );

    ctx.strokeStyle = gradient;
    ctx.lineWidth = 2;
    ctx.lineCap = "round";
    ctx.beginPath();
    ctx.moveTo(meteor.x, meteor.y);
    ctx.lineTo(tailX, tailY);
    ctx.stroke();
  }
}

function frame(time: number) {
  if (!ctx) return;
  const now = time / 1000;
  const dt = Math.min(0.05, now - lastTime);
  lastTime = now;

  ctx.clearRect(0, 0, sceneWidth, sceneHeight);
  drawStars();
  if (!reducedMotion && now >= nextMeteorTime && meteors.length < 4) {
    spawnMeteor(now);
  }
  drawMeteors(dt);

  rafId = requestAnimationFrame(frame);
}

function resize() {
  const canvas = canvasRef.value;
  if (!canvas || !ctx) return;

  const dpr = window.devicePixelRatio || 1;
  sceneWidth = canvas.clientWidth;
  sceneHeight = canvas.clientHeight;
  canvas.width = Math.round(sceneWidth * dpr);
  canvas.height = Math.round(sceneHeight * dpr);
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  createStars();
}

function start() {
  if (!rafId) rafId = requestAnimationFrame(frame);
}

function stop() {
  cancelAnimationFrame(rafId);
  rafId = 0;
}

function handleVisibilityChange() {
  if (document.hidden) {
    stop();
  } else {
    lastTime = performance.now() / 1000;
    start();
  }
}

/* 浏览器对象只在客户端生命周期内使用，保证 SSR 构建安全 */
onMounted(() => {
  const canvas = canvasRef.value;
  if (!canvas) return;

  ctx = canvas.getContext("2d");
  if (!ctx) return;

  reducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  resize();
  nextMeteorTime = performance.now() / 1000 + 2;
  lastTime = performance.now() / 1000;
  window.addEventListener("resize", resize);
  document.addEventListener("visibilitychange", handleVisibilityChange);
  start();
});

onBeforeUnmount(() => {
  stop();
  window.removeEventListener("resize", resize);
  document.removeEventListener("visibilitychange", handleVisibilityChange);
});
</script>

<template>
  <canvas v-if="isHome" ref="canvasRef" class="home-starfield" aria-hidden="true" />
</template>

<style scoped>
.home-starfield {
  position: fixed;
  inset: 0;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
  z-index: 0;
}
</style>

<style>
/* 首页内容提升到星空之上；选择器带 is-home，不影响其他页面 */
.VPContent.is-home {
  position: relative;
  z-index: 1;
}
</style>
