<script setup lang="ts">
const route = useRoute()

const aid = computed(() => String(route.query.aid))
const { videoInfo } = useVideoInfo(aid)
const { relatedVideos } = useVideoRelated(aid)

const views = computed(() => formatNumber(videoInfo.value.stat?.view))
const danmaku = computed(() => formatNumber(videoInfo.value.stat?.danmaku))
</script>

<template>
  <div class="flex flex-col w-full xl:flex-row">
    <div class="w-full xl:w-5/7">
      <h1 class="font-400 my3">
        {{ videoInfo.title }}
      </h1>
      <div class="flex flex-row my2">
        <div class="flex items-center text-gray-600 opacity-40">
          <ViewsIcon class="w-5 h-5" />
          <span class="ml2">{{ views }}</span>
        </div>
        <div class="flex items-center text-gray-600 opacity-40 ml4">
          <DanmukuIcon class="w-5 h-5" />
          <span class="ml2">{{ danmaku }}</span>
        </div>
      </div>
      <div class="w-full aspect-video">
        <BilibiliVideoIframe :aid="aid" />
      </div>
    </div>
    <div class="xl:(w-2/7 ml2)">
      <VideoMidCard v-for="video in relatedVideos" :key="video.id" class="border-0" :video="video" />
    </div>
  </div>
</template>
