<script setup lang="ts">
defineProps<{
  title: string
  data: number
}>()
</script>

<template>
  <div class="hover:(bg-opacity-30 bg-white rounded-md) p2 aspect-square flex flex-col justify-center select-none">
    <span>{{ title }}</span>
    <span>{{ data }}</span>
  </div>
</template>
