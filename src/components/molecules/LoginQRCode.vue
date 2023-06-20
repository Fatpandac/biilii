<script setup lang="ts">
const props = defineProps<{
  callback?: (ref?: Ref | HTMLElement) => void
}>()
const { isLogin, QRCode } = useLogin()
const { fetchData } = userStore()

watch(isLogin, () => {
  fetchData()

  if (props.callback)
    props.callback()
})
</script>

<template>
  <ShowQRCode :qr-code="QRCode" />
</template>
