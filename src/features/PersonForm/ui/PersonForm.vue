<script setup>
import {Input} from '@/shared'
</script>
<template>
  <div>
    <Input type="string" v-model="input" placeholder="Имя"/>
    <Input type="number" v-model="input" placeholder="Возраст"/>
    <p>Удалить</p>
  </div>
</template>
<style scoped>
div {
  display: flex;
  gap: 18px;
  align-items: center;
  width: 100%;
}

p {
  color: var(--colors-primary);
  cursor: pointer;
}

p:hover {
  color: var(--colors-primary--hover);
}
</style>
