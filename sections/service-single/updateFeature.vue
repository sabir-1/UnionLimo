<template>
  <section class="section mt-90" id="update-our-services">
    <div class="container-sub p-0">
      <div class="row cardIconTitleDescLeft">
        <div class="col-lg-4 col-md-6 col-sm-6 mb-30">
          <CardBlogGridUp 
            img="/imgs/page/smartphone.svg" 
            title="Convenience" 
            description="Get a door-to-door chauffeured ride right when you need with just a few taps in the Blacklane app."
          />
        </div>
        <div class="col-lg-4 col-md-6 col-sm-6 mb-30">
          <CardBlogGridUp 
            img="/imgs/page/car.svg" 
            title="Comfort" 
            description="A private ride in a top-of-the-line vehicle makes every journey a pleasure, not just a means to an end."
          />
        </div>
        <div class="col-lg-4 col-md-6 col-sm-6 mb-30">
          <CardBlogGridUp 
            img="/imgs/page/ribbon.svg" 
            title="Quality" 
            description="Making your experience excellent is our top priority. Enjoy the next-level service you deserve for all your travels."
          />
        </div>
        <div class="col-lg-4 col-md-6 col-sm-6 mb-30">
          <CardBlogGridUp 
            img="/imgs/page/chauffeur.svg" 
            title="Professional chauffeurs" 
            description="Travel confidently with expert chauffeurs delivering industry-leading quality, reliability, discretion, and more."
          />
        </div>
        <div class="col-lg-4 col-md-6 col-sm-6 mb-30">
          <CardBlogGridUp 
            img="/imgs/page/shield-check.svg" 
            title="Reliability" 
            description="Book with certainty, then stay in the know with real-time ride status updates and chauffeur location tracking."
          />
        </div>
        <div class="col-lg-4 col-md-6 col-sm-6 mb-30">
          <CardBlogGridUp 
            img="/imgs/page/currency__1_.svg" 
            title="Competitive rates" 
            description="Access premium service at distance-based prices that are fair to you and our chauffeurs."
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import CardBlogGrid from '@/components/CardBlogGrid.vue'
import CardBlogGridUp from '@/components/CardBlogGridUp.vue'
</script>

<style scoped>
/* Add any component-specific styles here */
</style> 