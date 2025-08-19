<template>
    <section class="section   pb-120 bg-our-service " >
      <div class="container-sub">
        <div class="row align-items-center">
          <div class="col-lg-6 col-sm-7 col-7">
            <h2 class="heading-44-medium title-fleet wow fadeInDown">Our Services</h2>
          </div>
          <div class="col-lg-6 col-sm-5 col-5 text-end">
            <NuxtLink
              to="/services"
              class="text-16-medium color-primary d-flex align-items-center justify-content-end wow fadeInDown"
            >
              See All
              <svg class="icon-16 ml-5" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"></path>
              </svg>
            </NuxtLink>
          </div>
        </div>
      </div>
  
      <!-- Loading State -->
      <div v-if="loading" class="text-center mt-50">
        <div class="box-slide-fleet">
          <div class="box-swiper">
            <div class="swiper-container swiper-group-4-service pb-0">
              <div class="swiper-wrapper">
                <!-- Skeleton cards while loading -->
                <div v-for="n in 6" :key="n" class="swiper-slide">
                  <div class="card-service-skeleton">
                    <div class="skeleton-image"></div>
                    <div class="skeleton-content">
                      <div class="skeleton-title"></div>
                      <div class="skeleton-description"></div>
                    </div>
                  </div>
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
  
      <!-- Error State -->
      <div v-else-if="error" class="text-center mt-50">
        <div class="alert alert-warning" role="alert">
          <p>{{ error }}</p>
          <button @click="retryFetch" class="btn btn-primary mt-2">Retry</button>
        </div>
      </div>
  
      <!-- Services Display -->
      <div v-else class="box-slide-fleet mt-50">
        <div class="box-swiper">
          <div class="swiper-container swiper-group-4-service pb-0">
            <div class="swiper-wrapper">
              <div 
                v-for="service in displayServices" 
                :key="service.id" 
                class="swiper-slide"
              >
                <CardServiceStyle5 
                  :src="service.src" 
                  :title="service.title" 
                  :desc="service.desc"
                  :link="service.link"
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
  import { CardServiceStyle5 } from '~/components';
  
  // Use the services API composable
  const { fetchFeaturedServices, services, loading, error } = useServicesApi();
  
  // Use the slider composable
  const { initializeSliderWithTiming, handleVisibilityChange, handleResize, checkLibraries, checkSliderElement } = useSlider();
  
  // Computed property to get services to display (limit to 12 for the slider)
  const displayServices = computed(() => {
    // Only show API data, no fallback
    return services.value.slice(0, 12);
  });
  
  // Remove fallback data function - no longer needed
  // const getFallbackServices = () => [ ... ];
  
  // Retry function for API failures
  const retryFetch = async () => {
    console.log('Retrying services fetch...');
    await fetchFeaturedServices();
  };
  
  // Fetch services data on component mount
  onMounted(async () => {
    console.log('OurServices component mounted, fetching services...');
    await fetchFeaturedServices();
    console.log('Services fetched:', services.value.length);
  });
  
  // Watch for services data changes and reinitialize slider
  watch(displayServices, (newServices) => {
    console.log('Display services changed:', newServices.length);
    if (newServices.length > 0) {
      console.log('Initializing slider with', newServices.length, 'services');
      initializeSliderWithTiming('.swiper-group-4-service');
    }
  }, { immediate: true });
  
  // Watch for loading state to reinitialize when loading completes
  watch(loading, (isLoading) => {
    console.log('Loading state changed:', isLoading);
    if (!isLoading && services.value.length > 0) {
      console.log('Loading completed, reinitializing slider');
      initializeSliderWithTiming('.swiper-group-4-service');
    }
  });
  
  // Handle visibility change and resize events
  onMounted(() => {
    console.log('Setting up visibility and resize handlers');
    handleVisibilityChange('.swiper-group-4-service');
    handleResize('.swiper-group-4-service');
  });
  
  // Handle route changes to reinitialize slider when coming from other pages
  const route = useRoute();
  watch(() => route.path, (newPath) => {
    console.log('Route changed to:', newPath);
    if (newPath === '/' && services.value.length > 0) {
      console.log('Route is home page, reinitializing slider');
      // Small delay to ensure DOM is ready
      setTimeout(() => {
        initializeSliderWithTiming('.swiper-group-4-service');
      }, 100);
    }
  });
  
  // Additional debugging: Check if libraries are loaded
  onMounted(() => {
    setTimeout(() => {
      console.log('Libraries loaded:', checkLibraries());
      console.log('Slider element exists:', checkSliderElement('.swiper-group-4-service'));
    }, 500);
  });
  
  // Force reinitialize on nextTick after data loads
  watch(services, (newServices) => {
    if (newServices.length > 0) {
      nextTick(() => {
        console.log('Forcing slider reinitialization after data load');
        initializeSliderWithTiming('.swiper-group-4-service');
      });
    }
  });
  
  // Fallback: If no services after 3 seconds, try to initialize anyway
  onMounted(() => {
    setTimeout(() => {
      if (services.value.length === 0 && !loading.value) {
        console.log('No services loaded, trying fallback initialization');
        initializeSliderWithTiming('.swiper-group-4-service');
      }
    }, 3000);
  });
  </script>
  
  <style scoped>
  /* OurServices specific styles */
  
  /* Skeleton loader styles */
  .card-service-skeleton {
    background: #fff;
    border-radius: 12px;
    padding: 20px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    height: 280px;
    display: flex;
    flex-direction: column;
  }
  
  .skeleton-image {
    width: 100%;
    height: 120px;
    background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
    background-size: 200% 100%;
    border-radius: 8px;
    margin-bottom: 16px;
    animation: shimmer 1.5s infinite;
  }
  
  .skeleton-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
  
  .skeleton-title {
    height: 20px;
    background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
    background-size: 200% 100%;
    border-radius: 4px;
    animation: shimmer 1.5s infinite;
    width: 80%;
  }
  
  .skeleton-description {
    height: 16px;
    background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
    background-size: 200% 100%;
    border-radius: 4px;
    animation: shimmer 1.5s infinite;
    width: 100%;
  }
  
  .skeleton-description:nth-child(3) {
    width: 60%;
  }
  
  @keyframes shimmer {
    0% {
      background-position: -200% 0;
    }
    100% {
      background-position: 200% 0;
    }
  }
  </style>
  