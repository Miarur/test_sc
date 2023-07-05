<template>
  <button
    :class="`button button_${size} button__color_${color} button__border_${borderType}`"
    :type="type"
    @click="$emit('click')"
    >
    <slot></slot>
  </button>
</template>

<script setup>

defineProps({
  type: {
    typeof: String,
    default: 'button',
  },
  size: {
    type: String,
    default: 'standard',
  },
  color: {
    type: String,
    default: 'default',
  },
  icon: {
    type: String,
    default: '',
  },
  borderType: {
    type: String,
    default: '',
  }
});
</script>

<style lang="scss" scoped>
@import '@/assets/scss/main.scss';

.button {
  width: 100%;
  height: 40px;
  background: $color-black;
  text-align: center;
  font-family: 'Gothic A1', sans-serif;
  @include font(1.6rem, normal, 400, normal, normal);
  color: $color-white;  
  border-radius: 10px;
  border: none;
  cursor: pointer;

  &.button_standard {
    width: 200px;
  }

  &.button__color_blue {
    background: $color-blue;
  }

  &.button__color_white {
    background: $color-white;
    color: $text-color-main;
  }
}

.button__border_standard {
  border: 1px solid $color-blue;
}
</style>