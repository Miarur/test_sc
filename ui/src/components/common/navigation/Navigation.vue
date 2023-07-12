<template>
  <div class="navigation___block">
    <img class="navigation___logo" src="@/assets/img/icons/logo.svg" alt="logo">
    <nav class="navigation___menu">
      <ul class="navigation___list">
        <router-link class="navigation__link" to="/">Home</router-link>
        <router-link class="navigation__link" :to="{ name: 'home', hash: '#about' }">About us</router-link>
        <router-link class="navigation__link" :to="{ name: 'home', hash: '#frameworks'}">Frameworks</router-link>
        <router-link class=" navigation__link" :to="{ name: 'home', hash: '#applications'}">Applications</router-link>
        <router-link class="navigation__link" :to="{ name: 'home', hash: '#contacts'}">Contact us</router-link>
      </ul>
    </nav>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
@import '@/assets/scss/abstract/mixins';
@import '@/assets/scss/abstract/variables';

.navigation___block {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

.navigation___logo {
  margin-left: 123px;
  max-width: 197px;
  min-height: 38px;

  @include media-tablet {
    margin-left: 0px;
  }
}

.navigation___menu {
  width: 45%;
}

.navigation___list {
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  list-style: none;
}

.navigation__link {
  justify-content: space-between;
  font-family: 'Roboto', sans-serif;
  @include font(1.8rem, normal, 400, normal, normal);
  text-transform: uppercase;
  text-decoration: none;
  color: $text-color-main;
  transition: all .2s ease-in-out;

  &:hover {
    color: $text-color-hover;
  }
}
</style>