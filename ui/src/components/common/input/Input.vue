<template>
  <label class="form__label">{{ label }}
    <input 
      class="form__field"
      :type="type"
      :placeholder="placeholder"
      :name="name"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    >
    <slot />
  </label>
</template>

<script setup>
defineProps({
  modelValue: {
    type: String,
    default: '',
  },
  name: {
    type: String,
    default: '',
  },
  type: {
    type: String,
    default: 'text',
    validator(value) {
      return ['email', 'number', 'password', 'search', 'text', 'date'].includes(value);
    },
  },
  placeholder: {
    type: String,
    default: '',
  },
  label: {
    type: String,
    default: '',
  },
  id: {
    type: String,
    default: '',
  }
});
</script>

<style lang="scss" scoped>
@import '@/assets/scss/abstract/mixins';
@import '@/assets/scss/abstract/variables';
.form__label {
  display: flex;
  flex-direction: column;
  max-width: 278px;
  font-family: 'Gothic A1', sans-serif;
  @include font(1.6rem, 2.4rem, 400, normal, normal);
  color: $text-color-main;
}

.form__field {
  position: relative;
  margin-top: 6px;
  width: 100%;
  height: 40px;
  border: none;
  border-radius: 10px;
  background: #F8F8F8;

  &::placeholder {
    padding: 9px 11px 8px 11px;
    font-family: 'Gothic A1', sans-serif;
    @include font(1.6rem, 2.3rem, 400, normal, normal);
    color: $color-grey;
  }
}
</style>