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
      <VideoMidCard :video="data.modules.module_dynamic.major.archive" />
    </template>
  </DynamicBaseCard>
</template>
