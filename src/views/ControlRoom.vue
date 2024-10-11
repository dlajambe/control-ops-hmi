<script setup lang="ts">
import Sidebar from '@/components/Sidebar.vue';
</script>

<template>
  <div class="control-room">
    <div class="sidebar">
      <Sidebar />
    </div>
    <div class="display">
      <h1>Display</h1>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '../styles/abstracts/variables';

.control-room {
  display: flex;
  flex-direction: row;
  color: $c-neutral-500;

  .sidebar {
    background-color: $c-neutral-100;
  }

  .display {
    background-color: $c-neutral-200;
  }
}
</style>
