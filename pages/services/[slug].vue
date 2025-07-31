<template>
  <div>
    <!-- Loading State -->
    <div v-if="loading" class="text-center py-60">
      <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
      <p class="mt-3">Loading service details...</p>
    </div>

    <!-- Error State -->
    <div v-else-if="error" class="text-center py-60">
      <div class="alert alert-warning" role="alert">
        <h4>Oops!</h4>
        <p>{{ error }}</p>
        <button @click="fetchServiceData" class="btn btn-primary">Try Again</button>
      </div>
    </div>

    <!-- Service Detail Section -->
    <div v-else-if="serviceData">
      <ServiceSingleBanner :service-data="serviceData" />
      <ServiceSingleFeature   /> 
      <ServiceSingleDetail :service-data="serviceData" />
      <!-- FAQs Section -->
      <Faqs />
    </div>

    <!-- Service Not Found -->
    <div v-else class="text-center py-60">
      <div class="alert alert-info" role="alert">
        <h4>Service Not Found</h4>
        <p>The requested service could not be found.</p>
        <NuxtLink to="/services" class="btn btn-primary">Back to Services</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
// Import components
import ServiceSingleBanner from '~/sections/service-single/Banner.vue'
import ServiceSingleDetail from '~/sections/service-single/Detail.vue'
import ServiceSingleFeature from '~/sections/service-single/Feature.vue'
import Faqs from '~/sections/homepage5/Faqs.vue'

// Get route params
const route = useRoute()
const { slug } = route.params

// Use the services API composable
const { 
  loading, 
  error, 
  fetchServiceBySlug 
} = useServicesApi()

// Reactive service data
const serviceData = ref(null)

// Fetch service data
const fetchServiceData = async () => {
  if (slug) {
    const data = await fetchServiceBySlug(slug)
    serviceData.value = data
  }
}

// Fetch service data on component mount
onMounted(() => {
  fetchServiceData()
})

// Watch for route changes
watch(() => route.params.slug, (newSlug) => {
  if (newSlug) {
    fetchServiceData()
  }
})

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
</style> 