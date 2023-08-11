import { createApp } from 'vue';

import App from './App.vue';

import * as ElementPlusIconsVue from '@element-plus/icons-vue';

import router from './router';

import store from './store/index';

import '@/styles/index.scss'



const app = createApp(App);

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}

app.use(router).use(store);
app.mount('#app');
