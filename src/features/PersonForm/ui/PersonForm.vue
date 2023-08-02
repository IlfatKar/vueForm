<script setup lang="ts">
import {useFormControllerStore} from "@/app";
import {Input} from '@/shared'

const store = useFormControllerStore()
const props = defineProps<{
  idx: number
}>()
</script>
<template>
  <div>
    <Input type="string" v-model="store.children[props.idx].name"
           :error="(!store.children[props.idx].name && store.showError) ?  'Поле не должно быть пустым':''"
           placeholder="Имя"/>
    <Input type="number" v-model="store.children[props.idx].age"
           :error="(!store.children[props.idx].age && store.showError) ? 'Поле не должно быть пустым': ''"
           placeholder="Возраст"/>
    <p @click="() => store.removeChildren(props.idx)">Удалить</p>
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
