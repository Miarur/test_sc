<template>
  <nav class="navigation___menu">
    <div class="branding">
      <img class="navigation___logo" src="@/assets/img/icons/logo.svg" alt="logo">
    </div>
    <ul v-show="!props.mobile" class="navigation">
      <li><router-link class="link" to="/">Home</router-link></li>
      <li><router-link class="link" :to="{ name: 'home', hash: '#about' }">About us</router-link></li>
      <li><router-link class="link" :to="{ name: 'home', hash: '#frameworks' }">Frameworks</router-link></li>
      <li><router-link class="link" :to="{ name: 'home', hash: '#applications' }">Applications</router-link></li>
      <li><router-link class="link" :to="{ name: 'home', hash: '#contacts' }">Contact us</router-link></li>
    </ul>
    <div class="icon">
      <font-awesome-icon v-show="props.mobile" icon="bars" @click="toggleMobileNav" />
    </div>
    <transition name="mobile-nav">
      <ul v-show="props.mobileNav" class="dropdown-nav">
        <li><router-link class="link" to="/">Home</router-link></li>
        <li><router-link class="link" :to="{ name: 'home', hash: '#about' }">About us</router-link></li>
        <li><router-link class="link" :to="{ name: 'home', hash: '#frameworks' }">Frameworks</router-link></li>
        <li><router-link class="link" :to="{ name: 'home', hash: '#applications' }">Applications</router-link></li>
        <li><router-link class="link" :to="{ name: 'home', hash: '#contacts' }">Contact us</router-link></li>
      </ul>
    </transition>
  </nav>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const props = ref({
  scrollPosition: null,
  mobile: null,
  mobileNav: null,
  windowWidth: null,
})

const toggleMobileNav = () => {
  props.value.mobileNav = !props.value.mobileNav;
}

const checkScreen = () => {
  props.value.windowWidth = window.innerWidth;
  if (props.value.windowWidth <= 750) {
    props.value.mobile = true;
    return;
  }
  props.value.mobile = false;
  props.value.mobileNav = false;
}

onMounted(() => {
  window.addEventListener('resize', checkScreen);
  checkScreen();
})
</script>

<style lang="scss" scoped>
@import '@/assets/scss/abstract/mixins';
@import '@/assets/scss/abstract/variables';

nav {
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  padding: 12px 0;
  transition: .5s ease all;
  width: 90%;

  ul,
  li {
    font-size: 20px;
    color: black;
    list-style: none;
    text-decoration: none;
  }

  li {
    text-transform: uppercase;
    padding: 16px;
    margin-left: 16px;
  }

  .link {
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

  .branding {
    display: flex;
    align-items: center;

    .navigation___logo {
      margin-left: 123px;
      max-width: 197px;
      min-height: 38px;
      transition: .5s ease all;

      @include media-tablet {
        margin-left: 0px;
      }
    }
  }

  .navigation {
    display: flex;
    align-items: center;
    flex: 1;
    justify-content: flex-end;
  }

  .icon {
    font-size: 40px;
    display: flex;
    align-items: center;
    position: absolute;
    top: 0;
    right: 24px;
    height: 100%;
    cursor: pointer;
    transition: .8s ease all;

    i {
      cursor: pointer;
      font-size: 24px;
      transition: .8s ease all;
    }
  }

  .icon-active {
    transform: rotate(180deg);
  }
}

.dropdown-nav {
  position: fixed;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 250px;
  height: 100%;
  top: 0;
  left: 0;
  background-color: $color-white;

  li {
    margin-left: 0;
  }
}

.mobile-nav-enter-active,
.mobile-nav-leave-active {
  transition: 1s ease all;
}

.mobile-nav-enter-from,
.mobile-nav-leave-to {
  transform: translateX(-250px);
}

.mobile-nav-enter-to {
  transform: translateX(0px);
}</style>