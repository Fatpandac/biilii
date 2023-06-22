<script setup lang="ts">
import type { DynamicItem, DynamicPost } from '@/utils/getDynamicFeed'

const props = defineProps<{
  data: DynamicItem
}>()
const data = ref(props.data as DynamicPost)

const date = computed(() => formatDateForDynamicPost(data.value.modules.module_author.pub_ts))

const images = computed(() => data.value.modules.module_dynamic.major?.draw.items.map(item => item.src))
const article = computed(() => data.value.modules.module_dynamic.desc.text.split('\n\n'))
</script>

<template>
  <DynamicBaseCard
    :id="data.id_str" :name="data.modules.module_author.name"
    :avatar-url="data.modules.module_author.face" :date="date" :state="data.modules.module_stat"
  >
    <template #Content>
      <article class="mt2">
        <p v-for="(item, index) in article" :key="index" class="break-all whitespace-normal">
          {{ item }}
        </p>
      </article>
      <PhotoGrid v-if="images" class="w-full" :images="images" />
    </template>
  </DynamicBaseCard>
</template>
