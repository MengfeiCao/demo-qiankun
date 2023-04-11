import { createApp } from 'vue';
import router from './router';
import './style.css'
import App from './App.vue'
import { registerMicroApps, start } from 'qiankun';
// import { useRouter } from 'vue-router';
// const vueRouter = useRouter();
// console.log(vueRouter);

import Bus from './bus';
const $bus = new Bus();
registerMicroApps([
  {
    name: 'app-react',
    entry: '//localhost:3000',
    container: '#reactContainer',
    activeRule: '/micro-app-react',
    props: {
      pRouter: router,
    }
  },
  {
    name: 'app-vue',
    entry: '//localhost:8080',
    container: '#vueContainer',
    activeRule: '/micro-app-vue',
    props: {
      pRouter: router,
    }
  },
]);
// 启动 qiankun
start({ singular: false });

createApp(App)
  .provide('$bus', $bus)
  .use(router)
  .mount('#app');
