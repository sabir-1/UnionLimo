<template>
  <section class="section mt-120">
    <div class="container-sub">
      <h2 class="heading-44-medium wow fadeInLeft">Features Of Our Mercedes-Benz E-Class Vehicles</h2>
      <div class="row mt-50 cardIconTitleDescLeft">
        <div class="col-lg-4 col-md-6 col-sm-6 mb-30" v-for="(feature, i) in features" :key="i">
          <CardBlogGrid :img="feature.img" :title="feature.title" :description="feature.description" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import CardBlogGrid from '../CardBlogGrid.vue';
const features = [
  { img: '/imgs/page/fleet/camera.png', title: 'Safety First', description: 'Both you and your shipments will travel with professional drivers. Always with the highest quality standards.' },
  { img: '/imgs/page/fleet/water.png', title: 'Prices With No Surprises', description: 'Both you and your shipments will travel with professional drivers. Always with the highest quality standards.' },
  { img: '/imgs/page/fleet/coffee.png', title: 'Private Travel Solutions', description: 'Both you and your shipments will travel with professional drivers. Always with the highest quality standards.' },
  { img: '/imgs/page/fleet/newspaper.png', title: 'Safety First', description: 'Both you and your shipments will travel with professional drivers. Always with the highest quality standards.' },
  { img: '/imgs/page/fleet/cooperation.png', title: 'Prices With No Surprises', description: 'Both you and your shipments will travel with professional drivers. Always with the highest quality standards.' },
  { img: '/imgs/page/fleet/rim.png', title: 'Private Travel Solutions', description: 'Both you and your shipments will travel with professional drivers. Always with the highest quality standards.' },
];
</script> 