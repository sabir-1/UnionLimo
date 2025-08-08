<template>
    <section class="section mt-90" id="update-our-services">
      <div class="container-sub p-0">
        <div class="row cardIconTitleDescLeft">
          <div class="col-lg-4 col-md-6 col-sm-6 mb-30">
            <CardBlogGridUp 
              img="/imgs/page/currency__1_.svg" 
              title="All-inclusive pricing" 
              description="Both you and your shipments will travel with professional drivers. Always with the highest quality standards."
            />
          </div>
          <div class="col-lg-4 col-md-6 col-sm-6 mb-30">
            <CardBlogGridUp 
              img="/imgs/page/plane-clock.svg" 
              title="Seamless airport travel" 
              description="Both you and your shipments will travel with professional drivers. Always with the highest quality standards."
            />
          </div>
          <div class="col-lg-4 col-md-6 col-sm-6 mb-30">
            <CardBlogGridUp 
              img="/imgs/page/time-flexible.svg" 
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
  import CardBlogGridUp from '@/components/CardBlogGridUp.vue'
  </script>
  
  <style scoped>
  /* Add any component-specific styles here */
  </style> 