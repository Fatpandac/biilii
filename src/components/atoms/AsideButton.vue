<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    to: string
    title: string
    icon: ReturnType<typeof markRaw>
    unvariable?: boolean
  }>(),
  {
    unvariable: false,
  },
)

const route = useRoute()

const isActive = computed(() => route.path === props.to)
</script>

<template>
  <RouterLink :to="to" class="text-black decoration-none">
    <div
      class="flex flex-col items-center justify-center lg:(flex-row) p2 m2 hover:(bg-light bg-opacity-60 rounded-lg) active:(bg-light bg-opacity-60 rounded-lg)"
      :class="[{ 'bg-light bg-opacity-60 rounded-lg': isActive }, { 'flex-row!': unvariable }]"
    >
      <component :is="icon" class="w-8 h-8" />
      <span
        class="w-3/4 overflow-hidden text-sm text-center lg:(text-lg text-left pl4) text-nowrap text-ellipsis"
        :class="[{ 'text-lg! text-left! pl4!': unvariable }]"
      >{{ title }}</span>
    </div>
  </RouterLink>
</template>
