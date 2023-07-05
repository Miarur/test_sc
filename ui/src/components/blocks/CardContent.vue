<template>
  <div :class="`card__block card__block_${listMode}`">
    <div :class="`card__content card__content_${cardSize}`">
      <h2 class="card__title">{{ data.title }}</h2>
      <p :class="`card__description description_${descriptionSize}`">{{ data.description }}</p>
      <slot />
    </div>
    <img
      :src="dynamicImageImport('img/home', data.imageName, 'png')"
      class="card__image"
      :alt="`${data.imageName}`"
    >
  </div>
</template>

<script setup>
import { dynamicImageImport } from '@/utils/dynamicImageImport';

defineProps({
  data: {
    type: Object,
    default: null,
  },
  descriptionSize: {
    type: String,
    default: '',
  },
  listMode: {
    type: String,
    default: '',
  },
  cardSize: {
    type: String,
    default: '',
  },
})

</script>

<style lang="scss" scoped>
@import '@/assets/scss/abstract/mixins';
@import '@/assets/scss/abstract/variables';

.card__block {
  max-width: 1196px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0 40px;
}

.card__block_reverse {
  display: flex;
  flex-direction: row-reverse;
  flex-wrap: wrap;
  justify-content: center;
  max-height: 227px;
  gap: 0 20px;
}

.card__block_reverse-odd {
  justify-content: space-between;
  border-radius: 5px;
  background: #FFF;
  gap: 0 40px;
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.05);
  &:nth-of-type(2n - 1) {
    flex-direction: row-reverse;
  }
}
.card__block_reverse-odd .card__image {
  border-bottom-left-radius: 10px;
  border-top-left-radius: 10px
}

.card__content {
  padding-left: 11px;
  display: flex;
  flex-direction: column;
  max-width: 595px;
}

.card__content_small {
  display: flex;
  justify-content: center;
  min-width: 243px;
}

.card__title {
  padding-top: 27px;
  max-width: 100%;
  font-family: 'Gothic A1', sans-serif;
  @include font(2.8rem, 3.5rem, 700, normal, normal);
  color: $text-color-main;
}

.card__description {
  padding-top: 16px;
  min-height: 170px;
  font-family: 'Gothic A1', sans-serif;
  @include font(1.6rem, 2.6rem, 400, normal, normal);
  color: $text-color-secondary;
}

.description_medium {
  min-height: 187px;
}

.description_small {
  padding-top: 9px;
  max-width: 224px;
  min-height: 91px;
}

.card__image {
  border-radius: 0px;
}
</style>