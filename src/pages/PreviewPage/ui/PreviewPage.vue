<script lang="ts" setup>
import {router, usePersonsStore} from "@/app";

const personStore = usePersonsStore()
const parseAge = (age: string) => {
  if (age >= 10 && age < 20) {
    return 'лет'
  }
  const t = +age[age.length - 1]
  if (t === 1) {
    return 'год'
  }
  if (t === 2 || t === 3 || t === 4) {
    return 'года'
  }
  return 'лет'
}

if (!personStore.parent.name) {
  router.push('/')
}
</script>
<template>
  <div class="preview">
    <div>
      <p class="title">Персональные данные</p>
      <p class="fio">{{ personStore.parent.name }}, {{ personStore.parent.age }} {{
          parseAge(personStore.parent.age)
        }}</p>
    </div>
    <div>
      <p class="title">Дети</p>
      <p class="fio" v-if="personStore.children.length === 0">Детей нет!</p>
      <p class="fio children" v-for="(item, idx) in personStore.children" :key="idx">{{ item.name }}, {{ item.age }}
        {{ parseAge(item.age) }}</p>
    </div>
  </div>
</template>

<style scoped>
.preview {
  display: flex;
  flex-direction: column;
  gap: 60px;
}

div {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.fio {
  font-size: var(--paragraph-2-medium);
  font-weight: 700;
}

.children {
  padding: 10px 20px;
  border-radius: 5px;
  width: fit-content;
  display: block;
  background: var(--colors-gray-l);
}
</style>
