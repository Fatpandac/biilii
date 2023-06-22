<script setup lang="ts">
import type { DynamicItem, DynamicVideo } from '@/utils/getDynamicFeed'

const props = defineProps<{
  data: DynamicItem
}>()

// resign data type
const data = ref(props.data as DynamicVideo)
</script>

<template>
  <DynamicBaseCard
    :id="data.id_str" :name="data.modules.module_author.name"
    :avatar-url="data.modules.module_author.face" :date="data.modules.module_author.pub_time"
    :state="data.modules.module_stat"
  >
    <template #Content>
      <article>
        <TextFeild>
          {{ data.modules.module_dynamic.desc?.text }}
        </TextFeild>
      </article>
      <RouterLink :to="`/watch?aid=${data.modules.module_dynamic.major.archive.aid}`">
        <div class="box-border flex w-full border-gray-300 border-solid rounded-md cursor-pointer mt2 border-1 group">
          <ElImage referrerpolicy="no-referrer" class="w-30 sm:w-40 md:w-60 rounded-l-md aspect-video shrink-0" :src="data.modules.module_dynamic.major.archive.cover" lazy fit="cover" />
          <div class="relative flex flex-col justify-start h-40 ml2">
            <span class="text-base break-all text-wrap line-clamp-2 group-hover:(text-blue)">{{ data.modules.module_dynamic.major.archive.title }}</span>
            <span class="text-sm text-gray-600 break-all text-wrap line-clamp-2 opacity-40 mt2">{{ data.modules.module_dynamic.major.archive.desc }}</span>
            <div class="absolute bottom-0 left-0 flex">
              <div class="flex items-center text-gray-600 opacity-40">
                <ViewsIcon class="w-5 h-5" />
                <span class="ml2">{{ data.modules.module_dynamic.major.archive.stat.play }}</span>
              </div>
              <div class="flex items-center text-gray-600 opacity-40 ml4">
                <DanmukuIcon class="w-5 h-5" />
                <span class="ml2">{{ data.modules.module_dynamic.major.archive.stat.danmaku }}</span>
              </div>
            </div>
          </div>
        </div>
      </RouterLink>
    </template>
  </DynamicBaseCard>
</template>
