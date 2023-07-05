<template>
  <div class="application__item">
    <img
      class="application__image"
      :src="dynamicImageImport('img/applications', props.image, 'png')"
      :alt="props.image"
    >
    <span class="application__title">{{ props.title}}</span>
  </div>
</template>

<script setup>
import { dynamicImageImport } from '../../utils/dynamicImageImport'
defineProps({
  props: {
    type: Object,
    default: null,

    title: {
      type: String,
      default: '',
    },
    image: {
      type: String,
      default: '',
    },
  },
})
</script>

<style lang="scss" scoped>
@import '@/assets/scss/abstract/mixins';
@import '@/assets/scss/abstract/variables';
.application__item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 227px;
  border-radius: 2px;
}

.application__title {
  width: 100%;
  text-align: center;
  font-family: 'Gothic A1', sans-serif;
  @include font(1.6rem, 3.8rem, 400, normal, normal);
  color: $color-white;
  background-color: $text-color-main;
  border-radius: 0 0 2px 2px;
}

</style>