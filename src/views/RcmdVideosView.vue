<script setup lang="ts">
import type { Video } from '@/utils/api'

const { data, loadmore } = useDataLoadmore<Video>(getRcmdVideos)

const videos = computed(() => data.value.filter(item => item.bvid))
</script>

<template>
  <VideosBoard :callback="loadmore" :videos="videos" />
</template>
