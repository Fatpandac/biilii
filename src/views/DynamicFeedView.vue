<script setup lang="ts">
import type { DynamicItem } from '@/utils/getDynamicFeed'

const { data: dynamicItems, loadmore } = useDataLoadmore<DynamicItem>(getDynamicFeed, true)
</script>

<template>
  <div
    v-infinite-scroll="loadmore" infinite-scroll-distance="300" infinite-scroll-delay="500"
    infinite-scroll-immediate="false"
    class="flex flex-col items-center justify-center p2"
  >
    <DynamicCard v-for="item in dynamicItems" :key="item.id_str" :dynamic="item" />
  </div>
</template>
