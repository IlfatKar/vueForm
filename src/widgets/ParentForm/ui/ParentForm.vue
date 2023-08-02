<script lang="ts" setup>
import {ref} from "vue";
import {Input} from '@/shared'

const name = ref<string>('')
const age = ref<number>()
</script>
<template>
  <div class="parentForm">
    <p class="title">Персональные данные</p>
    <div class="form">
      <Input type="string" v-model="name" placeholder="Имя"/>
      <Input type="number" v-model="age" placeholder="Возраст"/>
    </div>
  </div>
</template>
<style scoped>
.form {
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
}
</style>