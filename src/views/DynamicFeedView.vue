<script setup lang="ts">
import type { DynamicItem } from '@/utils/getDynamicFeed'

const { data: dynamicItems, loadmore } = useDataLoadmore<DynamicItem>(getDynamicFeed, true)
</script>

<template>
  <ElEmpty v-if="!dynamicItems.length" description="Please login before continuing" class="h-90vh" />
  <InfiniteScroll
    class="flex flex-col items-center justify-center p2"
    @load="loadmore"
  >
    <DynamicCard v-for="item in dynamicItems" :key="item.id_str" :dynamic="item" />
  </InfiniteScroll>
</template>
