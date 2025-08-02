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
          <button @click="retryFetch" class="btn btn-primary mt-2">Retry</button>
        </div>
      </div>

      <!-- Fleet Display -->
      <div v-else class="box-slide-fleet-2 box-fleet-style-2 mt-50">
        <!-- Debug info (remove in production) -->
        <!-- <div v-if="showDebug" class="alert alert-info mb-3">
          <p>Fleets loaded: {{ displayFleets.length }}</p>
          <button @click="manualInitSlider" class="btn btn-sm btn-secondary">Manual Init Slider</button>
          <button @click="checkSliderStatus" class="btn btn-sm btn-info">Check Status</button>
        </div> -->
        
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
const { initializeSliderWithTiming, handleVisibilityChange, handleResize, checkLibraries, checkSliderElement } = useSlider();

// Debug mode (set to true to see debug info)
const showDebug = ref(false);

// Computed property to get fleets to display (limit to 12 for the slider)
const displayFleets = computed(() => {
  // If API data is available, use it
  if (fleets.value.length > 0) {
    return fleets.value.slice(0, 12);
  }
  
  // Fallback to static data if API fails
  return getFallbackFleets();
});

// Static fallback data
const getFallbackFleets = () => [
  {
    id: 1,
    image: '/imgs/page/homepage1/e-class.png',
    title: 'Business Class',
    description: 'Mercedes-Benz E-Class, BMW 5 Series, Cadillac XTS or similar',
    passengers: '4',
    luggage: '2',
    slug: 'business-class'
  },
  {
    id: 2,
    image: '/imgs/page/homepage1/eqs.png',
    title: 'First Class',
    description: 'Mercedes-Benz EQS, BMW 7 Series, Audi A8 or similar',
    passengers: '4',
    luggage: '2',
    slug: 'first-class'
  },
  {
    id: 3,
    image: '/imgs/page/homepage1/suv.png',
    title: 'Business Van/SUV',
    description: 'Mercedes-Benz V-Class, Chevrolet Suburban, Cadillac',
    passengers: '6',
    luggage: '4',
    slug: 'business-van'
  },
  {
    id: 4,
    image: '/imgs/page/homepage1/e-class.png',
    title: 'Luxury Sedan',
    description: 'Premium luxury sedan with professional chauffeur service',
    passengers: '4',
    luggage: '2',
    slug: 'luxury-sedan'
  }
];

// Retry function for API failures
const retryFetch = async () => {
  console.log('Retrying fleet fetch...');
  await fetchFleets();
};

// Manual slider initialization for debugging
const manualInitSlider = () => {
  console.log('Manual slider initialization triggered');
  initializeSliderWithTiming('.swiper-group-4-fleet');
};

// Check slider status for debugging
const checkSliderStatus = () => {
  console.log('=== Slider Status Check ===');
  console.log('Libraries loaded:', checkLibraries());
  console.log('Slider element exists:', checkSliderElement('.swiper-group-4-fleet'));
  console.log('Fleets count:', fleets.value.length);
  console.log('Display fleets count:', displayFleets.value.length);
  console.log('Loading state:', loading.value);
  console.log('Error state:', error.value);
  
  // Check if Swiper instance exists
  if (typeof window !== 'undefined' && window.swiper_4_fleet) {
    console.log('Swiper instance exists:', window.swiper_4_fleet);
  } else {
    console.log('No Swiper instance found');
  }
};

// Fetch fleet data on component mount
onMounted(async () => {
  console.log('OurFleet component mounted, fetching fleets...');
  await fetchFleets();
  console.log('Fleets fetched:', fleets.value.length);
  
  // Enable debug mode in development
  if (process.dev) {
    showDebug.value = true;
  }
});

// Watch for fleet data changes and reinitialize slider
watch(displayFleets, (newFleets) => {
  console.log('Display fleets changed:', newFleets.length);
  if (newFleets.length > 0) {
    console.log('Initializing slider with', newFleets.length, 'fleets');
    initializeSliderWithTiming('.swiper-group-4-fleet');
  }
}, { immediate: true });

// Also watch for loading state to reinitialize when loading completes
watch(loading, (isLoading) => {
  console.log('Loading state changed:', isLoading);
  if (!isLoading && fleets.value.length > 0) {
    console.log('Loading completed, reinitializing slider');
    initializeSliderWithTiming('.swiper-group-4-fleet');
  }
});

// Handle visibility change and resize events
onMounted(() => {
  console.log('Setting up visibility and resize handlers');
  handleVisibilityChange('.swiper-group-4-fleet');
  handleResize('.swiper-group-4-fleet');
});

// Handle route changes to reinitialize slider when coming from other pages
const route = useRoute();
watch(() => route.path, (newPath) => {
  console.log('Route changed to:', newPath);
  if (newPath === '/' && fleets.value.length > 0) {
    console.log('Route is home page, reinitializing slider');
    // Small delay to ensure DOM is ready
    setTimeout(() => {
      initializeSliderWithTiming('.swiper-group-4-fleet');
    }, 100);
  }
});

// Additional debugging: Check if libraries are loaded
onMounted(() => {
  setTimeout(() => {
    console.log('Libraries loaded:', checkLibraries());
    console.log('Slider element exists:', checkSliderElement('.swiper-group-4-fleet'));
  }, 500);
});

// Force reinitialize on nextTick after data loads
watch(fleets, (newFleets) => {
  if (newFleets.length > 0) {
    nextTick(() => {
      console.log('Forcing slider reinitialization after data load');
      initializeSliderWithTiming('.swiper-group-4-fleet');
    });
  }
});

// Fallback: If no fleets after 3 seconds, try to initialize anyway
onMounted(() => {
  setTimeout(() => {
    if (fleets.value.length === 0 && !loading.value) {
      console.log('No fleets loaded, trying fallback initialization');
      initializeSliderWithTiming('.swiper-group-4-fleet');
    }
  }, 3000);
});
</script>

<style scoped>
/* OurFleet specific styles */
</style> 