<script setup lang="ts">
const { state, QRCode } = useLogin()
</script>

<template>
  <div class="flex items-center justify-center w-screen h-screen">
    <img v-if="!state" :src="QRCode">
    <h1>hello</h1>
  </div>
</template>
