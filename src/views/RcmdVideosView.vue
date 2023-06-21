<script setup lang="ts">
const idx = ref(0)
const { videos, load } = useRcmdVideos()

function handleload() {
  load(++idx.value)
}
</script>

<template>
  <div
    v-infinite-scroll="handleload" infinite-scroll-distance="300" infinite-scroll-delay="500"
    infinite-scroll-immediate="false"
    class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
  >
    <Video v-for="video in videos" :key="video.id" :video="video" />
    <div class="h-16" />
  </div>
</template>
