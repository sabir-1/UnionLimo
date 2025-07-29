<template>
  <section class="section mt-120">
    <div class="container-sub">
      <h2 class="heading-44-medium wow fadeInLeft">Features Of Our {{ fleetData.title }} Vehicles</h2>
      <div class="row mt-50 cardIconTitleDescLeft">
        <div class="col-lg-4 col-md-6 col-sm-6 mb-30" v-for="(feature, i) in dynamicFeatures" :key="i">
          <CardBlogGrid :img="feature.img" :title="feature.title" :description="feature.description" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import CardBlogGrid from '../CardBlogGrid.vue';

const props = defineProps({
  fleetData: {
    type: Object,
    required: true
  }
});

// Generate dynamic features based on fleet type
const dynamicFeatures = computed(() => {
  const baseFeatures = [
    { img: '/imgs/page/fleet/camera.png', title: 'Safety First', description: 'Both you and your shipments will travel with professional drivers. Always with the highest quality standards.' },
    { img: '/imgs/page/fleet/water.png', title: 'Prices With No Surprises', description: 'Both you and your shipments will travel with professional drivers. Always with the highest quality standards.' },
    { img: '/imgs/page/fleet/coffee.png', title: 'Private Travel Solutions', description: 'Both you and your shipments will travel with professional drivers. Always with the highest quality standards.' },
    { img: '/imgs/page/fleet/newspaper.png', title: 'Professional Service', description: 'Both you and your shipments will travel with professional drivers. Always with the highest quality standards.' },
    { img: '/imgs/page/fleet/cooperation.png', title: 'Premium Comfort', description: 'Both you and your shipments will travel with professional drivers. Always with the highest quality standards.' },
    { img: '/imgs/page/fleet/rim.png', title: 'Luxury Experience', description: 'Both you and your shipments will travel with professional drivers. Always with the highest quality standards.' },
  ];

  // Customize features based on fleet type
  const lowerTitle = props.fleetData.title.toLowerCase();
  
  if (lowerTitle.includes('limousine') || lowerTitle.includes('stretch')) {
    baseFeatures[0].title = 'Entertainment System';
    baseFeatures[1].title = 'Bar Service';
    baseFeatures[2].title = 'Privacy Partition';
    baseFeatures[3].title = 'Spacious Interior';
    baseFeatures[4].title = 'Premium Audio';
    baseFeatures[5].title = 'Luxury Seating';
  } else if (lowerTitle.includes('suv')) {
    baseFeatures[0].title = 'All-Wheel Drive';
    baseFeatures[1].title = 'Spacious Interior';
    baseFeatures[2].title = 'Premium Audio System';
    baseFeatures[3].title = 'Safety Features';
    baseFeatures[4].title = 'Comfortable Seating';
    baseFeatures[5].title = 'Luggage Space';
  } else if (lowerTitle.includes('electric') || lowerTitle.includes('eqs')) {
    baseFeatures[0].title = 'Eco-Friendly';
    baseFeatures[1].title = 'Silent Operation';
    baseFeatures[2].title = 'Advanced Technology';
    baseFeatures[3].title = 'Long Range';
    baseFeatures[4].title = 'Fast Charging';
    baseFeatures[5].title = 'Smart Features';
  }

  return baseFeatures;
});
</script> 