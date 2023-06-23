<script setup lang="ts">
const route = useRoute()
const mid = computed(() => Number.parseInt(`${route.params.mid}`))
const { userInfoCard } = useUserInfoCard(mid)
const { videos, load } = useRcmdVideos()
</script>

<template>
  <div class="flex flex-col items-center justify-center">
    <div class="flex items-end w-full h-40 p4 max-w-300">
      <ElImage class="border-gray-400 border-solid rounded-full w-30 h-30 border-3 shrink-0" :src="userInfoCard.card?.face" referrerpolicy="no-referrer" />
      <div class="flex flex-col ml4">
        <span class="text-xl">{{ userInfoCard.card?.name }}</span>
        <span class="text-lg text-gray-600 opacity-40 line-clamp-1">{{ userInfoCard.card?.sign }}</span>
      </div>
    </div>
    <Divider class="w-full max-w-300" />
    <!-- Cannot get user video from space because anti-crawler so use Rcmd Video replace it -->
    <VideosBoard class="h-90vh max-w-300" :callback="load" :videos="videos" />
  </div>
</template>
