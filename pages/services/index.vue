<template>
    <div>
      <!-- Service List Section -->
      <ServicesLists />
    </div>
  </template>
  
  <script setup>
  // Import components (adjust path as per your structure)
  import ServicesLists from '~/components/ServicesLists.vue'
  
  // Define layout props for SEO and breadcrumb
  definePageMeta({
    layout: 'default',
    layoutProps: {
      breadcrumbTitle: 'Our Services',
      breadcrumbItems: [
        { text: 'Services', link: null }
      ],
      seoTitle: 'Our Services - Premium Transportation | UnionLimo',
      seoDescription: 'Discover our comprehensive range of premium transportation services including airport transfers, corporate travel, wedding transportation and luxury chauffeur services.',
      seoKeywords: 'transportation services, airport transfer, corporate travel, wedding transportation, luxury chauffeur service'
    }
  })
  </script>
  