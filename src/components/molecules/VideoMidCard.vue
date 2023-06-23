<script setup lang="ts">
import type { Video } from '@/utils/api'
import type { DynamicVideoInfo } from '@/utils/getDynamicFeed'

const props = defineProps<{
  video: Video | DynamicVideoInfo
}>()

const cover = computed(() => (props.video as Video).pic || (props.video as DynamicVideoInfo).cover)
const view = computed(() => (props.video as DynamicVideoInfo).stat.play || formatNumber((props.video as Video).stat.view))
</script>

<template>
  <div class="box-border w-full border-gray-300 border-solid rounded-md cursor-pointer mt2 border-1 group">
    <RouterLink :to="`/watch?aid=${video.aid}`">
      <div class="flex">
        <ElImage referrerpolicy="no-referrer" class="max-h-30 min-w-55 rounded-l-md aspect-video" :src="cover" lazy fit="cover" />
        <div class="relative flex flex-col justify-start w-full h-30 ml2">
          <span class="text-base break-all text-wrap line-clamp-2 group-hover:(text-blue)">{{ video.title }}</span>
          <span class="text-sm text-gray-600 break-all text-wrap line-clamp-2 opacity-40 mt2">{{ video.desc }}</span>
          <div class="absolute bottom-0 left-0 flex">
            <div class="flex items-center text-gray-600 opacity-40">
              <ViewsIcon class="w-5 h-5" />
              <span class="ml2">{{ view }}</span>
            </div>
            <div class="flex items-center text-gray-600 opacity-40 ml4">
              <DanmukuIcon class="w-5 h-5" />
              <span class="ml2">{{ video.stat.danmaku }}</span>
            </div>
          </div>
        </div>
      </div>
    </RouterLink>
  </div>
</template>
