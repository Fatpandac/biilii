<script setup lang="ts">
const { videos, load } = useRcmdVideos()
</script>

<template>
  <VideosBoard :callback="load" :videos="videos" />
</template>
