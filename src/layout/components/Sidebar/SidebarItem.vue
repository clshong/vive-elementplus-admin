<template>
  <!-- 支持渲染多级 menu 菜单 -->
  <el-sub-menu v-if="route.children.length > 0" :index="route.path">
    <template #title>
      <el-icon>
        <component class="menu-icon" :is="itemData.meta.icon"></component>
      </el-icon>
      <span>{{ route.meta.title }}</span>
    </template>
    <!-- 循环渲染 -->
    <SidebarItem v-for="item in route.children" :key="item.path" :route="item"></SidebarItem>
  </el-sub-menu>
  <!-- 渲染 item 项 -->
  <template v-else>
    <el-menu-item v-if="!route.hidden" :index="route.path">
      <el-icon>
        <component class="menu-icon" :is="itemData.meta.icon"></component>
      </el-icon>
      <span>{{ route.meta.title }}</span>
    </el-menu-item>
  </template>
</template>

<script setup name="SidebarItem">
defineProps(['itemData']);
</script>
<style scoped lang="scss">
.menu-icon {
  font-size: 16px;
}
</style>
