<template>
  <section class="section pt-90 pb-120 bg-our-service">
    <div class="container-sub">
      <div class="row align-items-center">
        <div class="col-lg-6 col-sm-7 col-7">
          <h2 class="heading-44-medium title-fleet wow fadeInDown">Our Services</h2>
        </div>
        <div class="col-lg-6 col-sm-5 col-5 text-end">
          <a href="#" class="text-16-medium color-primary d-flex align-items-center justify-content-end wow fadeInDown">
            More Services
            <svg class="icon-16 ml-5" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
    
    <div class="box-slide-fleet mt-50">
      <div class="box-swiper">
        <div class="swiper-container swiper-group-4-service pb-0">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <CardService 
                image="assets/imgs/page/homepage1/service1.png" 
                title="Intercity Rides" 
                description="Mercedes-Benz E-Class, BMW 5 Series, Cadillac XTS or similar"
              />
            </div>
            <div class="swiper-slide">
              <CardService 
                image="assets/imgs/page/homepage1/service2.png" 
                title="Chauffeur Hailing" 
                description="Mercedes-Benz E-Class, BMW 5 Series, Cadillac XTS or similar"
              />
            </div>
            <div class="swiper-slide">
              <CardService 
                image="assets/imgs/page/homepage1/service3.png" 
                title="Airport Transfers" 
                description="Mercedes-Benz E-Class, BMW 5 Series, Cadillac XTS or similar"
              />
            </div>
            <div class="swiper-slide">
              <CardService 
                image="assets/imgs/page/homepage1/service5.png" 
                title="Sprinter Class" 
                description="Mercedes-Benz E-Class, BMW 5 Series, Cadillac XTS or similar"
              />
            </div>
          </div>
          
          <div class="box-pagination-fleet">
            <div class="swiper-button-prev swiper-button-prev-fleet">
              <svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"></path>
              </svg>
            </div>
            <div class="swiper-button-next swiper-button-next-fleet">
              <svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'
import CardService from '~/components/CardServiceStyle5.vue'

onMounted(() => {
  // Initialize Swiper slider
  if (typeof window !== 'undefined' && window.Swiper) {
    new window.Swiper('.swiper-group-4-service', {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      navigation: {
        nextEl: '.swiper-button-next-fleet',
        prevEl: '.swiper-button-prev-fleet',
      },
      breakpoints: {
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
        1200: {
          slidesPerView: 4,
        }
      }
    })
  }
})
</script>
