<script setup lang="ts">
// Fetch bilibili when the app first mounted
// to get the default cookie from bilibili.com
onMounted(() => {
  fetch('/biilii')
})

const route = useRoute()
const isKeepAlive = computed(() => route.meta.keepAlive)
</script>

<template>
  <RouterView v-slot="{ Component }">
    <KeepAlive>
      <component :is="Component" v-if="isKeepAlive" />
    </KeepAlive>
    <component :is="Component" v-if="!isKeepAlive" />
  </RouterView>
</template>
