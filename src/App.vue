<template>
    <header>
      <RouterView />
    </header>
</template>


<script setup>
import { RouterView } from 'vue-router'


</script>

<style lang="scss">
@import '@/styles/main.scss';
@import '@/styles/mixins.scss';
@import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@100&family=Be+Vietnam+Pro:wght@200;700;800;900&family=Bellefair&family=Merriweather:wght@300;400&family=Neonderthaw&family=Noto+Sans&family=Noto+Sans+TC:wght@100;300;400;500;700;900');

#app {
  width: 100%;
  max-height: 1280px;
  margin: 0;
  padding: 0;
  font-weight: normal;
  background: #{$white};
  color: #{$black};
  font-family: 'Noto Sans TC';
  cursor: default;
}
</style>
