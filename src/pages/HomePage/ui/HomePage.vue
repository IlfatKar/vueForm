<script setup lang="ts">
import {ParentForm, ChildrensForm} from "@/widgets";
import {Button} from "@/shared";
</script>
<template>
  <ParentForm/>
  <ChildrensForm/>
  <Button type="primary">Сохранить</Button>
</template>

<style scoped>
button {
  margin-top: 30px;
}
</style>
