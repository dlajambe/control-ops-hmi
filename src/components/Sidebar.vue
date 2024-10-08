<script setup lang="ts">
import SidebarItem from '@/components/SidebarItem.vue'
</script>

<template>
  <div class="sidebar">
    <header>controlOps</header>
    <SidebarItem title="Tar Removal" :bad-kpi="true" :missing-data="false"></SidebarItem>
    <SidebarItem title="Ammonia" :bad-kpi="false" :missing-data="false"></SidebarItem>
    <SidebarItem title="Light Oil" :bad-kpi="false" :missing-data="false"></SidebarItem>
    <SidebarItem title="Wastewater" :bad-kpi="false" :missing-data="true"></SidebarItem>
  </div>
</template>

<style scoped lang="scss"></style>
