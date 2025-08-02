<template>
  <div>
    <!-- Header -->
    <HeaderVariation5 />
    
    <!-- Dynamic Breadcrumb - Only show on non-home pages -->
    <BreadCrumb 
      v-if="!isHomePage"
      :title="breadcrumbTitle" 
      :items="breadcrumbItems"
    />
    
    
    
    <!-- Main Content -->
    <main>
      <slot />
    </main>
    
    <!-- Footer -->
    <FooterVariation5 />
    
    <!-- Scripts for slider initialization -->
    <ScriptMain />
    
    <!-- Slider initializer for navigation -->
    <SliderInitializer />
  </div>
</template>

<script setup>
// Import shared components
import HeaderVariation5 from '~/components/HeaderVariation5.vue'    
import FooterVariation5 from '~/components/FooterVariation5.vue'
import BreadCrumb from '~/components/BreadCrumb.vue'
import ScriptMain from '~/components/ScriptMain.vue'
import SliderInitializer from '~/components/SliderInitializer.vue'

// Import company data composable
import useCompanyData from '~/composables/useCompanyData.js'

// Get current route
const route = useRoute()

// Use company data composable
const { companyData, logo, companyName, fetchCompanyData } = useCompanyData()

// Fetch company data on layout mount
onMounted(() => {
  fetchCompanyData()
})

// Check if current page is home page
const isHomePage = computed(() => {
  const result = route.path === '/' || route.path === '/home' || route.path === '/about';
  console.log('Is home page:', result, 'Path:', route.path);
  return result;
})

// Get breadcrumb data from route meta
const breadcrumbTitle = computed(() => {
  console.log('Route meta:', route.meta);
  console.log('Layout props:', route.meta.layoutProps);
  return route.meta.layoutProps?.breadcrumbTitle || 'Page'
})

const breadcrumbItems = computed(() => {
  return route.meta.layoutProps?.breadcrumbItems || []
})

// SEO optimization with dynamic data
const seoTitle = computed(() => {
  return route.meta.layoutProps?.seoTitle || companyName.value || 'UnionLimo'
})

const seoDescription = computed(() => {
  return route.meta.layoutProps?.seoDescription || companyData.value?.description || 'Premium Chauffeur and Limousine Services'
})

const seoKeywords = computed(() => {
  return route.meta.layoutProps?.seoKeywords || 'chauffeur, limousine, luxury transport, car hire'
})

useHead({
  title: seoTitle,
  link: [
    { rel: 'icon', href: logo.value?.favicon || '/favicon.ico' }
  ],
  meta: [
    { name: 'description', content: seoDescription },
    { name: 'keywords', content: seoKeywords },
    { property: 'og:title', content: seoTitle },
    { property: 'og:description', content: seoDescription },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: seoTitle },
    { name: 'twitter:description', content: seoDescription }
  ]
})
</script>

<style scoped>
/* Layout specific styles */
</style>

 