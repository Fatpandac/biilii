<script setup lang="ts">
import DynamicPostCard from './Dynamic/DynamicPostCard.vue'
import DynamicVideoCard from './Dynamic/DynamicVideoCard.vue'
import DynamicMusicCard from './Dynamic/DynamicMusicCard.vue'
import DynamicLiveCard from './Dynamic/DynamicLiveCard.vue'
import type { DynamicItem } from '@/utils/getDynamicFeed'

const props = defineProps<{
  dynamic: DynamicItem
}>()

const componetOfType = {
  DYNAMIC_TYPE_DRAW: DynamicPostCard,
  DYNAMIC_TYPE_WORD: DynamicPostCard,
  DYNAMIC_TYPE_FORWARD: DynamicPostCard,
  DYNAMIC_TYPE_AV: DynamicVideoCard,
  DYNAMIC_TYPE_MUSIC: DynamicMusicCard,
  DYNAMIC_TYPE_LIVE_RCMD: DynamicLiveCard,
}

const componentOfDynamic = computed(() => componetOfType[props.dynamic.type])
</script>

<template>
  <component :is="componentOfDynamic" :data="dynamic" />
</template>
