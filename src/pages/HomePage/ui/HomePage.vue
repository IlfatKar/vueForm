<script setup lang="ts">
import {watch} from "vue";
import {router, usePersonsStore, useFormControllerStore} from "@/app";
import {ParentForm, ChildrensForm} from "@/widgets";
import {Button} from "@/shared";

const personStore = usePersonsStore()
const formStore = useFormControllerStore()

const onSave = () => {
  if (formStore.parent.age === '' || formStore.parent.name === '') {
    formStore.showError = true
  }
  for (const item of formStore.children) {
    if (item.age === '' || item.name === '') {
      formStore.showError = true
      break
    }
  }
  personStore.parent = {...formStore.parent}
  personStore.children = [...formStore.children]
  formStore.clear()
  router.push('/preview')
}

watch(formStore.parent, () => {
  if (formStore.showError) formStore.showError = false
})

watch(formStore.children, () => {
  if (formStore.showError) formStore.showError = false
})

</script>
<template>
  <ParentForm/>
  <ChildrensForm/>
  <Button type="primary" :onClick="onSave">Сохранить</Button>
</template>

<style scoped>
button {
  margin-top: 30px;
}
</style>
