<script setup lang="ts">
import type { Reply } from '@/utils/getReply'

defineProps<{
  reply: Reply
}>()
</script>

<template>
  <div class="flex justify-start">
    <ElImage class="w-10 h-10 rounded-full shrink-0" :src="reply.member.avatar" referrerpolicy="no-referrer" lazy />
    <div class="ml4">
      <span class="text-gray-600 opacity-40">{{ reply.member.uname }}</span>
      <TextFeild class="mt1">
        {{ reply.content.message }}
      </TextFeild>
      <Comment v-for="(item, index) in reply.replies" :key="index" class="my4" :reply="item" />
    </div>
  </div>
</template>
