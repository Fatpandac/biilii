<script setup lang="ts">
import type { DynamicModuleStat } from '@/utils/getDynamicFeed'

const props = defineProps<{
  id: string
  name: string
  avatarUrl: string
  date: string
  state: DynamicModuleStat
}>()

const forward = computed(() => {
  const { forward } = props.state

  return forward.count ? formatNumber(forward.count) : '转发'
})
const comment = computed(() => {
  const { comment } = props.state

  return comment.count ? formatNumber(comment.count) : '评论'
})
const like = computed(() => {
  const { like } = props.state

  return like.count ? formatNumber(like.count) : '点赞'
})
</script>

<template>
  <div class="w-5/6 shadow-sm rounded-xl bg-slate-50 md:w-3/4 lg:w-3xl m2 p2">
    <div class="flex items-start justify-start w-full">
      <ElImage
        class="w-12 h-12 border-solid rounded-full border-gray-50 border-1 shrink-0"
        loading="lazy"
        referrerpolicy="no-referrer" :src="avatarUrl"
      />
      <div class="flex flex-col items-start justify-center w-full p2 pt0">
        <span class="text-lg text-ellipsis">{{ name }}</span>
        <span class="text-sm text-gray-700 opacity-30 mt1">{{ date }}</span>
        <slot name="Content" />
      </div>
    </div>
    <div class="flex items-center justify-around w-full mt4">
      <div class="flex items-center justify-center cursor-pointer hover:(text-blue)">
        <div class="i-solar:multiple-forward-right-outline" />
        <span class="ml2">{{ forward }}</span>
      </div>
      <div class="flex items-center justify-center cursor-pointer hover:(text-blue)">
        <div class="i-iconamoon:comment-light" />
        <span class="ml2">{{ comment }}</span>
      </div>
      <div class="flex items-center justify-center cursor-pointer hover:(text-blue)" :class="[{ 'text-blue': state.like.status }]">
        <div class="i-iconamoon:like-light" />
        <span class="ml2">{{ like }}</span>
      </div>
    </div>
  </div>
</template>
