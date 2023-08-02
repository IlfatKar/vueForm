<script setup lang="ts">
import {RouterLink} from 'vue-router'
import {Logo} from '@/shared'

export type Link = { url: string; title: string }

const props = defineProps<{
  links: Link[]
}>()
</script>

<template>
  <header>
    <Logo/>
    <nav>
      <RouterLink v-for="item in props.links" :key="item.url" :to="item.url">
        {{ item.title }}
      </RouterLink>
    </nav>
  </header>
</template>

<style scoped>
header {
  height: 76px;
  padding: 22px 92px;
  display: flex;
  align-items: center;
  box-shadow: 0px 1px 0px 0px rgba(17, 17, 17, 0.10);
}

nav {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 24px;
}

nav a {
  color: var(--colors-gray-k);
  text-decoration: none;
  cursor: pointer;
}
</style>
