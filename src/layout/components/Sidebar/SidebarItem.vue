<template>
  <el-sub-menu
    v-if="itemData.children && (itemData.meta.alwaysShow || itemData?.children?.length > 1)"
    :index="itemData._id"
  >
    <template #title>
      <el-icon><svg-icon class="menu-icon" :name="itemData.meta.icon"></svg-icon></el-icon>
      <span>{{ itemData.meta.title }}</span>
    </template>
    <sidebar-item
      v-for="item in itemData.children"
      :key="item._id"
      :item-data="item"
    ></sidebar-item>
  </el-sub-menu>
  <sidebar-item v-else-if="itemData.children" :item-data="itemData?.children[0]"></sidebar-item>
  <el-menu-item v-else :index="itemData.path">
    <el-icon><svg-icon class="menu-icon" :name="itemData.meta.icon"></svg-icon></el-icon>
    <span>{{ itemData.meta.title }}</span>
  </el-menu-item>
  <!-- </div> -->
</template>

<script setup>
defineProps(['itemData']);
</script>
<style scoped lang="scss">
.menu-icon {
  font-size: 16px;
}
</style>
