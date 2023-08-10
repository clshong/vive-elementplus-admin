import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';

import vueSetupExtend from 'vite-plugin-vue-setup-extend';

import path from 'path';

export default ({ mode }) => {
  return defineConfig({
    base: './',
    server: {
      port: '8088',
      host: true,
      proxy: {}
    },
    // 插件
    plugins: [
      vue(),
      vueSetupExtend(),
      AutoImport({
        resolvers: [ElementPlusResolver()]
      }),
      Components({
        resolvers: []
      })
    ],

    // 文件快捷路径
    resolve: {
      alias: {
        '@': `${path.resolve(__dirname, 'src')}/`
      }
    },
    //scss全局变量一个配置
    css: {
      preprocessorOptions: {
        scss: {
          javascriptEnabled: true,
          additionalData: '@import "./src/styles/variable.scss";'
        }
      }
    }
  });
};
