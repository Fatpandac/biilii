<script setup lang="ts">
defineProps<{
  num: number
}>()
</script>

<template>
  <div class="h-[2px] rounded-sm bg-stone-400">
    <div class="h-[2px] rounded-sm bg-amber-400" :style="[{ width: `calc(100% * ${num})` }]" />
  </div>
</template>
