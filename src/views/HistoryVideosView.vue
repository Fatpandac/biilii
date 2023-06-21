<script setup lang="ts">
const idx = ref(VIDEOS_START_IDX)
const { videos, load } = useHistoryVideos()

function handleload() {
  load(++idx.value)
}
</script>

<template>
  <VideosBoard :callback="handleload" :videos="videos" />
</template>
