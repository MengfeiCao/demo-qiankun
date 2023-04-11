<script setup lang="ts">
import { ref, inject } from 'vue';
const $bus: any = inject('$bus');
const activeIndex = ref('1');
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key);
  // window.history.pushState({}, '', key);
  
  // if (key === '/vackbot-recorder') {
  //   $bus.$off('test');
  // }
  // $bus.$emit('test', 'aaa');
};
</script>

<template>
  <el-menu
    router
    :default-active="activeIndex"
    mode="horizontal"
    :ellipsis="false"
    @select="handleSelect"
  >
    <el-menu-item index="/primary-app">主应用页面</el-menu-item>
    <div class="flex-grow" />
    <el-menu-item index="/micro-app-react">微应用-react</el-menu-item>
    <div class="flex-grow" />
    <el-menu-item index="/micro-app-vue">微应用-vue</el-menu-item>
  </el-menu>
</template>

<style scoped>
</style>
