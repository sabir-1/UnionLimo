<template>
  <section class="section pt-60 bg-white latest-new-white">
    <div class="container-sub">
      <!-- Fleet Banner -->
      <div class="box-frature-image mb-60 wow fadeInDown">
        <div class="cardImage">
          <img :src="fleetData.image" :alt="fleetData.title">
        </div>
      </div>
      
      <!-- Fleet Title and Description -->
      <h2 class="heading-44-medium mb-30 wow fadeInUp">{{ fleetData.title }}</h2>
      <p class="text-16 color-text mb-40 wow fadeInUp">{{ fleetData.longDescription }}</p>
      
      <!-- Fleet Specifications and Pricing -->
      <div class="row mb-60 wow fadeInUp">
        <div class="col-lg-6">
          <div class="box-specs mb-30">
            <h3 class="heading-24-medium mb-30">Specifications</h3>
            <div class="list-specs">
              <div class="item-spec" v-for="(value, key) in fleetData.specifications" :key="key">
                <span class="text-16 color-text">{{ key }}:</span>
                <span class="text-16-medium color-text">{{ value }}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="box-pricing">
            <h3 class="heading-24-medium mb-30">Pricing</h3>
            <div class="list-pricing">
              <div class="item-price" v-for="(price, service) in fleetData.pricing" :key="service">
                <span class="text-16 color-text">{{ formatServiceName(service) }}:</span>
                <span class="text-16-medium color-primary">{{ price }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Fleet Features -->
      <div class="box-features mb-60 wow fadeInUp">
        <h3 class="heading-24-medium mb-30">Features</h3>
        <div class="row">
          <div class="col-lg-4 col-md-6 mb-20" v-for="feature in fleetData.features" :key="feature">
            <div class="item-feature">
              <span class="icon-circle icon-check mb-10"></span>
              <span class="text-16 color-text">{{ feature }}</span>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Fleet Gallery -->
      <div class="box-gallery mb-60 wow fadeInUp" v-if="fleetData.sliderImages && fleetData.sliderImages.length > 0">
        <h3 class="heading-24-medium mb-30">Gallery</h3>
        <div class="row">
          <div class="col-lg-6 mb-30" v-for="(image, index) in fleetData.sliderImages" :key="index">
            <div class="cardImage">
              <img :src="image" :alt="`${fleetData.title} - Image ${index + 1}`">
            </div>
          </div>
        </div>
      </div>
      
      <!-- Booking CTA -->
      <div class="box-cta text-center mb-60 wow fadeInUp">
        <h3 class="heading-24-medium mb-20">Ready to Book?</h3>
        <p class="text-16 color-text mb-30">Experience luxury transportation with our premium fleet</p>
        <NuxtLink to="/contact" class="btn btn-primary">Book Now</NuxtLink>
      </div>
      
      <!-- Navigation -->
      <div class="box-pagination-single wow fadeInLeft">
        <div class="row align-items-center">
          <div class="col-lg-5 col-sm-5 col-5">
            <div class="box-pager-inner">
              <NuxtLink to="/our-fleet" class="prev-page text-18-medium">
                Back to Fleet
                <svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"></path>
                </svg>
              </NuxtLink>
              <p class="pl-40 text-16 color-text d-none d-sm-block">View all our vehicles</p>
            </div>
          </div>
          <div class="col-lg-2 text-center col-sm-2 col-2">
            <NuxtLink to="/our-fleet">
              <img src="/imgs/page/blog2/grid.png" alt="fleet grid">
            </NuxtLink>
          </div>
          <div class="col-lg-5 col-sm-5 col-5">
            <div class="box-pager-inner text-end">
              <NuxtLink to="/contact" class="next-page text-18-medium">
                Book This Vehicle
                <svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"></path>
                </svg>
              </NuxtLink>
              <p class="pr-40 text-16 color-text d-none d-sm-block">Contact us for booking</p>
            </div>
          </div>
        </div>
      </div>
      
      <div class="border-bottom mb-50 mt-25"></div>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  fleetData: {
    type: Object,
    required: true
  }
});

// Helper function to format service names
const formatServiceName = (service) => {
  const serviceMap = {
    'hourly': 'Hourly Rate',
    'airport': 'Airport Transfer',
    'city': 'City Transfer',
    'wedding': 'Wedding Service',
    'reception': 'Reception Service'
  };
  return serviceMap[service] || service.charAt(0).toUpperCase() + service.slice(1);
};
</script> 