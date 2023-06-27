<script setup lang="ts">
import type { Video } from '@/utils/api'
import type { Reply } from '@/utils/getReply'
import type { UserInfoCard } from '@/utils/getUserInfoCard'

const route = useRoute()

const aid = computed(() => String(route.query.aid))
const { data: videoInfo } = useDataWithAid<Video, string>(aid, getVideoInfo)
const { data: relatedVideos } = useDataWithAid<Video[], string>(aid, getVideoRelate)
const { data: replies, loadmore, isLoading } = useDataLoadmore<Reply>(getReply, false, aid)

const videoOwnerID = computed(() => videoInfo.value?.owner.mid)

const { data: videoOwnerInfoCard } = useDataWithAid<UserInfoCard, number | undefined>(videoOwnerID, getUserInfoCard)

const views = computed(() => formatNumber(videoInfo.value?.stat.view))
const danmaku = computed(() => formatNumber(videoInfo.value?.stat?.danmaku))
const follower = computed(() => formatNumber(videoOwnerInfoCard.value?.follower))

useInfiniteScroll(
  window,
  loadmore,
  {
    distance: 300,
  },
)
</script>

<template>
  <div class="flex flex-col items-center">
    <div class="flex flex-col w-full xl:(flex-row) max-w-400 ">
      <div class="w-full xl:(w-5/7)">
        <h1 class="font-400 my3">
          {{ videoInfo?.title }}
        </h1>
        <div class="flex flex-row my2">
          <div class="flex items-center text-gray-600 opacity-40">
            <ViewsIcon class="w-5 h-5" />
            <span class="ml2">{{ views }}</span>
          </div>
          <div class="flex items-center text-gray-600 opacity-40 ml4">
            <DanmukuIcon class="w-5 h-5" />
            <span class="ml2">{{ danmaku }}</span>
          </div>
        </div>
        <div class="w-full aspect-video">
          <BilibiliVideoIframe :aid="aid" />
        </div>
        <div class="flex w-full my2">
          <ElImage
            class="w-12 h-12 rounded-full" :src="videoInfo?.owner.face"
            referrerpolicy="no-referrer"
          />
          <div class="flex flex-col ml4">
            <span class="text-lg">{{ videoInfo?.owner.name }}</span>
            <span class="text-sm text-gray-600 opacity-40">{{ follower }} subscribers</span>
          </div>
        </div>
        <div class="w-full my2">
          <TextFeild class="text-gray-600 opacity-40">
            {{ videoInfo?.desc }}
          </TextFeild>
        </div>
      </div>
      <ElScrollbar class="xl:(w-2/7 ml2 h-200!) h-70! overflow-hidden">
        <VideoMidCard v-for="video in relatedVideos" :key="video.id" class="border-0" :video="video" />
        <div class="h-5 SpaceHolder" />
      </ElScrollbar>
    </div>
    <Divider class="hidden xl:(w-full max-w-400 flex)" />
    <div v-infinite-scroll="loadmore" :infinite-scroll-immediate="false" class="w-full mt4 xl:max-w-400">
      <Comments v-for="(reply, index) in replies" :key="index" class="mt4" :reply="reply" />
      <div v-show="isLoading" class="w-full text-center">
        <span class="text-xl text-orange-400 animate-flash animate-count-infinte">Loading...</span>
      </div>
    </div>
  </div>
</template>
