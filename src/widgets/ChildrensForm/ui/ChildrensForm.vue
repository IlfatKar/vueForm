<script lang="ts" setup>
import {PersonForm} from '@/features'
import {Button, Plus} from "@/shared";

</script>
<template>
  <div class="parentForm">
    <div class="row">
      <p class="title">Дети (макс. 5)</p>
      <Button type="secondary">
        <template v-slot:icon>
          <Plus/>
        </template>
        <span>Добавить ребенка</span>
      </Button>
    </div>
    <div class="form">
      <PersonForm/>
      <PersonForm/>
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