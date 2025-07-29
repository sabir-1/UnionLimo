<template>
  <section class="section">
    <!-- <img class="wow fadeInRight" :src="fleetData.image" :alt="fleetData.title" /> -->
    <div class="container-sub">
      <div class="mt-120 mb-0">
        <h2 class="heading-44-medium mb-30 color-text title-fleet wow fadeInUp">{{ fleetData.title }}</h2>
        <div class="content-single wow fadeInLeft">
          <p v-html="fleetData.longDescription"></p>
          <p >Experience the ultimate in luxury transportation with our premium fleet. Our vehicles are meticulously maintained and our professional chauffeurs ensure your comfort and safety throughout your journey.</p>
          <h6 class="heading-24-medium color-text mb-30">We offer</h6>
          <ul class="list-ticks list-ticks-small">
            <li class="text-16 mb-20" v-for="feature in fleetData.features.slice(0, 5)" :key="feature">{{ feature }}</li>
          </ul>
          <div class="mt-30">
            <NuxtLink to="/contact" class="btn btn-primary btn-book">
              Book Now
              <svg class="icon-16 ml-5" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
              </svg>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="box-slide-fleet mt-120 wow fadeInUp" v-if="fleetData.sliderImages && fleetData.sliderImages.length > 0">
      <div class="box-swiper">
        <p>dfaf</p>
        <div class="swiper-container swiper-group-2-single-fleet pb-0">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(image, index) in fleetData.sliderImages" :key="index">
              <img :src="image" :alt="`${fleetData.title} - Image ${index + 1}`" />
            </div>
          </div>
          <div class="box-pagination-fleet">
            <div class="swiper-button-prev swiper-button-prev-fleet">
              <svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
              </svg>
            </div>
            <div class="swiper-button-next swiper-button-next-fleet">
              <svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div> -->
  </section>
</template>

<script setup>
const props = defineProps({
  fleetData: {
    type: Object,
    required: true
  }
});
</script> 