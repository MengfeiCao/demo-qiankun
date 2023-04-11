import * as VueRouter from 'vue-router';
import { createWebHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';
import HelloWorld from '../components/HelloWorld.vue';
import PrimaryApp from '../components/PrimaryApp.vue';

const routes: RouteRecordRaw[] = [
  { path: '/', name: 'home', component: HelloWorld },
  { path: '/primary-app', name: 'primary-app', component: PrimaryApp },
];

const router = VueRouter.createRouter({ history: createWebHistory(), routes });

export default router;