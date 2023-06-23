<template>
  <ElContainer class="w-screen h-screen overflow-hidden">
    <ElHeader class="bg-slate-300">
      <slot name="Header" />
    </ElHeader>
    <ElContainer class="h-full">
      <ElAside class="w-0! sm:w-25! lg:w-60! transition-all duration-75">
        <slot name="Aside" />
      </ElAside>
      <ElMain class="p0! h-full">
        <slot name="Main" />
      </ElMain>
    </ElContainer>
    <DarwerAside />
  </ElContainer>
</template>
