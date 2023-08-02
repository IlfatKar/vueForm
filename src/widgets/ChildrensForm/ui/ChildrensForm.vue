<script lang="ts" setup>
import {useFormControllerStore} from "@/app";
import {PersonForm} from '@/features'
import {Button, Plus} from "@/shared";

const store = useFormControllerStore()

</script>
<template>
  <div class="parentForm">
    <div class="row">
      <p class="title">Дети (макс. 5)</p>
      <Button v-if="store.children.length < 5" :onClick="store.pushChildren" type="secondary">
        <template v-slot:icon>
          <Plus/>
        </template>
        <span>Добавить ребенка</span>
      </Button>
    </div>
    <div class="form">
      <PersonForm v-for="(_, idx) in store.children" :key="idx" :idx="idx"/>
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

.row {
  margin-top: 44px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>