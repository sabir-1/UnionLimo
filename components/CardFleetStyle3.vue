<template>
  <div class="cardFleet cardFleetStyle3 wow fadeInDown">
    <div class="cardImage mb-30">
      <NuxtLink to="/single-fleet">
        <img :src="src" alt="Luxride" />
      </NuxtLink>
    </div>
    <div class="cardInfo">
      <NuxtLink to="/single-fleet">
        <h3 class="text-20-medium color-text mb-10">{{ title }}</h3>
      </NuxtLink>  
      <p class="text-14 color-text mb-30">{{ description }}</p>
    </div>
    <div class="cardInfoBottom">
      <div class="passenger">
        <span class="icon-circle icon-passenger"></span>
        <span class="text-14">{{ passengers }}</span>
      </div>
      <div class="luggage">
        <span class="icon-circle icon-luggage"></span>
        <span class="text-14">{{ luggage }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  src: {
    type: String,
    default: '/imgs/page/homepage1/e-class.png'
  },
  title: {
    type: String,
    default: 'Business Class'
  },
  description: {
    type: String,
    default: 'Mercedes-Benz E-Class, BMW 5 Series, Cadillac XTS or similar'
  },
  passengers: {
    type: [String, Number],
    default: '4'
  },
  luggage: {
    type: [String, Number],
    default: '2'
  },
  link: {
    type: String,
    default: '#'
  }
});
</script>

<!-- Styling is handled globally by your existing CSS --> 