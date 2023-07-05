<template>
  <footer class="footer">
    <p class="footer__content">©2015-2022 Success Craft</p>
  </footer>
</template>

<script setup>

</script>

<style lang="scss" scoped>
@import '@/assets/scss/abstract/mixins';
@import '@/assets/scss/abstract/variables';
.footer {
  height: 125px;
  background: #3D3D3D;
}
.footer__content {
  padding-top: 17px;
  text-align: center;
  font-family: 'Gothic A1', sans-serif;
  @include font(1.6rem, 7.3rem, 400, normal, normal);
  color: $color-white;
}
</style>