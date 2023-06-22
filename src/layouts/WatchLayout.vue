<template>
  <el-container class="w-screen h-screen overflow-hidden">
    <el-header class="bg-slate-300">
      <slot name="Header" />
    </el-header>
    <el-main>
      <slot name="Main" />
    </el-main>
  </el-container>
</template>
