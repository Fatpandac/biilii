<script setup lang="ts">
import type { DynamicItem } from '@/utils/getDynamicFeed'

const { data: dynamicItems, loadmore, isLoading } = useDataLoadmore<DynamicItem>(getDynamicFeed, true)

useInfiniteScroll(
  window,
  loadmore,
  {
    distance: 300,
  },
)
</script>

<template>
  <MyEmpty :data="dynamicItems" :is-loading="isLoading" />
  <div
    class="flex flex-col items-center justify-center p2"
  >
    <DynamicCard v-for="item in dynamicItems" :key="item.id_str" :dynamic="item" />
  </div>
</template>
