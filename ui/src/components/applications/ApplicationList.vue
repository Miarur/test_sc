<template>
  <div class="applications__wrapper">
    <ApplicationItem 
      v-for="application of applicationsArray" 
      :key="application.id" 
      :props="application"
    />
  </div>
</template>

<script setup>
import ApplicationItem from './ApplicationItem.vue';

defineProps({
  applicationsArray: {
    type: Object,
    default: null,
  },
})

</script>

<style lang="scss" scoped>
.applications__wrapper {
  margin: 0 auto;
  padding: 45px 0 60px 0;
  max-width: 1196px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 45px 96px;
}
</style>