<script setup lang="ts">
import Footer from '../../Footer/ui/Footer.vue'
import Header, { type Link } from '../../Header/ui/Header.vue'

const props = defineProps<{
  links: Link[]
}>()
</script>

<template>
  <div class="layout">
    <Header :links="props.links" />
    <main>
      <slot></slot>
    </main>
    <Footer />
  </div>
</template>

<style scoped>
.layout {
  min-height: 100vh;
}
main {
  min-height: calc(100vh - 76px * 2);
  padding: 30px 0;
  max-width: 616px;
  margin: 0 auto;
}
</style>
