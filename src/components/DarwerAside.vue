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
  <ElDrawer v-model="showDarwer" direction="ltr" class="w-60!" :with-header="false">
    <div class="flex items-center el-header">
      <DarwerIcon class="w-10 h-10" @click="showDarwer = !showDarwer" />
    </div>
    <Aside unvariable />
  </ElDrawer>
</template>
