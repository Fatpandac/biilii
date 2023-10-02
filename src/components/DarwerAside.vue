<script setup lang="ts">
withDefaults(
  defineProps<{
    unvariable?: boolean
  }>(),
  {
    unvariable: false,
  },
)

const { showDarwer } = storeToRefs(navStore())
</script>

<template>
  <ElDrawer v-model="showDarwer" direction="ltr" class="w-60! drawer" :with-header="false">
    <div class="sticky top-0 z-10 flex items-center bg-white el-header">
      <DarwerIcon class="w-10 h-10 cursor-pointer" @click="showDarwer = !showDarwer" />
    </div>
    <Aside unvariable />
  </ElDrawer>
</template>

<style>
.el-drawer__body::-webkit-scrollbar {
  display: none;
}

.el-scrollbar {
  overscroll-behavior: contain
}
</style>
