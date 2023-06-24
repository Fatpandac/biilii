<script setup lang="ts">
const props = defineProps<{
  aid: string
}>()

/* See https://github.com/vuejs/vue-router/issues/2403#issuecomment-476737303
** From: posva
*/
const iframe = ref<HTMLIFrameElement>()
const aid = computed(() => props.aid)

onMounted(() => {
  iframe.value?.contentWindow?.location.replace(`//player.bilibili.com/player.html?aid=${props.aid}&&high_quality=1`)
})

watch(aid, () => {
  iframe.value?.contentWindow?.location.replace(`//player.bilibili.com/player.html?aid=${aid.value}&&high_quality=1`)
})
</script>

<template>
  <KeepAlive>
    <iframe
      ref="iframe"
      allowfullscreen width="100%" height="100%" scrolling="no" frameborder="0"
      sandbox="allow-top-navigation allow-same-origin allow-forms allow-scripts"
    />
  </KeepAlive>
</template>
