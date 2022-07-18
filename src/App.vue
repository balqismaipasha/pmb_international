<template>
  <router-view />
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App'
})
</script>

<style>
.bg-image {
  background-image: linear-gradient(135deg, #54cc5c 0%, #fcf6c0 100%);
}
</style>
