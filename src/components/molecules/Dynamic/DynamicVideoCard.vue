<script setup lang="ts">
import type { DynamicItem, DynamicVideo } from '@/utils/getDynamicFeed'

const props = defineProps<{
  data: DynamicItem
}>()
// resign data type
const data = ref(props.data as DynamicVideo)
</script>

<template>
  <div />
</template>
