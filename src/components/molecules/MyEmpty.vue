<script setup lang="ts">
defineProps<{
  data: any[]
  isLoading: boolean
}>()
</script>

<template>
  <ElEmpty v-if="!data.length" v-loading="isLoading" class="h-90vh">
    <template v-if="isLoading" #image>
      <div />
    </template>
    <template v-if="isLoading" #description>
      <div />
    </template>
  </ElEmpty>
</template>
