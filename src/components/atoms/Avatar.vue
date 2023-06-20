<script setup lang="ts">
defineProps<{
  avatarUrl: string
}>()
</script>

<template>
  <div class="flex items-center justify-center w-full h-full cursor-pointer" :class="[{ 'bg-blue-400': !avatarUrl }]">
    <img v-if="avatarUrl !== ''" referrerpolicy="no-referrer" class="w-full h-full" :src="avatarUrl" alt="avatar">
    <span v-else class="font-mono text-sm text-white select-none">登录</span>
  </div>
</template>
