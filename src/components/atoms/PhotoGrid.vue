<script setup lang="ts">
const props = defineProps<{
  images: string[]
}>()

const col = computed(() => props.images.length % 3 || props.images.length / 3)
const row = computed(() => props.images.length % 3 || props.images.length / 3)
</script>

<template>
  <div class="grid w-full gap-1 grid-cols-3" :class="[`grid-rows-${row}`]">
    <img
      v-for="(image, index) in images.slice(0, 9)" :key="index"
      referrerpolicy="no-referrer" :src="image" class="object-cover w-full rounded-md" :class="[{ 'aspect-square': col >= 1 }]"
    >
  </div>
</template>
