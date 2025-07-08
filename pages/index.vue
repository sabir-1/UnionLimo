<template>
  <div>
    <HeaderVariation7 />
    <!-- Banner Section -->
    <banner />
    
    <!-- Our Fleet Section -->
    <OurFleet />
    <!-- Logos Section -->
    <comfortable />
    
    
    
    <!-- How It Work Section -->
    <HowItWork />
    
    <!-- Make Your Trip Section -->
    <TopCities/>
    
    <!-- Showcase Section -->
    <Showcase />
    
    <!-- Our Service Section -->
    <OurService />
    
    <!-- Testimonials Section -->
    <Testimonials />
    
    <!-- Region Section -->
    <Region />
    
    <!-- Latest News Section -->
    <LatestNews />
    
    <!-- FAQs Section -->
    <!-- <Faqs />
     -->
    <!-- Download Section -->
    <Download />
    <FooterVariation7 />
  </div>
</template>

<script setup>
// Import all sections
import banner from '~/sections/homepage5/banner.vue'  
import comfortable from '~/sections/homepage5/comfortable.vue'
import HeaderVariation7 from '~/components/HeaderVariation7.vue'
import HowItWork from '~/sections/homepage5/HowItWork.vue'
import LatestNews from '~/sections/homepage5/LatestNews.vue'
import TopCities from '~/sections/homepage5/TopCities.vue'
import OurFleet from '~/sections/homepage5/OurFleet.vue'
import Faqs from '~/sections/Faqs.vue'
import Testimonials from '~/sections/homepage5/Testimonials.vue'
import FooterVariation7 from '~/components/FooterVariation7.vue'

// SEO
useHead({
  title: 'Luxride - Multipurpose Startup SaaS HTML Template',
  meta: [
    { name: 'description', content: 'Luxride - Premium Chauffeur and Limousine Services' },
    { name: 'keywords', content: 'chauffeur, limousine, luxury transport, car hire' }
  ]
})
</script>

<style scoped>
/* Homepage specific styles */
</style> 