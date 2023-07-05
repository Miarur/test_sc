<template>
  <header class="header">
    <div class="header__wrapper">
      <Navigation />
    </div>
  </header>
</template>

<script setup>
import Navigation from './common/navigation/Navigation.vue';

</script>

<style lang="scss" scoped>
.header {
  box-shadow: 0px 1px 10px 0px rgba(0, 0, 0, 0.25);
}

.header__wrapper {
  margin: 0 auto;
  padding: 21px 0;
  max-width: 1440px;
}
</style>