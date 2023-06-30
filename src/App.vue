<script setup lang="ts">
// Fetch bilibili when the app first mounted
// to get the default cookie from bilibili.com
onMounted(() => {
  fetch('/biilii')
})
</script>

<template>
  <RouterView />
</template>
