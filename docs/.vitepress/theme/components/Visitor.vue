<script setup lang="ts">
import { inject } from "vue";

const isDevelopment = inject<boolean>("DEV", false);
</script>

<template>
  <img
    v-if="!isDevelopment"
    class="visitor"
    src="https://visitor-badge.laobi.icu/badge?page_id=harrisonls.github.io"
    onerror="this.style.display='none'"
  />
</template>

<style scoped>
.visitor {
  margin-left: 8px;
}
@media (min-width: 768px) and (max-width: 920px) {
  .visitor {
    display: none;
  }
}
</style>
