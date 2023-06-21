<script setup lang="ts">
import type { DynamicItem, DynamicLive } from '@/utils/getDynamicFeed'

const props = defineProps<{
  data: DynamicItem
}>()
const data = ref(props.data as DynamicLive)
</script>

<template>
  <div />
</template>
