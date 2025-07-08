<template>
  <div class="cardCities wow fadeInRight">
    <div class="cardImage">
      <a :href="link">
        <img :src="src" alt="Luxride" />
      </a>
    </div>
    <div class="cardInfo">
      <a :href="link">
        <h3 class="cardTitle color-text">{{ title }}</h3>
      </a>
      <p class="cardDesc color-text">{{ description }}</p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  src: {
    type: String,
    default: '/imgs/page/homepage3/city1.png'
  },
  title: {
    type: String,
    default: 'Business Class'
  },
  description: {
    type: String,
    default: 'Mercedes-Benz E-Class, BMW 5 Series, Cadillac XTS or similar'
  },
  link: {
    type: String,
    default: '#'
  }
});
</script>

<!-- Styling is handled globally by your existing CSS --> 