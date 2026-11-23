<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from "vue";
import { useRoute } from "vitepress";

import { createLiquid, type LiquidInstance } from "./liquid";

const route = useRoute();

/* 仅在首页渲染 */
const isHome = computed(() => route.path === "/");

const canvasRef = ref<HTMLCanvasElement | null>(null);

let liquid: LiquidInstance | null = null;
let idleTimer = 0;

/* 无交互时每隔几秒注入一缕轻柔的流体质感，让页面保持呼吸感 */
function scheduleIdleSplat() {
  window.clearTimeout(idleTimer);
  idleTimer = window.setTimeout(() => {
    if (!liquid || document.hidden) {
      scheduleIdleSplat();
      return;
    }
    liquid.splat(
      0.2 + Math.random() * 0.6,
      0.3 + Math.random() * 0.4,
      (Math.random() - 0.5) * 200,
      (Math.random() - 0.5) * 150,
    );
    scheduleIdleSplat();
  }, 3500 + Math.random() * 3000);
}

/* 浏览器对象只在客户端生命周期内使用，保证 SSR 构建安全 */
onMounted(() => {
  const canvas = canvasRef.value;
  if (!canvas) return;

  liquid = createLiquid(canvas, {
    /* 取色自右上角 KEEP CALM 图片主色 #2196F3；不透明度上限压到 0.18，
       持续搅动也只会留下淡水彩般的轻痕，不会积成饱和色块 */
    color: [0.129, 0.588, 0.953],
    intensity: 1,
    opacity: 0.18,
    radius: 0.3,
    force: 1.1,
    curl: 1.9,
    densityDissipation: 0.96,
  });

  if (liquid) scheduleIdleSplat();
});

onBeforeUnmount(() => {
  window.clearTimeout(idleTimer);
  liquid?.destroy();
  liquid = null;
});
</script>

<template>
  <canvas v-if="isHome" ref="canvasRef" class="home-liquid" aria-hidden="true" />
</template>

<style scoped>
.home-liquid {
  position: fixed;
  inset: 0;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
  z-index: 0;
}
</style>
