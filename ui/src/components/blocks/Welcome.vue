<template>
  <div class="welcome__block">
    <div class="welcome__content">
      <h1 class="welcome__title">Welcome to Test Page</h1>
      <p class="welcome__subtitle">Front-end developer</p>
    </div>
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
@import '@/assets/scss/abstract/mixins';
@import '@/assets/scss/abstract/variables';
.welcome__block {
  display: flex;
  justify-content: center;
  height: 823px;
  background: url('@/assets/img/backgrounds/img_1.jpg') no-repeat;
  background-size: cover;
}

.welcome__content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.welcome__title {
  margin: 0;
  padding: 0;
  font-family: 'Gothic A1', sans-serif;
  @include font(7.0rem, 4.5rem, 700, normal, normal);
  text-align: center;
  color: $color-white;
  text-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.15);

  @include media-tablet {
    font-family: 'Gothic A1', sans-serif;
    @include font(5.0rem, 5.5rem, 700, normal, normal);
  }
}

.welcome__subtitle {
  font-family: 'Gothic A1', sans-serif;
  @include font(3.6rem, 8.95rem, 400, normal, normal);
  text-align: center;
  color: $color-white;
  text-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.15);
}
</style>