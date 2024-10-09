<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  badKpi: Boolean
  missingData: Boolean
}>()

if (props.badKpi == true && props.missingData == true) {
  throw new Error('Invalid combination; only one of badKpi and missingData can be true')
}

const dotColour = computed(() => {
  if (props.badKpi) {
    return 'red'
  } else if (props.missingData) {
    return 'yellow'
  } else {
    return 'green'
  }
})
</script>

<template>
  <span class="dot" :class="dotColour"></span>
</template>

<style scoped lang="scss">
@import '../styles/abstracts/variables';
.dot {
  height: 15px;
  width: 15px;
  border-radius: 50%;
  display: inline-block;
}

.green {
  background-color: $c-green;
}

.red {
  background-color: $c-red;
}

.yellow {
  background-color: $c-yellow;
}
</style>
