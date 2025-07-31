<template>
  <section class="section pt-120 pb-120">
    <div class="container-sub">
      <div class="row align-items-center">
        <div class="col-lg-6 col-sm-7 col-7">
          <h2 class="color-text heading-44-medium wow fadeInUp">Our Fleet</h2>
        </div>
        <div class="col-lg-6 col-sm-5 col-5 text-end">
          <NuxtLink
            to="/our-fleet"
            class="text-16-medium color-text d-flex align-items-center justify-content-end wow fadeInUp"
          >
            More Fleet
            <svg class="icon-16 ml-5" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"></path>
            </svg>
          </NuxtLink>
        </div>
      </div>
      
      <!-- Loading State -->
      <div v-if="loading" class="text-center mt-50">
        <div class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
        <p class="mt-3">Loading our fleet...</p>
      </div>

      <!-- Error State -->
      <div v-else-if="error" class="text-center mt-50">
        <div class="alert alert-warning" role="alert">
          <p>{{ error }}</p>
        </div>
      </div>

      <!-- Fleet Display -->
      <div v-else class="box-slide-fleet-2 box-fleet-style-2 mt-50">
        <div class="box-swiper">
          <div class="swiper-container swiper-group-4-fleet box-padding-fleet pb-0">
            <div class="swiper-wrapper">
              <div 
                v-for="fleet in displayFleets" 
                :key="fleet.id" 
                class="swiper-slide"
              >
                <CardFleetStyle3 
                  :src="fleet.image" 
                  :title="fleet.title" 
                  :description="fleet.description" 
                  :passengers="fleet.passengers" 
                  :luggage="fleet.luggage"
                  :slug="fleet.slug"
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

// Use the fleet API composable
const { fetchFleets, fleets, loading, error } = useFleetApi();

// Computed property to get fleets to display (limit to 12 for the slider)
const displayFleets = computed(() => {
  return fleets.value.slice(0, 12);
});

// Fetch fleet data on component mount
onMounted(async () => {
  await fetchFleets();
});
</script>

<style scoped>
/* OurFleet specific styles */
</style> 