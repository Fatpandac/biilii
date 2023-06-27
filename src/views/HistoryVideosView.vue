<script setup lang="ts">
import type { Video } from '@/utils/api'

const { data: videos, loadmore } = useDataLoadmore<Video>(getHistoryVideos)
</script>

<template>
  <ElEmpty v-if="!videos.length" description="Please login before continuing" class="h-90vh" />
  <VideosBoard :callback="loadmore" :videos="videos" />
</template>
