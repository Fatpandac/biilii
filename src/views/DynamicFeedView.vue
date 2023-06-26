<script setup lang="ts">
import type { DynamicItem } from '@/utils/getDynamicFeed'

const { data: dynamicItems, loadmore } = useDataLoadmore<DynamicItem>(getDynamicFeed, true)
</script>

<template>
  <InfiniteScroll
    class="flex flex-col items-center justify-center p2"
    @load="loadmore"
  >
    <DynamicCard v-for="item in dynamicItems" :key="item.id_str" :dynamic="item" />
  </InfiniteScroll>
</template>
