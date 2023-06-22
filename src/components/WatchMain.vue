<script setup lang="ts">
const route = useRoute()

const aid = String(route.query.aid)
const { videoInfo } = useVideoInfo(aid)

const views = computed(() => formatNumber(videoInfo.value.stat?.view))
const danmaku = computed(() => formatNumber(videoInfo.value.stat?.danmaku))
</script>

<template>
  <div class="flex w-full">
    <div class="w-3/4">
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
    <div class="w-1/4 bg-stone-300" />
  </div>
</template>
