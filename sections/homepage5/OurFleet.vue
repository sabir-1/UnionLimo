<template>
  <section class="section pt-120 pb-120">
    <div class="container-sub">
      <div class="row align-items-center">
        <div class="col-lg-6 col-sm-7 col-7">
          <h2 class="color-text heading-44-medium wow fadeInUp">Our Fleet</h2>
        </div>
        <div class="col-lg-6 col-sm-5 col-5 text-end">
          <NuxtLink
            to="/single-fleet"
            class="text-16-medium color-text d-flex align-items-center justify-content-end wow fadeInUp"
          >
            More Fleet
            <svg class="icon-16 ml-5" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"></path>
            </svg>
          </NuxtLink>
        </div>
      </div>
      <div class="box-slide-fleet-2 box-fleet-style-2 mt-50">
        <div class="box-swiper">
          <div class="swiper-container swiper-group-4-fleet box-padding-fleet pb-0">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <CardFleetStyle3 
                  src="/imgs/page/homepage1/e-class.png" 
                  title="Business Class" 
                  description="Mercedes-Benz E-Class, BMW 5 Series, Cadillac XTS or similar" 
                  passengers="4" 
                  luggage="2" 
                />
              </div>
              <div class="swiper-slide">
                <CardFleetStyle3 
                  src="/imgs/page/homepage1/eqs.png" 
                  title="First Class" 
                  description="Mercedes-Benz EQS, BMW 7 Series, Audi A8 or similar" 
                  passengers="4" 
                  luggage="2" 
                />
              </div>
              <div class="swiper-slide">
                <CardFleetStyle3 
                  src="/imgs/page/homepage1/suv.png" 
                  title="Business Van/SUV" 
                  description="Mercedes-Benz V-Class, Chevrolet Suburban, Cadillac" 
                  passengers="4" 
                  luggage="2" 
                />
              </div>
              <div class="swiper-slide">
                <CardFleetStyle3 
                  src="/imgs/page/homepage1/suv.png" 
                  title="Business Van/SUV" 
                  description="Mercedes-Benz V-Class, Chevrolet Suburban, Cadillac" 
                  passengers="4" 
                  luggage="2" 
                />
              </div>
              <div class="swiper-slide">
                <CardFleetStyle3 
                  src="/imgs/page/homepage1/e-class.png" 
                  title="Business Class" 
                  description="Mercedes-Benz E-Class, BMW 5 Series, Cadillac XTS or similar" 
                  passengers="4" 
                  luggage="2" 
                />
              </div>
              <div class="swiper-slide">
                <CardFleetStyle3 
                  src="/imgs/page/homepage1/eqs.png" 
                  title="First Class" 
                  description="Mercedes-Benz EQS, BMW 7 Series, Audi A8 or similar" 
                  passengers="4" 
                  luggage="2" 
                />
              </div>
              <div class="swiper-slide">
                <CardFleetStyle3 
                  src="/imgs/page/homepage1/suv.png" 
                  title="Business Van/SUV" 
                  description="Mercedes-Benz V-Class, Chevrolet Suburban, Cadillac" 
                  passengers="4" 
                  luggage="2" 
                />
              </div>
              <div class="swiper-slide">
                <CardFleetStyle3 
                  src="/imgs/page/homepage1/suv.png" 
                  title="Business Van/SUV" 
                  description="Mercedes-Benz V-Class, Chevrolet Suburban, Cadillac" 
                  passengers="4" 
                  luggage="2" 
                />
              </div>
              <div class="swiper-slide">
                <CardFleetStyle3 
                  src="/imgs/page/homepage1/e-class.png" 
                  title="Business Class" 
                  description="Mercedes-Benz E-Class, BMW 5 Series, Cadillac XTS or similar" 
                  passengers="4" 
                  luggage="2" 
                />
              </div>
              <div class="swiper-slide">
                <CardFleetStyle3 
                  src="/imgs/page/homepage1/eqs.png" 
                  title="First Class" 
                  description="Mercedes-Benz EQS, BMW 7 Series, Audi A8 or similar" 
                  passengers="4" 
                  luggage="2" 
                />
              </div>
              <div class="swiper-slide">
                <CardFleetStyle3 
                  src="/imgs/page/homepage1/suv.png" 
                  title="Business Van/SUV" 
                  description="Mercedes-Benz V-Class, Chevrolet Suburban, Cadillac" 
                  passengers="4" 
                  luggage="2" 
                />
              </div>
              <div class="swiper-slide">
                <CardFleetStyle3 
                  src="/imgs/page/homepage1/suv.png" 
                  title="Business Van/SUV" 
                  description="Mercedes-Benz V-Class, Chevrolet Suburban, Cadillac" 
                  passengers="4" 
                  luggage="2" 
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
    </div>
  </section>
</template>

<script setup>
import { CardFleetStyle3 } from '~/components';
// OurFleet component logic
</script>

<style scoped>
/* OurFleet specific styles */
</style> 