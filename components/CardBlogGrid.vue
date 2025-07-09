<template>
  <div class="cardIconTitleDesc wow fadeInRight">
    <div class="cardIcon">
      <img :src="img" alt="luxride" />
    </div>
    <div class="cardTitle">
      <h5 class="text-20-medium color-text">{{ title }}</h5>
    </div>
    <div class="cardDesc">
      <p class="text-16 color-text">{{ description }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  img: {
    type: String,
    default: 'assets/imgs/page/homepage1/safe.svg'
  },
  title: {
    type: String,
    default: 'Safety First'
  },
  description: {
    type: String,
    default: 'Both you and your shipments will travel with professional drivers. Always with the highest quality standards.'
  }
})
</script>

<style scoped>
/* Add any component-specific styles here */
</style> 