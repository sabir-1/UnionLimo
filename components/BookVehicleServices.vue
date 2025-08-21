<template>
  <section class="section mt-90">
    <div class="container-sub">
      <h2 class="heading-44-medium wow fadeInDown">{{ serviceData.title }}</h2>
      <div class="row mt-50"  >
        <div class="col-xl-8 col-lg-7 mb-30">
          <!-- <h5 class="text-20-medium color-text mb-10 wow fadeInLeft"> {{ serviceData.title }}</h5> -->
          <p class="text-14 color-text mb-15 wow fadeInRight"> 
            {{ serviceData.desc }}</p>
          
          <div class="mt-20 text-center wow fadeInUp">
            <img class="d-block" :src="serviceData.src" alt="Luxury Limousine" />
          </div>
        </div>
        <div class="col-xl-4 col-lg-5 mb-30">
          <div class="box-vehicle-price wow fadeInUp">
            <ul class="list-prices"  > 
             
              
               <li v-for="price in serviceData.features">
                <span class="text"> {{ price }}</span> 
              </li> 
            </ul>
            <div class="mt-30 wow fadeInUp">
              <NuxtLink to="/contact" class="btn btn-primary btn-book mw-100">
                Book Now
                <svg class="icon-16 ml-5" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
              </NuxtLink>
            </div>
          </div>
         
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  serviceData: {
    type: Object,
    required: true
  }
})


</script> 