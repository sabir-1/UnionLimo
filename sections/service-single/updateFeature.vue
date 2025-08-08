<template>
    <section class="section mt-90">
      <div class="container-sub">
        <div class="row cardIconTitleDescLeft">
          <div class="col-lg-4 col-md-6 col-sm-6 mb-30">
            <CardBlogGrid 
              img="/imgs/page/homepage7/price.svg" 
              title="All-inclusive pricing" 
              description="Both you and your shipments will travel with professional drivers. Always with the highest quality standards."
            />
          </div>
          <div class="col-lg-4 col-md-6 col-sm-6 mb-30">
            <CardBlogGrid 
              img="/imgs/page/services/airport.svg" 
              title="Seamless airport travel" 
              description="Both you and your shipments will travel with professional drivers. Always with the highest quality standards."
            />
          </div>
          <div class="col-lg-4 col-md-6 col-sm-6 mb-30">
            <CardBlogGrid 
              img="/imgs/page/services/terms.svg" 
              title="Travel on your terms" 
              description="Both you and your shipments will travel with professional drivers. Always with the highest quality standards."
            />
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import CardBlogGrid from '@/components/CardBlogGrid.vue'
  </script>
  
  <style scoped>
  /* Add any component-specific styles here */
  </style> 