<template>
  <ElContainer>
    <ElHeader class="sticky top-0 z-10 w-screen bg-white">
      <slot name="Header" />
    </ElHeader>
    <ElMain>
      <slot name="Main" />
    </ElMain>
    <DarwerAside unvariable />
  </ElContainer>
</template>
