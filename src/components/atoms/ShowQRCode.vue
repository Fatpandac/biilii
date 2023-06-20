<script setup lang="ts">
defineProps<{
  qrCode: string
}>()
</script>

<template>
  <div class="content-center overflow-hidden border rounded-md shadow-xl w50 h50 p2 bg-slate-50">
    <img v-if="qrCode" class="w-full h-full select-none" :src="qrCode">
    <div v-else class="w-full h-full rounded-md animate-pulse bg-slate-200" />
  </div>
</template>
