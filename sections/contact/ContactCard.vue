<template>
  <div class="cardContact wow fadeInRight">
    <div class="cardImage mb-30">
      <img :src="img" alt="luxride" />
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
    default: "/imgs/page/contact/new-york.png"
  },
  title: {
    type: String,
    default: 'New York Office'
  },
  address: {
    type: String,
    default: 'PO Box 16122 Collins Street West Victoria 8007 Australia'
  },
  phone: {
    type: String,
    default: '+32 2 512 08 15'
  },
  email: {
    type: String,
    default: 'newyork@luxride.com'
  }
})
</script>

<style scoped>
/* Component styles here if needed */
</style> 