<template>
  <div>
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
    <Faqs />
      
    <!-- Download Section -->
    <Download />
  </div>
</template>

<script setup>
// Import all sections
import banner from '~/sections/homepage5/banner.vue'  
import comfortable from '~/sections/homepage5/comfortable.vue'
import HowItWork from '~/sections/homepage5/HowItWork.vue'
import LatestNews from '~/sections/homepage5/LatestNews.vue'
import TopCities from '~/sections/homepage5/TopCities.vue'
import OurFleet from '~/sections/homepage5/OurFleet.vue'
import Faqs from '~/sections/homepage5/Faqs.vue'
import Testimonials from '~/sections/homepage5/Testimonials.vue'
import Showcase from '~/sections/Showcase.vue'
import OurService from '~/sections/OurService.vue'
import Region from '~/sections/Region.vue'
import Download from '~/sections/Download.vue'

// Define layout props for SEO and breadcrumb
definePageMeta({
  layout: 'default',
  layoutProps: {
    seoTitle: 'UnionLimo - Premium Chauffeur & Limousine Services',
    seoDescription: 'Experience luxury transportation with UnionLimo. Premium chauffeur services, limousine rentals, and luxury car hire across major cities.',
    seoKeywords: 'chauffeur service, limousine rental, luxury transport, car hire, premium transportation, airport transfer'
  }
})
</script>

<style scoped>
/* Homepage specific styles */
</style> 