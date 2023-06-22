<script setup lang="ts">
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

import type { Video } from '@/utils/api'

const props = defineProps<{
  video: Video
}>()

dayjs.extend(relativeTime)

const views = computed(() => formatNumber(props.video.stat.view))
const date = computed(() => dayjs(props.video.pubdate * 1000).fromNow())
</script>

<template>
  <div class="flex flex-col items-start justify-start cursor-pointer m4">
    <ElImage :src="video.pic" class="object-cover w-full transition-all duration-75 aspect-video rounded-xl hover:rounded-none" lazy referrerpolicy="no-referrer" />
    <div class="flex flex-row justify-start w-full py2">
      <ElImage :src="video.owner.face" class="w-10 h-10 border-gray-200 border-solid rounded-full shrink-0 border-1" lazy referrerpolicy="no-referrer" />
      <div class="flex flex-col justify-start w-full pl2">
        <span class="text-md line-clamp-2">{{ video.title }}</span>
        <span class="text-xs text-black text-gray-700 mb1 mt2">{{ video.owner.name }}</span>
        <div class="text-xs text-black text-gray-700">
          <span>{{ views }} views </span>
          <span>• {{ date }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
