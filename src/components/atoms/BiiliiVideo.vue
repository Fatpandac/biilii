<script setup lang="ts">
import type { Video } from '@/utils/api'

const props = defineProps<{
  aid: string
}>()

const aid = computed(() => props.aid)
const videoInfo = useDataWithAid<Video, string>(aid, getVideoInfo)

const cid = computed(() => videoInfo.data.value?.cid.toString() || '')

const videoUrl = usePlayURL(aid, cid)

const options = computed(() => ({
  src: videoUrl.data.value?.durl[0].url.replace('https://', '/bilivideo/'),
  videoProps: {
    autoplay: true,
  },
}))
</script>

<template>
  <NPlayer
    :options="options"
  />
</template>
