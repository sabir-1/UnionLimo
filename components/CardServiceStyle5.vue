<template>
  <div class="cardService wow fadeInUp">
    <div class="cardInfo">
      <h3 class="cardTitle text-20-medium color-white mb-10">{{ title }}</h3>
      <div class="box-inner-info">
        <p class="cardDesc text-14 color-white mb-30">{{ desc }}</p>
        <a class="cardLink btn btn-arrow-up" :href="link">
          <svg class="icon-16" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
          </svg>
        </a>
      </div>
    </div>
    <div class="cardImage">
      <img :src="src" alt="Luxride" />
    </div>
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
    default: 'Intercity Rides'
  },
  desc: {
    type: String,
    default: 'Mercedes-Benz E-Class, BMW 5 Series, Cadillac XTS or similar'
  },
  link: {
    type: String,
    default: '/service-single'
  }
});
</script>

<!-- Styling is handled globally by your existing CSS --> 