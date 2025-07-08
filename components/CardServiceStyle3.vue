<template>
  <div class="cardService cardServiceStyle3 wow fadeInRight">
    <a :href="link">
      <div class="cardImage">
        <img :src="src" alt="Luxride" />
      </div>
      <div class="cardInfo">
        <h3 class="cardTitle text-20-medium color-white mb-10">{{ title }}</h3>
      </div>
    </a>
  </div>
</template>

<script setup>
const props = defineProps({
  src: {
    type: String,
    default: '/imgs/page/homepage1/service1.png'
  },
  title: {
    type: String,
    default: 'Business Class'
  },
  link: {
    type: String,
    default: '/service-single'
  }
});
</script>

<!-- Styling is handled globally by your existing CSS --> 