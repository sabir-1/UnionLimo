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
      <ServiceSingleBanner :service-data="serviceData" />
      <ServiceSingleFeature :service-data="serviceData" /> 
      <ServiceSingleDetail :service-data="serviceData" />
      
      <!-- FAQs Section -->
      <Faqs />
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

// Use services API composable
const { fetchServiceBySlug, loading, error } = useServicesApi()

// Reactive service data
const serviceData = ref(null)

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