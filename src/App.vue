<template>
  <el-config-provider :locale="locales">
    <router-view />
  </el-config-provider>
</template>

<script setup>
import { ElConfigProvider } from 'element-plus';
import zh from 'element-plus/es/locale/lang/zh-cn';
import en from 'element-plus/es/locale/lang/en';

import { useLocaleStore } from './store/modules/locale';

const locales = {
  zh: zh,
  en: en
};
const useLocale = useLocaleStore();
</script>

<style scoped></style>
