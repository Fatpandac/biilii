<script setup lang="ts">
const route = useRoute()

const keyword = computed(() => String(route.query.keyword) || '')

const { searchVideoRes, load } = useSearch(keyword)

function handleLoad() {
  load()
}
</script>

<template>
  <ElEmpty v-if="!searchVideoRes.length" description="Please login before continuing" class="h-90vh" />
  <InfiniteScroll
    class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 pb16 h-90vh"
    @load="handleLoad"
  >
    <VideoCard
      v-for="video in searchVideoRes" :id="video.aid"
      :key="video.id" :view="video.play" :pubdate="video.pubdate"
      :pic="video.pic" :owner-face="video.pic" :owner-name="video.author"
      :title="video.title"
    />
  </infinitescroll>
</template>
