<template>
  <ElContainer>
    <ElHeader class="sticky top-0 z-10 bg-slate-300">
      <slot name="Header" />
    </ElHeader>
    <ElMain>
      <slot name="Main" />
    </ElMain>
    <DarwerAside unvariable />
  </ElContainer>
</template>
