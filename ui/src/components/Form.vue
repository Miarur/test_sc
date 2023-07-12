<template>
  <div class="form__wrapper">
    <form class="form" @submit.prevent="formSubmit">

      <Input
        label="First Name *"
        name="name"
        type="text"
        placeholder="Enter your First name"
        v-model="formData.name"
      >
        <span span v-for="error in $v.name.$errors" :key="error.$uid" class="error-message">{{ error.$message }}</span>
      </Input>

      <Input
        label="Last Name *"
        name="surname"
        type="text"
        placeholder="Enter your Last name"
        v-model="formData.surname"
      >
        <span v-for="error in $v.surname.$errors" :key="error.$uid" class="error-message">{{ error.$message }}</span>
      </Input>

      <Input
        label="Company *"
        name="company"
        type="text"
        placeholder="Enter your Last name"
        v-model="formData.company"
      >
        <span v-for="error in $v.company.$errors" :key="error.$uid" class="error-message">{{ error.$message }}</span>
      </Input>

      <Input
        label="Email *"
        name="email"
        type="text"
        placeholder="Enter Your Email"
        v-model="formData.email"
      >
        <span v-for="error in $v.email.$errors" :key="error.$uid" class="error-message">{{ error.$message }}</span>
      </Input>

      <Input
        label="Job Title *"
        name="job"
        type="text"
        placeholder="Enter job title"
        v-model="formData.jobTitle"
      >
        <span v-for="error in $v.jobTitle.$errors" :key="error.$uid" class="error-message">{{ error.$message }}</span>
      </Input>

      <Input
        label="Country"
        name="country"
        type="text"
        placeholder="Enter Your Country"
        v-model="formData.country"
      />

      <Input
        label="State *"
        name="state"
        type="text"
        placeholder="Enter your State"
        v-model="formData.state"
      >
        <span v-for="error in $v.state.$errors" :key="error.$uid" class="error-message">{{ error.$message }}</span>
      </Input>

      <Input
        label="Zip code *"
        name="zip"
        type="text"
        placeholder="Enter Your Zip Code"
        v-model="formData.zipCode"
      >
        <span v-for="error in $v.zipCode.$errors" :key="error.$uid" class="error-message">{{ error.$message }}</span>
      </Input>

      <div class="button__group">
        <Button color="blue" type="submit">
          Read more
        </Button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import Input from './common/input/Input.vue';
import Button from '../components/common/button/Button.vue';
import { useVuelidate } from '@vuelidate/core';
import {
  required,
  email,
  helpers,
} from '@vuelidate/validators';

const formData = ref({
  name: '',
  surname: '',
  company: '',
  email: '',
  jobTitle: '',
  country: '',
  state: '',
  zipCode: '',
});

const validateRules = computed(() => ({
  name: {
    required: helpers.withMessage('field is required', required),
    $autoDirty: true,
  },
  surname: {
    required: helpers.withMessage('field is required', required),
    $autoDirty: true,
  },
  company: {
    required: helpers.withMessage('field is required', required),
    $autoDirty: true,
  },
  email: {
    required: helpers.withMessage('field is required', required),
    email: helpers.withMessage('field is not correct', email),
    $autoDirty: true,
  },
  jobTitle: {
    required: helpers.withMessage('field is required', required),
    $autoDirty: true,
  },
  country: {
    $autoDirty: true,
  },
  state: {
    required: helpers.withMessage('field is required', required),
    $autoDirty: true,
  },
  zipCode: {
    required: helpers.withMessage('field is required', required),
    $autoDirty: true,
  },
}));
const $v = useVuelidate(validateRules, formData);

const formSubmit = async () => {
  const isFormCorrect = await $v.value.$validate();
  if (!isFormCorrect) {
    return;
  }
  console.log(formData.value);
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/abstract/mixins';
@import '@/assets/scss/abstract/variables';
@import '@/assets/scss/base/default';

.form__wrapper {
  margin: 44px auto 0 auto;
  max-width: 1155px;
}
.form {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 15px 14px;

  @include media-tablet {
    flex-direction: column;
  }
}

.button__group {
  margin: 26px auto 0 auto;
}
</style>