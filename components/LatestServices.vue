<template>
  <section class="section banner-home5">
   <div class="container-sub" style="padding-top: 80px;">
    <div class="row align-items-center pb-10">
        <div class="col-lg-6 col-sm-7 col-7">
          <h2 class="color-text heading-44-medium wow fadeInUp">Our Services</h2>
        </div>
        <div class="col-lg-6 col-sm-5 col-5 text-end">
          <NuxtLink
            to="/services"
            class="text-16-medium color-text d-flex align-items-center justify-content-end wow fadeInUp"
          >
            More Services
            <svg class="icon-16 ml-5" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"></path>
            </svg>
          </NuxtLink>
        </div>
      </div>
   </div>
    <div class="box-banner-homepage-2 mt-50">
    <div class="box-services-banner">
        <div class="container-sub">
          <div class="box-swiper">
            <div class="swiper-container swiper-group-4 pb-0">
              <div class="swiper-wrapper">
                <div class="swiper-slide">
                  <CardServiceStyle3 src="/imgs/page/homepage1/service1.png" title="Intercity Rides" />
                </div>
                <div class="swiper-slide">
                  <CardServiceStyle3 src="/imgs/page/homepage1/service2.png" title="Chauffeur Hailing" />
                </div>
                <div class="swiper-slide">
                  <CardServiceStyle3 src="/imgs/page/homepage1/service3.png" title="Airport Transfers" />
                </div>
                <div class="swiper-slide">
                  <CardServiceStyle3 src="/imgs/page/homepage1/service4.png" title="Sprinter Class" />
                </div>
                <div class="swiper-slide">
                  <CardServiceStyle3 src="/imgs/page/homepage1/service4.png" title="Sprinter Class" />
                </div>
                <div class="swiper-slide">
                  <CardServiceStyle3 src="/imgs/page/homepage1/service4.png" title="Sprinter Class" />
                </div>
                <div class="swiper-slide">
                  <CardServiceStyle3 src="/imgs/page/homepage1/service4.png" title="Sprinter Class" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
 
</script>
