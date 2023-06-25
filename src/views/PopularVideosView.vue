<script setup lang="ts">
import type { Video } from '@/utils/api'

const { data: videos, loadmore } = useDataLoadmore<Video>(getPopurlarVideos)
</script>

<template>
  <VideosBoard :callback="loadmore" :videos="videos" />
</template>
