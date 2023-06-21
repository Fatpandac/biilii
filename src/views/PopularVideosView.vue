<script setup lang="ts">
const idx = ref(START_IDX)
const { videos, load } = usePopularVideos()

function handleload() {
  load(++idx.value)
}
</script>

<template>
  <VideosBoard :callback="handleload" :videos="videos" />
</template>
