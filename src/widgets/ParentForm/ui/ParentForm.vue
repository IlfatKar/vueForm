<script lang="ts" setup>
import {useFormControllerStore} from "@/app";
import {Input} from '@/shared'

const store = useFormControllerStore()
</script>
<template>
  <div class="parentForm">
    <p class="title">Персональные данные</p>
    <div class="form">
      <Input type="string" v-model="store.parent.name"
             :error="(!store.parent.name && store.showError) ?'Поле не должно быть пустым':''"
             placeholder="Имя"/>
      <Input type="number" v-model="store.parent.age"
             :error="(!store.parent.age && store.showError) ?'Поле не должно быть пустым':''"
             placeholder="Возраст"/>
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