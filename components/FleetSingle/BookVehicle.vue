<template>
  <section class="section mt-90">
    <div class="container-sub">
      <h2 class="heading-44-medium wow fadeInDown">Book Your {{ fleetData.title }}</h2>
      <div class="row mt-50">
        <div class="col-xl-8 col-lg-7 mb-30">
          <h5 class="text-20-medium color-text mb-10 wow fadeInLeft">{{ fleetData.title }}</h5>
          <p class="text-14 color-text mb-15 wow fadeInRight">{{ fleetData.description }}</p>
          <div class="mt-5 wow fadeInUp">
            <span class="passengers-info mr-20 color-text">Passengers {{ fleetData.passengers }}</span>
            <span class="luggages-info color-text">Luggage {{ fleetData.luggage }}</span>
          </div>
          <div class="mt-20 text-center wow fadeInUp">
            <img class="d-block" :src="fleetData.image" :alt="fleetData.title" />
          </div>
        </div>
        <div class="col-xl-4 col-lg-5 mb-30">
          <div class="box-vehicle-price wow fadeInUp">
            <ul class="list-prices">
              <li v-for="(rate, idx) in fleetData.pricing" :key="idx">
                <span class="text">{{ rate.label }}</span>
                <!-- <span class="price">${{ rate.value }}</span> -->
              </li>
            </ul>
            <div class="mt-30 wow fadeInUp">
              <NuxtLink to="/contact" class="btn btn-primary btn-book mw-100">
                Book Now
                <svg class="icon-16 ml-5" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
              </NuxtLink>
            </div>
          </div>
          <div class="row mt-30">
            <div class="col-lg-6 col-md-3 col-sm-6 mb-20 wow fadeInUp">
              <span class="text-conditions icon-meet">Meet & Greet included</span>
            </div>
            <div class="col-lg-6 col-md-3 col-sm-6 mb-20 wow fadeInUp">
              <span class="text-conditions icon-free-cancel">Free cancellation</span>
            </div>
            <div class="col-lg-6 col-md-3 col-sm-6 mb-20 wow fadeInUp">
              <span class="text-conditions icon-free-wait">Free Waiting time</span>
            </div>
            <div class="col-lg-6 col-md-3 col-sm-6 mb-20 wow fadeInUp">
              <span class="text-conditions icon-safe">Safe and secure travel</span>
            </div>
          </div>
        </div>
      </div>
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
    'hourly': 'Hourly rate (minimum 3 hours)',
    'airport': 'Airport Transfer',
    'city': 'City Transfer',
    'wedding': 'Wedding Service',
    'reception': 'Reception Service',
    'day': 'Day rate (8 hours)'
  };
  return serviceMap[service] || service.charAt(0).toUpperCase() + service.slice(1);
};
</script> 