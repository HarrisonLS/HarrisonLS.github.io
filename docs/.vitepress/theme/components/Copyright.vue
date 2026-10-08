<script setup lang="ts">
import { computed, inject } from "vue";
import { useRoute } from "vitepress";

const isDevelopment = inject<boolean>("DEV", false);
const route = useRoute();

const pageId = computed(() => {
  const normalizedPath = route.path
    .replace(/^\/+|\/+$/g, "")
    .replace(/\//g, ".");

  return normalizedPath || "home";
});
const yearInfo = new Date().getFullYear();
</script>

<template>
  <div class="copyright">
    <img
      v-if="!isDevelopment"
      class="visitor"
      :src="`https://visitor-badge.laobi.icu/badge?page_id=harrisonls.github.io.${pageId}`"
      title="当前页面累计访问数"
      onerror="this.style.display='none'"
    />
    <span>{{ `Copyright © 2022-${yearInfo} HarrisonLin` }}</span>
  </div>
</template>

<style scoped>
.copyright {
  margin-top: 24px;
  border-top: 1px solid var(--vp-c-gutter);
  padding: 32px 24px;
  background-color: var(--vp-c-bg);
}

.visitor {
  margin-right: 8px;
}

@media (max-width: 414px) {
  .visitor {
    display: none;
  }
}
</style>
