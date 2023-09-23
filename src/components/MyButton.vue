<script setup lang="ts">
  import { reactive } from 'vue';

  interface Props {
    primary?: boolean;
  }

  const props = withDefaults(defineProps<Props>(), {
    primary: false,
  });

  const { primary } = reactive(props);
</script>

<template>
  <button class="btn" :class="{ primary }">
    <slot />
  </button>
</template>

<style scoped>
button {
  padding: .6rem 1.25rem;
  background-color: #bd1c00;
  border: 0;
}
button:hover {
  background-color: #da7563;
}
</style>