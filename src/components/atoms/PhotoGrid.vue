<script setup lang="ts">
const props = defineProps<{
  images: string[]
}>()
const col = computed(() => props.images.length % 3 || props.images.length / 3)
const row = computed(() => props.images.length % 3 || props.images.length / 3)
</script>

<template>
  <div class="grid w-full grid-cols-3 gap-2" :class="[`grid-rows-${row}`]">
    <ElImage
      v-for="(image, index) in images.slice(0, 9)" :key="index"
      class="object-cover w-full rounded-md" :class="[{ 'aspect-square': col >= 1 }]"
      referrerpolicy="no-referrer"
      :src="image"
      :initial-index="index"
      :preview-src-list="images"
      fit="cover"
      hide-on-click-modal
      loading="lazy"
    />
  </div>
</template>
