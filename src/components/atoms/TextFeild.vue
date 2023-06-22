<script setup lang="ts">
const descDiv = ref<HTMLSpanElement>()
const isHidden = ref(false)
const showMore = ref(false)
const scrollHeight = ref(0)
const offsetHeight = ref(0)

onMounted(() => {
  scrollHeight.value = descDiv.value?.scrollHeight ?? 0
  offsetHeight.value = descDiv.value?.clientHeight ?? 0
  isHidden.value = scrollHeight.value > offsetHeight.value

  window.addEventListener('resize', () => {
    scrollHeight.value = descDiv.value?.scrollHeight ?? 0
    offsetHeight.value = descDiv.value?.clientHeight ?? 0
    isHidden.value = scrollHeight.value > offsetHeight.value

    // reset data
    if (isHidden)
      showMore.value = false
  })
})
</script>

<template>
  <div>
    <span ref="descDiv" class="whitespace-pre-wrap" :class="[{ 'line-clamp-4': !showMore }]">
      <slot />
    </span>
    <span v-if="isHidden" class="block text-blue-400 cursor-pointer" @click="showMore = !showMore">
      {{ showMore ? '收起' : '展开' }}
    </span>
  </div>
</template>
