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
  </div>
</template>

<script setup>
// Import shared components
import HeaderVariation5 from '~/components/HeaderVariation5.vue'    
import FooterVariation5 from '~/components/FooterVariation5.vue'
import BreadCrumb from '~/components/BreadCrumb.vue'

// Get current route
const route = useRoute()

// Check if current page is home page
const isHomePage = computed(() => {
  const result = route.path === '/' || route.path === '/home';
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

// SEO optimization
const seoTitle = computed(() => {
  return route.meta.layoutProps?.seoTitle || 'UnionLimo'
})

const seoDescription = computed(() => {
  return route.meta.layoutProps?.seoDescription || 'Premium Chauffeur and Limousine Services'
})

const seoKeywords = computed(() => {
  return route.meta.layoutProps?.seoKeywords || 'chauffeur, limousine, luxury transport, car hire'
})

useHead({
  title: seoTitle,
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

 