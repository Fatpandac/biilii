<script setup lang="ts">
import { ASIDE_MENU } from '@/stores/state'
</script>

<template>
  <ElScrollbar class="w-25 md:w-60 bg-slate-200">
    <template v-for="(item, index) in ASIDE_MENU" :key="index">
      <AsideButton :to="item.to" :icon="item.icon" :title="item.title" />
    </template>
    <Divider class="mx2" />
  </ElScrollbar>
</template>
