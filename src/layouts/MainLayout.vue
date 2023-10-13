<template>
  <ElContainer>
    <ElHeader class="fixed top-0 left-0 z-10 w-screen bg-white">
      <slot name="Header" />
    </ElHeader>
    <ElContainer class="h-full">
      <ElAside class="fixed h-screen bg-white top-[65px] w-0! sm:w-25! lg:w-60! transition-all duration-75">
        <slot name="Aside" />
      </ElAside>
      <ElMain class="p0! h-full mt-[65px] ml-0 sm:ml-25 lg lg:ml-60">
        <slot name="Main" />
      </ElMain>
    </ElContainer>
    <DarwerAside />
  </ElContainer>
</template>
