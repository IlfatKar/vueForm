<script setup lang="ts">
//
</script>
<template>
  <div class="preview">
    <div>
      <p class="title">Персональные данные</p>
      <p class="fio">Василий, 30 лет</p>
    </div>
    <div>
      <p class="title">Дети</p>
      <p class="fio children">Петр, 10 лет</p>
      <p class="fio children">Петр, 10 лет</p>
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
