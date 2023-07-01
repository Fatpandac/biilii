<script setup lang="ts">
import dayjs from 'dayjs'
import type { Video } from '@/utils/api'

defineProps<{
  callback: () => void
  videos: Video[]
}>()

function isCrossDay(time: number, preTime: number) {
  return dayjs(time * 1000).format('DD') !== dayjs(preTime * 1000).format('DD')
}

function getPreTime(index: number, videos: Video[]) {
  return videos[index - 1 > 0 ? index - 1 : 0].view_at
}
</script>

<template>
  <InfiniteScroll
    class="pb16"
    @load="callback"
  >
    <ElTimeline class="w-full max-w-200">
      <ElTimelineItem v-for="(video, index) in videos" :key="video.id ?? video.aid" :color="isCrossDay(video.view_at, getPreTime(index, videos)) ? '#f97316' : ''" :timestamp="dayjs(video.view_at * 1000).format('YYYY/MM/DD HH:mm')" placement="top">
        <VideoMidCard :video="video" />
      </ElTimelineItem>
    </ElTimeline>
  </InfiniteScroll>
</template>
