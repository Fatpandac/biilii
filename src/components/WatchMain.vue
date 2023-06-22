<script setup lang="ts">
const route = useRoute()

const aid = String(route.query.aid)
</script>

<template>
  <div class="w-3/4 aspect-video">
    <BilibiliVideoIframe :aid="aid" />
  </div>
</template>
