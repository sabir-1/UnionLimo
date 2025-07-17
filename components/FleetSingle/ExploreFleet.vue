<template>
  <section class="section mt-50 mb-50">
    <div class="container-sub">
      <h2 class="heading-44-medium wow fadeInLeft">Book Your Business Class</h2>
      <div class="row mt-50">
        <div class="col-lg-4 col-md-6 mb-30" v-for="i in 3" :key="i">
          <CardFleetStyle3
            src="/imgs/page/homepage1/e-class.png"
            title="Business Class"
            description="Mercedes-Benz E-Class, BMW 5 Series, Cadillac XTS or similar"
            :passengers="4"
            :luggage="2"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import CardFleetStyle3 from '../CardFleetStyle3.vue';
</script> 