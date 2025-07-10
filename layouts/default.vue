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
  return route.path === '/' || route.path === '/home'
})

// Props for dynamic breadcrumb
const props = defineProps({
  breadcrumbTitle: {
    type: String,
    default: 'Page'
  },
  breadcrumbItems: {
    type: Array,
    default: () => []
  },
  seoTitle: {
    type: String,
    default: 'UnionLimo'
  },
  seoDescription: {
    type: String,
    default: 'Premium Chauffeur and Limousine Services'
  },
  seoKeywords: {
    type: String,
    default: 'chauffeur, limousine, luxury transport, car hire'
  }
})

// SEO optimization
useHead({
  title: props.seoTitle,
  meta: [
    { name: 'description', content: props.seoDescription },
    { name: 'keywords', content: props.seoKeywords },
    { property: 'og:title', content: props.seoTitle },
    { property: 'og:description', content: props.seoDescription },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: props.seoTitle },
    { name: 'twitter:description', content: props.seoDescription }
  ]
})
</script>

<style scoped>
/* Layout specific styles */
</style>

 