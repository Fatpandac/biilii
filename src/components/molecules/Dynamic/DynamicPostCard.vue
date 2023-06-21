<script setup lang="ts">
import dayjs from 'dayjs'
import type { DynamicItem, DynamicPost } from '@/utils/getDynamicFeed'

const props = defineProps<{
  data: DynamicItem
}>()
const data = ref(props.data as DynamicPost)

const date = computed(() => dayjs(data.value.modules.module_author.pub_ts).format('MM/DD mm:hh:ss'))
const forward = computed(() => {
  const { forward } = data.value.modules.module_stat

  return forward.count ? formatNumber(forward.count) : '转发'
})
const comment = computed(() => {
  const { comment } = data.value.modules.module_stat

  return comment.count ? formatNumber(comment.count) : '评论'
})
const like = computed(() => {
  const { like } = data.value.modules.module_stat

  return like.count ? formatNumber(like.count) : '点赞'
})
</script>

<template>
  <div class="w-5/6 shadow-sm rounded-xl bg-slate-50 md:w-3/4 lg:w-3xl m2 p2">
    <div class="flex items-start justify-start">
      <img class="w-12 h-12 border-solid rounded-full border-gray-50 border-1" :src="data.modules.module_author.face">
      <div class="flex flex-col items-start justify-center p2 pt0">
        <span class="text-lg text-ellipsis">{{ data.modules.module_author.name }}</span>
        <span class="text-sm text-gray-700 opacity-30 mt1">{{ date }}</span>
        <article class="mt2">
          <span>
            {{ data.modules.module_dynamic.desc.text }}
          </span>
        </article>
      </div>
    </div>
    <div class="flex items-center justify-around w-full mt4">
      <div class="flex items-center justify-center cursor-pointer hover:(text-blue)" title="">
        <div class="i-solar:multiple-forward-right-outline" />
        <span class="ml2">{{ forward }}</span>
      </div>
      <div class="flex items-center justify-center cursor-pointer hover:(text-blue)" title="">
        <div class="i-iconamoon:comment-light" />
        <span class="ml2">{{ comment }}</span>
      </div>
      <div class="flex items-center justify-center cursor-pointer hover:(text-blue)" title="" :class="[{ 'text-blue': data.modules.module_stat.like.status }]">
        <div class="i-iconamoon:like-light" />
        <span class="ml2">{{ like }}</span>
      </div>
    </div>
  </div>
</template>
