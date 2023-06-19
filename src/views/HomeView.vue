<script setup lang="ts">
const { isLogin, QRCode } = useLogin()
</script>

<template>
  <div class="flex items-center justify-center w-screen h-screen">
    <img v-if="!isLogin" :src="QRCode">
    <h1>hello</h1>
  </div>
</template>
