<script setup lang="ts">
defineProps<{
  aid: string
}>()
</script>

<template>
  <iframe :src="`//player.bilibili.com/player.html?aid=${aid}&&high_quality=1`" allowfullscreen width="100%" height="100%" scrolling="no" frameborder="0" sandbox="allow-top-navigation allow-same-origin allow-forms allow-scripts" />
</template>
