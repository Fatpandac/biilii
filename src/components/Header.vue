<script setup lang="ts">
withDefaults(
  defineProps<{
    showDarwerButton?: boolean
  }>(), {
    showDarwerButton: false,
  },
)
const { showDarwer } = storeToRefs(navStore())
</script>

<template>
  <div class="flex items-center justify-between h-full">
    <DarwerIcon class="w-10 h-10 lg:invisible" :class="[{ 'visible!': showDarwerButton }]" @click="showDarwer = !showDarwer" />
    <SearchBar />
    <UserAvatar class="right-2" />
  </div>
</template>
