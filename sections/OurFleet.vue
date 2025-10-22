<template>
  <section class="section our-fleet-section">
    <div class="container">
      <div class="row">
        <div class="col-12 text-center">
          <h2 class="section-title">Our Fleet</h2>
          <p class="section-subtitle">Choose from our premium vehicle collection</p>
        </div>
      </div>
      
      <!-- Loading State -->
      <div v-if="loading" class="text-center mt-50">
        <div class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
        <p class="mt-3">Loading our fleet...</p>
      </div>

      <!-- Fleet Slider -->
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

// Use the slider composable
const { initializeSliderWithTiming, handleVisibilityChange, handleResize } = useSlider();

// Computed property to get fleets to display (limit to 12 for the slider)
const displayFleets = computed(() => {
  return fleets.value.slice(0, 12);
});

// Fetch fleet data on component mount
onMounted(async () => {
  await fetchFleets();
});

// Watch for fleet data changes and reinitialize slider
watch(displayFleets, (newFleets) => {
  if (newFleets.length > 0) {
    initializeSliderWithTiming('.swiper-group-4-fleet');
  }
}, { immediate: true });

// Also watch for loading state to reinitialize when loading completes
watch(loading, (isLoading) => {
  if (!isLoading && fleets.value.length > 0) {
    initializeSliderWithTiming('.swiper-group-4-fleet');
  }
});

// Handle visibility change and resize events
onMounted(() => {
  handleVisibilityChange('.swiper-group-4-fleet');
  handleResize('.swiper-group-4-fleet');
});
</script>


