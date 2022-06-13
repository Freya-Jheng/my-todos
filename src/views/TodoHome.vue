<template>
  <div class="todo-home">
    <Navbar />
    <div class="todo-home__content-list">
      <router-view  />
    </div>
  </div>
</template>

<script setup>
import Navbar from "@/components/Navbar.vue";
import { RouterView } from "vue-router";


</script>

<style scoped lang="scss">
.todo-home {
  width: 100%;
}
</style>
