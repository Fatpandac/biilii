<script setup lang="ts">

</script>

<template>
  <div class="w-screen h-screen overflow-hidden">
    <ElContainer class="h-screen">
      <ElHeader class="bg-slate-300">
        <slot name="Header" />
      </ElHeader>
      <ElContainer class="h-full">
        <ElAside class="w-25! lg:w-60! transition-all duration-75">
          <slot name="Aside" />
        </ElAside>
        <ElMain class="p0! h-full">
          <slot name="Main" />
        </ElMain>
      </ElContainer>
    </ElContainer>
  </div>
</template>
