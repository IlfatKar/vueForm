<script setup lang="ts">
import { RouterView } from 'vue-router'
import { Layout } from '@/shared'
</script>

<template>
  <Layout
    :links="[
      {
        title: 'Форма',
        url: '/'
      },
      {
        title: 'Превью',
        url: '/preview'
      }
    ]"
  >
    <RouterView />
  </Layout>
</template>
