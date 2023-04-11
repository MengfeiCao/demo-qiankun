<script setup lang="ts">
// import HelloWorld from './components/HelloWorld.vue'
import { inject } from 'vue';
import PrimaryMenu from './components/PrimaryMenu.vue';

const $bus: any = inject('$bus');
$bus.$on('test', (val: string) => {
  console.log((val));
});
</script>

<template>
  <PrimaryMenu />
  <router-view></router-view>
  <div id="reactContainer"></div>
  <div id="vueContainer"></div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
