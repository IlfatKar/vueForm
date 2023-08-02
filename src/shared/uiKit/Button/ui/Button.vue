<script setup lang="ts">
import {defineProps} from "vue";

const props = defineProps<{
  type: 'secondary' | 'primary';
  onClick: () => void;
}>()
</script>
<template>
  <button :class="{secondary: props.type === 'secondary'}" :on-click="props.onClick">
    <slot name="icon"></slot>
    <slot></slot>
  </button>
</template>
<style scoped>
button {
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100px;
  border: 2px solid var(--colors-primary);
  text-align: center;
  cursor: pointer;
  background: var(--colors-primary);
  color: #fff;
  gap: 4px;

}

button:hover {
  background: var(--colors-primary--hover);
  border: 2px solid var(--colors-primary--hover);

}

button.secondary {
  background: #fff;
  color: var(--colors-primary);

}

button.secondary:hover {
  background: rgba(110, 65, 226, 0.04);
}
</style>