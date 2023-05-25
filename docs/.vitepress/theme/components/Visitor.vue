<script setup lang="ts">
import { inject, Ref } from 'vue'

const DEV = inject('DEV') as Ref<boolean>
</script>

<template>
  <img
    v-if="!DEV"
    class="visitor"
    src="https://visitor-badge.glitch.me/badge?page_id=harrisonls.github.io"
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
