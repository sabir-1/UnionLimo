<template>
  <div>
    <!-- Loading state -->
    <div v-if="loading" class="loading-container">
      <div class="loading-spinner">Loading...</div>
    </div>
    
    <!-- Error state -->
    <div v-else-if="error" class="error-container">
      <h2>Service Not Found</h2>
      <p>{{ error }}</p>
      <NuxtLink to="/services" class="back-link">Back to Services</NuxtLink>
    </div>
    
    
    <!-- Service Detail Section -->
    <div v-else-if="serviceData">
      <div style="margin-top: -28px;">
        <BannerHome :service-data="serviceData"/>
      </div>
      
      <ServiceSingleFeature :service-data="serviceData" />  
      <BookVehicleServices :service-data="serviceData" />
      <ServiceSingleDetail :service-data="serviceData" />

      <div class="box-slide-fleet mt-120 wow fadeInUp" v-if="sliderImages.length > 0">
      <div class="box-swiper">
        
        <div class="swiper-container swiper-group-2-single-fleet services-cus-fti pb-0">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(image, index) in sliderImages" :key="index">
              <img :src="image" :alt="`${serviceData?.title || 'Service'} - Image ${index + 1}`" />
            </div>
          </div>
          <div class="box-pagination-fleet">
            <div class="swiper-button-prev swiper-button-prev-fleet">
              <svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
              </svg>
            </div>
            <div class="swiper-button-next swiper-button-next-fleet">
              <svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>  
      
      <UpdateFleet />  
    <!-- <comfortable />  
    <HowItWork />  -->
    <FeatureSingleservices/>
    <!-- <OurServices/>  -->
    <!-- Make Your Trip Section -->
    <UpdatedTopCities/> 
    <!-- Showcase Section -->
    <Showcase />   
    <!-- Testimonials Section -->
    <Testimonials />
      <!-- <servicesIcons /> -->
      <!-- <ServiceSingleBanner :service-data="serviceData" /> -->
      <!-- <ServiceSingleFeature :service-data="serviceData" />  -->
      

       <!-- Our Fleet Section -->
    <!-- <OurFleet /> -->
      
      <!-- FAQs Section -->
       <div class=" mt-100">

     
      <ServiceFaqs :faqs="serviceData?.faqs || []" />
    </div>
    </div>
  </div>
</template>

<script setup>
// Import components
import BannerHome from '~/components/BannerHome/index.vue'
import BookVehicleServices from '~/components/BookVehicleServices.vue'
// import ServiceSingleFeature from '~/sections/service-single/updateFeature.vue'
import servicesIcons from '~/components/servicesIcons.vue'
import ServiceSingleBanner from '~/sections/service-single/Banner.vue'
import ServiceSingleDetail from '~/sections/service-single/Detail.vue'
// import ServiceSingleFeature from '~/sections/service-single/Feature.vue'
import ServiceSingleFeature from '~/sections/service-single/updateFeature.vue'
import ServiceFaqs from '~/components/serviceFaqs.vue'
import OurFleet from '~/sections/homepage5/OurFleet.vue'
import Testimonials from '~/sections/homepage5/Testimonials.vue'
import OurServices from '~/sections/homepage5/OurServices.vue'
// import LatestServices from '~/components/LatestServices.vue'
import UpdateFleet from '~/components/UpdateFleet.vue'
import FeatureSingleservices from '~/components/FeatureSingleservices.vue'
// Get route params
const route = useRoute()
const { slug } = route.params

// Use services API composable
const { fetchServiceBySlug, loading, error } = useServicesApi()

// Reactive service data
const serviceData = ref(null)

// Build slider images dynamically from serviceData.slider_image_*
const sliderImages = computed(() => {
  const data = serviceData.value
  if (!data) return []

  // Prefer transformed array from API composable
  if (Array.isArray(data.sliderImages) && data.sliderImages.length > 0) {
    return data.sliderImages
  }

  // Fallback: build from raw keys if present
  return Object.entries(data)
    .filter(([key, value]) => key.startsWith('slider_image_') && typeof value === 'string' && value.trim() !== '')
    .sort(([aKey], [bKey]) => {
      const aNum = parseInt(aKey.replace('slider_image_', ''), 10)
      const bNum = parseInt(bKey.replace('slider_image_', ''), 10)
      return (isNaN(aNum) ? 0 : aNum) - (isNaN(bNum) ? 0 : bNum)
    })
    .map(([, value]) => value)
})

// Initialize swiper when images are ready
const { initializeSliderWithTiming, handleVisibilityChange, handleResize } = useSlider()

onMounted(() => {
  if (sliderImages.value.length > 0) {
    nextTick(() => {
      initializeSliderWithTiming('.swiper-group-2-single-fleet')
      handleVisibilityChange('.swiper-group-2-single-fleet')
      handleResize('.swiper-group-2-single-fleet')
    })
  }
})

watch(sliderImages, (images) => {
  if (images && images.length > 0) {
    nextTick(() => {
      initializeSliderWithTiming('.swiper-group-2-single-fleet')
    })
  }
})

// Fetch service data on component mount
onMounted(async () => {
  if (slug) {
    const data = await fetchServiceBySlug(slug)
    if (data) {
      serviceData.value = data
    }
  }
})

// Watch for route changes to refetch data
watch(() => route.params.slug, async (newSlug) => {
  if (newSlug) {
    const data = await fetchServiceBySlug(newSlug)
    if (data) {
      serviceData.value = data
    }
  }
})

// Debug logging when service data changes
watch(serviceData, (newService) => {
  console.log('Service data changed in service detail page:', newService)
  console.log('FAQs in service data:', newService?.faqs)
}, { immediate: true })

// Define static layout props
definePageMeta({
  layout: 'default',
  layoutProps: {
    breadcrumbTitle: 'Service Details',
    breadcrumbItems: [
      { text: 'Services', link: '/services' },
      { text: 'Service Details', link: null }
    ],
    seoTitle: 'Service Details - UnionLimo',
    seoDescription: 'Explore our premium transportation services with luxury vehicles and professional chauffeur service.',
    seoKeywords: 'luxury transportation, chauffeur service, unionlimo'
  }
})

// Dynamic SEO and breadcrumb handling
watch(serviceData, (newService) => {
  if (newService) {
    // Update route meta for breadcrumb
    const route = useRoute();
    if (route.meta.layoutProps) {
      route.meta.layoutProps.breadcrumbTitle = newService.title || 'Service Details';
      route.meta.layoutProps.breadcrumbItems = [
        { text: 'Services', link: '/services' },
        { text: newService.title || 'Service Details', link: null }
      ];
      route.meta.layoutProps.seoTitle = `${newService.title} - UnionLimo`;
      route.meta.layoutProps.seoDescription = newService.description || newService.desc;
      route.meta.layoutProps.seoKeywords = `${newService.title.toLowerCase()}, luxury transportation, chauffeur service, unionlimo`;
    }

    // Update SEO
    useHead({
      title: `${newService.title} - UnionLimo`,
      meta: [
        { name: 'description', content: newService.description || newService.desc },
        { name: 'keywords', content: `${newService.title.toLowerCase()}, luxury transportation, chauffeur service, unionlimo` },
        { property: 'og:title', content: `${newService.title} - UnionLimo` },
        { property: 'og:description', content: newService.description || newService.desc }
      ]
    });
  }
}, { immediate: true });
</script>

<style scoped>
/* Service detail page specific styles */
.loading-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
}

.loading-spinner {
  font-size: 18px;
  color: #666;
}

.error-container {
  text-align: center;
  padding: 60px 20px;
}

.error-container h2 {
  color: #e74c3c;
  margin-bottom: 20px;
}

.error-container p {
  color: #666;
  margin-bottom: 30px;
}
.-mt-\[100px\]{
  margin-top: -128px;
}
.back-link {
  display: inline-block;
  padding: 12px 24px;
  background-color: #007bff;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s;
}

.back-link:hover {
  background-color: #0056b3;
}
</style> 