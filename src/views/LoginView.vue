<script setup lang="ts">
const { isLogin, QRCode } = useLogin()
const router = useRouter()

watch(isLogin, () => {
  if (isLogin.value)
    router.push('/')
})
</script>

<template>
  <div class="flex items-center justify-center w-screen h-screen">
    <ShowQRCode :qr-code="QRCode" />
  </div>
</template>
