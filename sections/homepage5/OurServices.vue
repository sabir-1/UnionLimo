<template>
  <section class="section pt-90 pb-120 bg-our-service">
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
            More Services
            <svg class="icon-16 ml-5" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"></path>
            </svg>
          </NuxtLink>
        </div>
      </div>
    </div>

    <!-- Services Display -->
    <div class="box-slide-fleet mt-50">
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

// Use the slider composable
const { initializeSliderWithTiming, handleVisibilityChange, handleResize, checkLibraries, checkSliderElement } = useSlider();

// COMMENTED OUT: API functionality for future use
// const { fetchServices, services, loading, error } = useServicesApi();

// Dummy data - using static data instead of API
const displayServices = computed(() => {
  // COMMENTED OUT: API data logic for future use
  // if (services.value.length > 0) {
  //   return services.value.slice(0, 12);
  // }
  
  // Using dummy data by default
  return getDummyServices();
});

// Dummy services data
const getDummyServices = () => [
  {
    id: 1,
    src: '/imgs/page/homepage1/service1.png',
    title: 'Intercity Rides',
    desc: 'Professional chauffeur services with luxury vehicles and experienced drivers.',
    link: '/services/intercity-rides'
  },
  {
    id: 2,
    src: '/imgs/page/homepage1/service2.png',
    title: 'Chauffeur Hailing',
    desc: 'On-demand chauffeur services with luxury vehicles and professional drivers.',
    link: '/services/chauffeur-hailing'
  },
  {
    id: 3,
    src: '/imgs/page/homepage1/service3.png',
    title: 'Airport Transfers',
    desc: 'Reliable airport transportation with flight monitoring and meet & greet services.',
    link: '/services/airport-transfers'
  },
  {
    id: 4,
    src: '/imgs/page/homepage1/service5.png',
    title: 'Sprinter Class',
    desc: 'Luxury van transportation for groups with spacious and comfortable interiors.',
    link: '/services/sprinter-class'
  },
  {
    id: 5,
    src: '/imgs/page/homepage1/service1.png',
    title: 'Corporate Travel',
    desc: 'Professional business travel solutions with premium vehicles and punctual service.',
    link: '/services/corporate-travel'
  },
  {
    id: 6,
    src: '/imgs/page/homepage1/service2.png',
    title: 'Wedding Transportation',
    desc: 'Elegant wedding transportation services with luxury vehicles and professional drivers.',
    link: '/services/wedding-transportation'
  }
];

// COMMENTED OUT: Retry function for API failures
// const retryFetch = async () => {
//   console.log('Retrying services fetch...');
//   await fetchServices();
// };

// COMMENTED OUT: Manual slider initialization for debugging
// const manualInitSlider = () => {
//   console.log('Manual slider initialization triggered');
//   initializeSliderWithTiming('.swiper-group-4-service');
// };

// COMMENTED OUT: Check slider status for debugging
// const checkSliderStatus = () => {
//   console.log('=== Services Slider Status Check ===');
//   console.log('Libraries loaded:', checkLibraries());
//   console.log('Slider element exists:', checkSliderElement('.swiper-group-4-service'));
//   console.log('Services count:', services.value.length);
//   console.log('Display services count:', displayServices.value.length);
//   console.log('Loading state:', loading.value);
//   console.log('Error state:', error.value);
//   
//   if (typeof window !== 'undefined' && window.swiper_4_service) {
//     console.log('Swiper instance exists:', window.swiper_4_service);
//   } else {
//     console.log('No Swiper instance found');
//   }
// };

// COMMENTED OUT: Fetch services data on component mount
// onMounted(async () => {
//   console.log('OurServices component mounted, fetching services...');
//   await fetchServices();
//   console.log('Services fetched:', services.value.length);
// });

// Initialize slider with dummy data on component mount
onMounted(() => {
  console.log('OurServices component mounted with dummy data');
  // Small delay to ensure DOM is ready
  setTimeout(() => {
    initializeSliderWithTiming('.swiper-group-4-service');
  }, 100);
});

// Watch for services data changes and reinitialize slider
watch(displayServices, (newServices) => {
  console.log('Display services changed:', newServices.length);
  if (newServices.length > 0) {
    console.log('Initializing slider with', newServices.length, 'services');
    initializeSliderWithTiming('.swiper-group-4-service');
  }
}, { immediate: true });

// COMMENTED OUT: Watch for loading state to reinitialize when loading completes
// watch(loading, (isLoading) => {
//   console.log('Loading state changed:', isLoading);
//   if (!isLoading && services.value.length > 0) {
//     console.log('Loading completed, reinitializing slider');
//     initializeSliderWithTiming('.swiper-group-4-service');
//   }
// });

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
  if (newPath === '/' && displayServices.value.length > 0) {
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

// COMMENTED OUT: Force reinitialize on nextTick after data loads
// watch(services, (newServices) => {
//   if (newServices.length > 0) {
//     nextTick(() => {
//       console.log('Forcing slider reinitialization after data load');
//       initializeSliderWithTiming('.swiper-group-4-service');
//     });
//   }
// });

// Fallback: If no services after 3 seconds, try to initialize anyway
onMounted(() => {
  setTimeout(() => {
    if (displayServices.value.length === 0) {
      console.log('No services loaded, trying fallback initialization');
      initializeSliderWithTiming('.swiper-group-4-service');
    }
  }, 3000);
});
</script>

<style scoped>
/* OurServices specific styles */
</style>
