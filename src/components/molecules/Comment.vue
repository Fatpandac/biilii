<script setup lang="ts">
defineProps<{
  avatar: string
  uname: string
  message: string
}>()
</script>

<template>
  <div class="flex justify-start">
    <ElImage class="w-10 h-10 rounded-full shrink-0" :src="avatar" referrerpolicy="no-referrer" lazy />
    <div class="w-full ml4">
      <span class="text-gray-600 opacity-40">{{ uname }}</span>
      <TextFeild class="mt1">
        {{ message }}
      </TextFeild>
      <slot />
    </div>
  </div>
</template>
