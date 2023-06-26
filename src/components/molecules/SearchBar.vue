<script setup lang="ts">
const route = useRoute()
const router = useRouter()
const input = ref(route.query.keyword || '')

function search() {
  if (!input.value)
    return
  router.push({
    path: '/search',
    query: {
      keyword: input.value,
    },
  })
}
</script>

<template>
  <div class="border-black w-60 md:w-90 h-3/5 border-1 header-search">
    <ElInput v-model="input" class="w-full h-full" clearable @change="search">
      <template #append>
        <SearchIcon class="w-6 h-6" />
      </template>
    </ElInput>
  </div>
</template>
