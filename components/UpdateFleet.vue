<template>
  <section class="section pt-90 pb-120">
    <div class="container-sub"> 
      <div class="row align-items-center">
        <div class="col-lg-6 col-7">
          <h2 class="heading-44-medium title-fleet wow fadeInUp">Our Fleets</h2>
        </div>
        <div class="col-lg-6 col-5 text-end">
          <NuxtLink 
            to="/fleets" 
            class="text-16-medium color-primary wow fadeInUp"
          >
            See All
            <svg style="width: 24px; height: 16px;" class="icon-16" fill="none" stroke="currentColor" stroke-width="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"></path>
            </svg>
          </NuxtLink>
        </div>
      </div>
    </div>
      <!-- Fleet Display with Skeleton Loading -->
      <div class="box-slide-fleet fleet-style-2 mt-50">
        <div class="box-swiper"> 
          <div class="swiper-container swiper-group-4-fleet pb-0">
            <div class="swiper-wrapper">
              <!-- Skeleton Loading State -->
              <div 
                v-if="loading" 
                v-for="n in 6" 
                :key="`skeleton-${n}`" 
                class="swiper-slide"
              >
                <div class="cardFleet wow fadeInUp">
                  <div class="cardInfo">
                    <div class="skeleton-title mb-10"></div>
                    <div class="skeleton-description mb-30"></div>
                  </div>
                  <div class="cardImage mb-30">
                    <div class="skeleton-image"></div>
                  </div>
                  <div class="cardInfoBottom">
                    <div class="passenger">
                      <span class="icon-circle icon-passenger"></span>
                      <span class="text-14">Passengers<span class="skeleton-text"></span></span>
                    </div>
                    <div class="luggage">
                      <span class="icon-circle icon-luggage"></span>
                      <span class="text-14">Luggage<span class="skeleton-text"></span></span>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Actual Fleet Data -->
              <div 
                v-else
                v-for="fleet in displayFleets" 
                :key="fleet.id" 
                class="swiper-slide"
              >
                <div class="cardFleet wow fadeInUp">
                  <div class="cardInfo">
                    <NuxtLink :to="`/fleets/${fleet.slug}`">
                      <h3 class="text-20-medium color-text mb-10">{{ fleet.title }}</h3>
                    </NuxtLink>
                    <p class="text-14 color-text mb-30">{{ fleet.description }}</p>
                  </div>
                  <div class="cardImage mb-30">
                    <NuxtLink :to="`/fleets/${fleet.slug}`">
                      <img :src="fleet.image" :alt="fleet.title">
                    </NuxtLink>
                  </div>
                  <div class="cardInfoBottom">
                    <div class="passenger">
                      <span class="icon-circle icon-passenger"></span>
                      <span class="text-14">Passengers<span>{{ fleet.passengers }}</span></span>
                    </div>
                    <div class="luggage">
                      <span class="icon-circle icon-luggage"></span>
                      <span class="text-14">Luggage<span>{{ fleet.luggage }}</span></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="box-pagination-fleet">
              <div class="swiper-button-prev swiper-button-prev-fleet">
                <svg fill="none" width="24" height="24" stroke="currentColor" stroke-width="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"></path>
                </svg>
              </div>
              <div class="swiper-button-next swiper-button-next-fleet">
                <svg fill="none" width="24" height="24" stroke="currentColor" stroke-width="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Error State -->
      <div v-if="error" class="text-center mt-50">
        <div class="alert alert-warning" role="alert">
          <p>{{ error }}</p>
          <button @click="retryFetch" class="btn btn-primary mt-2">Retry</button>
        </div>
      </div>
    
  </section>
</template>

<script setup>
// Use the fleet API composable
const { fetchFleets, fleets, loading, error } = useFleetApi();

// Use the slider composable
const { initializeSliderWithTiming, handleVisibilityChange, handleResize, checkLibraries, checkSliderElement } = useSlider();

// Computed property to get fleets to display (limit to 12 for the slider)
const displayFleets = computed(() => {
  return fleets.value.slice(0, 12);
});

// Retry function for API failures
const retryFetch = async () => {
  console.log('Retrying fleet fetch...');
  await fetchFleets();
};

// Fetch fleet data on component mount
onMounted(async () => {
  console.log('UpdateFleet component mounted, fetching fleets...');
  await fetchFleets();
  console.log('Fleets fetched:', fleets.value.length);
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
  if (fleets.value.length > 0) {
    console.log('Route changed, reinitializing slider');
    // Small delay to ensure DOM is ready
    setTimeout(() => {
      initializeSliderWithTiming('.swiper-group-4-fleet');
    }, 100);
  }
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

// Initialize slider when loading starts (for skeleton state)
watch(loading, (isLoading) => {
  if (isLoading) {
    console.log('Loading started, initializing skeleton slider');
    nextTick(() => {
      initializeSliderWithTiming('.swiper-group-4-fleet');
    });
  }
});
</script>

<style scoped>
/* Skeleton Loading Styles */
.skeleton-title {
  height: 24px;
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: loading 1.5s infinite;
  border-radius: 4px;
  width: 80%;
}

.skeleton-description {
  height: 16px;
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: loading 1.5s infinite;
  border-radius: 4px;
  width: 100%;
}

.skeleton-image {
  height: 200px;
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: loading 1.5s infinite;
  border-radius: 8px;
  width: 100%;
}

.skeleton-text {
  display: inline-block;
  width: 20px;
  height: 16px;
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: loading 1.5s infinite;
  border-radius: 4px;
  margin-left: 5px;
}

@keyframes loading {
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
}

/* Ensure skeleton cards maintain the same dimensions as real cards */
 
</style>
 