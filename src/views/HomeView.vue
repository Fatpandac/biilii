<script setup lang="ts">
const { userInfo } = storeToRefs(userStore())
</script>

<template>
  <div class="flex flex-col items-center justify-center w-screen h-screen">
    <Popover class="relative">
      <PopoverButton as="div" class="overflow-hidden border-0 rounded-full shadow-md h-15 w-15 p0">
        <Avatar class="w-full h-full" :avatar-url="userInfo.face ?? ''" />
      </PopoverButton>
      <PopoverOverlay v-if="!userInfo.isLogin" class="fixed inset-0 bg-black opacity-30" />
      <Transition
        enter-active-class="transition duration-200 ease-out" enter-from-class="translate-y-1 opacity-0"
        enter-to-class="translate-y-0 opacity-100" leave-active-class="transition duration-150 ease-in"
        leave-from-class="translate-y-0 opacity-100" leave-to-class="translate-y-1 opacity-0"
      >
        <PopoverPanel v-slot="{ close }" class="absolute z-10 transform -translate-x-1/2 left-1/2 mt3">
          <LoginQRCode v-if="!userInfo.isLogin" :callback="close" />
        </PopoverPanel>
      </Transition>
    </Popover>
    <RouterLink class="mt10" to="/logout">
      <button>Logout</button>
    </RouterLink>
  </div>
</template>
