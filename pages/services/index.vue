<template>
    <div>
      <!-- Header -->
      <HeaderVariation3 />
  
      <!-- Breadcrumb Section -->
      <BreadCrumb />
  
      <!-- Service List Section -->
      <ServicesLists />
  
      <!-- Footer -->
      <FooterVariation7 />
    </div>
  </template>
  
  <script setup>
  // Import components (adjust path as per your structure)
  import HeaderVariation3 from '~/components/HeaderVariation3.vue'
  import FooterVariation7 from '~/components/FooterVariation7.vue'
  import BreadCrumb from '~/components/BreadCrumb.vue'
  import ServicesLists from '~/components/ServicesLists.vue'
  
  // Set page title
  useHead({
    title: 'Service List - Multipurpose Startup SaaS HTML Template'
  })
  </script>
  