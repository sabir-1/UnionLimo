<template>
  <div class="cardContact wow fadeInRight">
    <div class="cardImage mb-30">
      <img :src="img" alt="luxride">
    </div>
    <div class="cardInfo">
      <h6 class="heading-20-medium mb-10">{{ title }}</h6>
      <p class="text-16 mb-20">{{ address }}</p>
      <p class="text-16 mb-20">{{ phone }}</p>
      <p class="text-16">{{ email }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  img: {
    type: String, 
  },
  title: {
    type: String, 
  },
  address: {
    type: String, 
  },
  phone: {
    type: String, 
  },
  email: {
    type: String, 
  }
})
</script>

<style scoped>
/* Component styles can be added here if needed */
</style> 