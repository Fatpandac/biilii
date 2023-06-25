<script setup lang="ts">
import type { Video } from '@/utils/api'

const { data: videos, loadmore } = useDataLoadmore<Video>(getHistoryVideos)
</script>

<template>
  <VideosBoard :callback="loadmore" :videos="videos" />
</template>
