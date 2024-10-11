<script setup lang="ts">
import StatusDot from '@/components/StatusDot.vue';

const props = defineProps<{
  title: string;
  badKpi: boolean;
  missingData: boolean;
}>();
</script>

<template>
  <div class="sidebar-slot">
    <StatusDot :bad-kpi="props.badKpi" :missing-data="props.missingData" />
    <h2>{{ props.title }}</h2>
  </div>
</template>

<style scoped lang="scss">
.sidebar-slot {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
}
</style>
