<template>
  <section class="section pt-120 pb-120 bg-primary bg-our-fleet-2 bg-our-service-2">
    <div class="container-sub">
      <div class="row align-items-center">
        <div class="col-lg-6 col-sm-7 col-7">
          <h2 class="color-white heading-44-medium wow fadeInUp">Top Cities</h2>
        </div>
        <div class="col-lg-6 col-sm-5 col-5 text-end">
          <a href="#" class="text-16-medium color-white d-flex align-items-center justify-content-end wow fadeInUp">
            More Cities
            <svg class="icon-16 ml-5" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"></path>
            </svg>
          </a>
        </div>
      </div>
      <div class="box-slide-fleet-2 mt-50">
        <div class="box-swiper">
          <div class="swiper-container swiper-group-4-fleet pb-0">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <CardCities 
                  src="/imgs/page/homepage3/city1.png" 
                  description="20 routes to/from this city" 
                  title="London" 
                />
              </div>
              <div class="swiper-slide">
                <CardCities 
                  src="/imgs/page/homepage3/city2.png" 
                  description="8 routes to/from this city" 
                  title="New York" 
                />
              </div>
              <div class="swiper-slide">
                <CardCities 
                  src="/imgs/page/homepage3/city3.png" 
                  description="6 routes to/from this city" 
                  title="Berlin" 
                />
              </div>
              <div class="swiper-slide">
                <CardCities 
                  src="/imgs/page/homepage3/city4.png" 
                  description="4 routes to/from this city" 
                  title="Paris" 
                />
              </div>
              <div class="swiper-slide">
                <CardCities 
                  src="/imgs/page/homepage3/city5.png" 
                  description="20 routes to/from this city" 
                  title="Los Angeles" 
                />
              </div>
              <div class="swiper-slide">
                <CardCities 
                  src="/imgs/page/homepage3/city6.png" 
                  description="20 routes to/from this city" 
                  title="Roma" 
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
import { CardCities } from '~/components';
// TopCities component logic
</script>

<style scoped>
/* TopCities specific styles */
</style> 