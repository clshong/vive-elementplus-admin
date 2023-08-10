<template>
  <el-config-provider :locale="locales">
    <router-view />
  </el-config-provider>
</template>

<script setup>
import { ElConfigProvider } from 'element-plus';

import zhCn from 'element-plus/dist/locale/zh-cn.mjs';
const locales = zhCn;
</script>

<style scoped></style>
