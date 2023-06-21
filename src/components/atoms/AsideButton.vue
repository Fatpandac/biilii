<script setup lang="ts">
const props = defineProps<{
  to: string
  title: string
  icon: ReturnType<typeof markRaw>
}>()

const route = useRoute()

const isActive = computed(() => route.path === props.to)
</script>

<template>
  <RouterLink :to="to" class="text-black decoration-none">
    <div class="flex flex-col items-center justify-center md:(flex-row) p2 m2 hover:(bg-light bg-opacity-60 rounded-md) active:(bg-light bg-opacity-60 rounded-md)" :class="[{ 'bg-light bg-opacity-60 rounded-md': isActive }]">
      <component :is="icon" class="w-8 h-8" />
      <span class="w-3/4 overflow-hidden text-sm text-center md:(text-lg text-left pl4) text-nowrap text-ellipsis">{{ title }}</span>
    </div>
  </RouterLink>
</template>
