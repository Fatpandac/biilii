<script setup lang="ts">
import { ASIDE_MENU } from '@/stores/state'

withDefaults(
  defineProps<{
    unvariable?: boolean
  }>(),
  {
    unvariable: false,
  },
)
</script>

<template>
  <ElScrollbar class="w-25 lg:w-60 bg-slate-200" :class="[{ 'w-60!': unvariable }]">
    <template v-for="(item, index) in ASIDE_MENU" :key="index">
      <AsideButton :to="item.to" :icon="item.icon" :title="item.title" :unvariable="unvariable" />
    </template>
    <Divider class="mx2" />
  </ElScrollbar>
</template>
