<script setup lang="ts">
withDefaults(
  defineProps<{
    showDarwerButton?: boolean
  }>(), {
    showDarwerButton: false,
  },
)
const { showDarwer } = storeToRefs(navStore())

const router = useRouter()
</script>

<template>
  <div class="flex items-center justify-between h-full">
    <div class="flex items-center">
      <DarwerIcon class="w-10 h-10 lg:invisible" :class="[{ 'visible!': showDarwerButton }]" @click="showDarwer = !showDarwer" />
      <span class="text-2xl text-orange-500 transition-all cursor-pointer ml4 hover:text-blue-500" @click="router.push('/')">Biilii</span>
    </div>
    <SearchBar />
    <UserAvatar class="right-2" />
  </div>
</template>
