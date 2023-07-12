<template>
  <header>
    <Navigation />
  </header>
</template>

<script setup>
import Navigation from '../components/common/navigation/Navigation.vue';
</script>

<style lang="scss" scoped>
@import '@/assets/scss/abstract/mixins';
@import '@/assets/scss/abstract/variables';

header {
  position: fixed;
  width: 100%;
  background-color: $color-white;
  box-shadow: 0px 1px 10px 0px rgba(0, 0, 0, 0.25);
  z-index: 99;
  transition: .5s ease all;
  color: $color-black;
}
</style>