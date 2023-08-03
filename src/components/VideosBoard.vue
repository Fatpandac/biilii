<script setup lang="ts">
import type { Video } from '@/utils/api'

const props = defineProps<{
  callback: () => void
  videos: Video[]
}>()

useInfiniteScroll(
  window,
  props.callback,
  {
    distance: 300,
  },
)
</script>

<template>
  <div
    class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 pb16"
  >
    <VideoCard
      v-for="video in videos" :id="video.id ?? video.aid"
      :key="video.id ?? video.aid" :view="video.stat.view" :pubdate="video.pubdate"
      :pic="video.pic" :owner-face="video.owner.face" :owner-name="video.owner.name"
      :owner-id="video.owner.mid" :title="video.title"
    />
  </div>
</template>
