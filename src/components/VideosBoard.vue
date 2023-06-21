<script setup lang="ts">
import type { Video } from '@/utils/api'

defineProps<{
  callback: () => void
  videos: Video[]
}>()
</script>

<template>
  <div
    v-infinite-scroll="callback" infinite-scroll-distance="300" infinite-scroll-delay="500"
    infinite-scroll-immediate="false"
    class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 pb16"
  >
    <VideoCard v-for="video in videos" :key="video.id" :video="video" />
  </div>
</template>
