import { createApp } from 'vue';

import App from './App.vue';

import * as ElementPlusIconsVue from '@element-plus/icons-vue';

import router from './router/index';

import store from './store/index';

import '@/styles/index.scss';

import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';

const app = createApp(App);

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}

app.use(router).use(store).use(ElementPlus);
app.mount('#app');
