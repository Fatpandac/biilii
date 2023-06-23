<script setup lang="ts">
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

const props = defineProps<{
  id: number
  view: number
  pubdate: number
  pic: string
  ownerFace: string
  title: string
  ownerName: string
}>()

dayjs.extend(relativeTime)

const views = computed(() => formatNumber(props.view))
const date = computed(() => dayjs(props.pubdate * 1000).fromNow())
</script>

<template>
  <div class="flex flex-col items-start justify-start cursor-pointer m4">
    <RouterLink :to="`/watch?aid=${id}`">
      <ElImage :src="pic" class="object-cover w-full transition-all duration-75 aspect-video rounded-xl hover:rounded-none" lazy referrerpolicy="no-referrer" />
    </RouterLink>
    <div class="flex flex-row justify-start w-full py2">
      <ElImage :src="ownerFace" class="w-10 h-10 border-gray-200 border-solid rounded-full shrink-0 border-1" lazy referrerpolicy="no-referrer" />
      <div class="flex flex-col justify-start w-full pl2">
        <RouterLink :to="`/watch?aid=${id}`">
          <span class="text-md line-clamp-2 hover:(text-blue) transition-all duration-75" v-html="title " />
        </RouterLink>
        <span class="text-xs text-black text-gray-700 mb1 mt2">{{ ownerName }}</span>
        <div class="text-xs text-black text-gray-700">
          <span>{{ views }} views </span>
          <span>• {{ date }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
