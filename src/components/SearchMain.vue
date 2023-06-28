<script setup lang="ts">
import type { SerachVideo } from '@/utils/getSearch'

const route = useRoute()

const keyword = computed(() => String(route.query.keyword) || '')

const { data: searchVideoRes, loadmore, isLoading } = useDataLoadmore<SerachVideo>(getSearch, false, keyword)

useInfiniteScroll(
  window,
  loadmore,
  {
    distance: 300,
  },
)
</script>

<template>
  <MyEmpty :data="searchVideoRes" :is-loading="isLoading" />
  <div
    class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 pb16"
  >
    <VideoCard
      v-for="video in searchVideoRes"
      :id="video.aid" :key="video.id"
      :view="video.play" :pubdate="video.pubdate"
      :pic="video.pic" :owner-name="video.author"
      :owner-id="video.mid" :title="video.title"
    />
  </div>
</template>
