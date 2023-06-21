<script setup lang="ts">
const idx = ref(START_IDX)
const { dynamicItems, load } = useDynamicFeed()

function callback() {
  load(++idx.value)
}
</script>

<template>
  <div
    v-infinite-scroll="callback" infinite-scroll-distance="300" infinite-scroll-delay="500"
    infinite-scroll-immediate="false"
    class="flex flex-col items-center justify-center p2"
  >
    <DynamicCard v-for="item in dynamicItems" :key="item.id_str" :dynamic="item" />
  </div>
</template>
