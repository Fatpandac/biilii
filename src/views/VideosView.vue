<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>

<template>
  <div>
    <h1>This is {{ title }} videos</h1>
  </div>
</template>
