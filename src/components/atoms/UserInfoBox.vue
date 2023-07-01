<script setup lang="ts">
defineProps<{
  title: string
  data: number
}>()
</script>

<template>
  <div class="flex flex-col justify-center select-none p2 aspect-square">
    <span>{{ title }}</span>
    <span>{{ data }}</span>
  </div>
</template>
