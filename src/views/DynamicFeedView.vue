<script setup lang="ts">
import type { DynamicItem } from '@/utils/getDynamicFeed'

const { data: dynamicItems, loadmore, isLoading } = useDataLoadmore<DynamicItem>(getDynamicFeed, true)
</script>

<template>
  <MyEmpty :data="dynamicItems" :is-loading="isLoading" />
  <InfiniteScroll
    class="flex flex-col items-center justify-center p2"
    @load="loadmore"
  >
    <DynamicCard v-for="item in dynamicItems" :key="item.id_str" :dynamic="item" />
  </InfiniteScroll>
</template>
