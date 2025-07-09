<template>
  <section class="section pt-60">
    <div class="container-sub">
      <div class="row">
        <div class="col-lg-4 col-sm-6 mb-30" v-for="(service, idx) in services" :key="idx">
          <CardServiceStyle5  :src="service.src" :title="service.title" :desc="service.desc" :link="service.link" />
         
        </div>
      </div>
      <div class="text-center mt-40 mb-120 wow fadeInUp">
        <!-- Pagination component or markup goes here -->
        <Pagination />
      </div>
    </div>
  </section>
</template>

<script setup>
import { CardServiceStyle3 } from '~/components';
import CardServiceStyle5 from './CardServiceStyle5.vue';
import Pagination from '~/elements/Pagination.vue'

const services = [
  {
    src: '/imgs/page/homepage1/service1.png',
    title: 'Business Class',
    desc: 'Premium business transportation with luxury vehicles and professional chauffeurs.',
    link: '/services/business-class',
    type: 'style3',
  },
  {
    src: '/imgs/page/homepage1/service2.png',
    title: 'Chauffeur Hailing',
    desc: 'On-demand chauffeur services with instant booking and real-time tracking.',
    link: '/services/chauffeur-hailing',
    type: 'style3',
  },
  {
    src: '/imgs/page/homepage1/service3.png',
    title: 'Airport Transfers',
    desc: 'Reliable airport transportation with flight monitoring and meet & greet services.',
    link: '/services/airport-transfers',
    type: 'style3',
  },
  {
    src: '/imgs/page/homepage1/service5.png',
    title: 'Sprinter Class',
    desc: 'Luxury van transportation for groups with spacious and comfortable interiors.',
    link: '/services/sprinter-class',
    type: 'style3',
  },
  {
    src: '/imgs/page/services/wedding.png',
    title: 'Wedding Class',
    desc: 'Elegant transportation for your special day with luxury vehicles and professional service.',
    link: '/services/wedding-class',
    type: 'style3',
  },
  {
    src: '/imgs/page/services/travel.png',
    title: 'Travel Transfer',
    desc: 'Comprehensive travel transportation solutions for all your journey needs.',
    link: '/services/travel-transfer',
    type: 'style3',
  },
  {
    src: '/imgs/page/homepage1/service1.png',
    title: 'Intercity Rides',
    desc: 'The price of tickets for low-cost airlines for a specific route has a much larger spread than that of regular airlines. It depends on the time to departure, demand and competition on the route. Unlike regular airlines, low-cost airlines rarely offer cheap tickets more than 3 months before departure.',
    link: '/services/intercity-rides',
    type: 'style5',
  },
];
</script>

<style scoped>
/* Add any section-specific styles here if needed */
</style>
