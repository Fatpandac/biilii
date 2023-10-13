<script setup lang="ts">
const { userInfo } = storeToRefs(userStore())
</script>

<template>
  <div>
    <Popover class="relative">
      <PopoverButton as="div" class="w-10 h-10 overflow-hidden rounded-full p0 active:(border-1 border-blue-400 border-solid) box-border">
        <Avatar :avatar-url="userInfo.face ?? ''" />
      </PopoverButton>
      <PopoverOverlay v-if="!userInfo.isLogin" class="fixed inset-0 z-25 bg-black opacity-30" />
      <!-- Add a name attribute for Safari to load the web page without issues -->
      <Transition
        name="nomean"
        enter-active-class="transition duration-200 ease-out" enter-from-class="translate-y-1 opacity-0"
        enter-to-class="translate-y-0 opacity-100" leave-active-class="transition duration-150 ease-in"
        leave-from-class="translate-y-0 opacity-100" leave-to-class="translate-y-1 opacity-0"
      >
        <PopoverPanel v-slot="{ close }" class="absolute right-0 z-25 transform mt2">
          <LoginQRCode v-if="!userInfo.isLogin" :callback="close" />
          <UserMenu v-else :callback="close" />
        </PopoverPanel>
      </Transition>
    </Popover>
  </div>
</template>
