<script setup lang="ts">
const emits = defineEmits(['load'])

function load() {
  emits('load')
}
</script>

<template>
  <div
    v-infinite-scroll="load" :infinite-scroll-distance="300"
    :infinite-scroll-immediate="false"
  >
    <slot />
  </div>
</template>
