<script setup lang="ts">
import type { DynamicItem, DynamicPost } from '@/utils/getDynamicFeed'

const props = defineProps<{
  data: DynamicItem
}>()
const data = ref(props.data as DynamicPost)

const images = computed(() => data.value.modules.module_dynamic.major?.draw.items.map(item => item.src))
</script>

<template>
  <DynamicBaseCard
    :id="data.id_str" :name="data.modules.module_author.name"
    :avatar-url="data.modules.module_author.face" :date="data.modules.module_author.pub_time"
    :state="data.modules.module_stat"
  >
    <template #Content>
      <article class="mt2">
        <TextFeild>
          {{ data.modules.module_dynamic.desc.text }}
        </TextFeild>
      </article>
      <PhotoGrid v-if="images" class="w-full mt2" :images="images" />
    </template>
  </DynamicBaseCard>
</template>
