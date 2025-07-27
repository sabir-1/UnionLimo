<template>
  <section class="section mt-50 mb-50">
    <div class="container-sub">
      <h2 class="heading-44-medium wow fadeInLeft">Explore Our Fleet</h2>
      <div class="row mt-50">
        <div class="col-lg-4 col-md-6 mb-30" v-for="fleet in relatedFleets" :key="fleet.id">
          <CardFleetStyle3
            :src="fleet.image"
            :title="fleet.title"
            :description="fleet.description"
            :passengers="fleet.passengers"
            :luggage="fleet.luggage"
            :link="`/our-fleet/${fleet.slug}`"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import CardFleetStyle3 from '../CardFleetStyle3.vue';

// Use the fleet API composable to get related fleets
const { fleets, fetchFleets } = useFleetApi();

// Get related fleets (excluding current fleet)
const relatedFleets = computed(() => {
  return fleets.value.slice(0, 3); // Show first 3 fleets as related
});

// Fetch fleets on component mount
onMounted(() => {
  if (fleets.value.length === 0) {
    fetchFleets();
  }
});
</script> 