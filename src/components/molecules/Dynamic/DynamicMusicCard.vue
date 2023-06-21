<script setup lang="ts">
import type { DynamicItem, DynamicMusic } from '@/utils/getDynamicFeed'

const props = defineProps<{
  data: DynamicItem
}>()
const data = ref(props.data as DynamicMusic)
</script>

<template>
  <div />
</template>
