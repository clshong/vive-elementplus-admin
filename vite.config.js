import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';

import vueSetupExtend from 'vite-plugin-vue-setup-extend';

import { viteMockServe } from 'vite-plugin-mock';

import path from 'path';

export default defineConfig(({ mode }) => {
  const config = loadEnv(mode, './');
  return {
    base: './',
    server: {
      port: '8088',
      host: true,
      proxy: {
        [config.VITE_BASE_URL]: {
          target: config.VITE_APP_BASE_API,
          changeOrigin: true,
          rewrite: path => path.replace(new RegExp(`^${config.VITE_BASE_URL}`), '')
        }
      }
    },
    // 插件
    plugins: [
      vue(),
      vueSetupExtend(),
      viteMockServe({
        supportTs: false,
        logger: true,
        enable: false,
        mockPath: './src/mock/'
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
          additionalData: `@import "./src/styles/variable.scss";`
        }
      }
    }
  };
});
