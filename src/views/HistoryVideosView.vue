<script setup lang="ts">
const idx = ref(START_IDX)
const { videos, load } = useHistoryVideos()

function handleload() {
  load(++idx.value)
}
</script>

<template>
  <VideosBoard :callback="handleload" :videos="videos" />
</template>
