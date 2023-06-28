<script setup lang="ts">
import type { Video } from '@/utils/api'

const { data: videos, loadmore, isLoading } = useDataLoadmore<Video>(getHistoryVideos)
</script>

<template>
  <MyEmpty :data="videos" :is-loading="isLoading" />
  <VideosBoard :callback="loadmore" :videos="videos" />
</template>
