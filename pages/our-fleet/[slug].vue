<template>  
  <div>
    <!-- Loading State -->
    <div v-if="loading" class="text-center py-60">
      <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
      <p class="mt-3">Loading fleet details...</p>
    </div>

    <!-- Error State -->
    <div v-else-if="error" class="text-center py-60">
      <div class="alert alert-warning" role="alert">
        <h4>Oops!</h4>
        <p>{{ error }}</p>
        <NuxtLink to="/our-fleet" class="btn btn-primary">Back to Fleet</NuxtLink>
      </div>
    </div>

    <!-- Fleet Detail -->
    <template v-else-if="currentFleet">
      <Detail :fleet-data="currentFleet" />
      <FeatureVehicle :fleet-data="currentFleet" />
      <BookVehicle :fleet-data="currentFleet" />
      <ExploreFleet />
    </template>

    <!-- Not Found State -->
    <div v-else class="text-center py-60">
      <h3>Fleet not found</h3>
      <p>The fleet you're looking for doesn't exist.</p>
      <NuxtLink to="/our-fleet" class="btn btn-primary">Back to Fleet</NuxtLink>
    </div>
  </div>
</template>

<script setup>
// Get route params
const route = useRoute();
const { slug } = route.params;

// Use the fleet API composable
const { fetchFleetBySlug } = useFleetApi();

// Local state for detail page
const loading = ref(false);
const error = ref(null);
const currentFleet = ref(null);

// Fetch fleet data on page load
onMounted(async () => {
  if (slug) {
    await fetchFleetData(slug);
  }
});

// Watch for route changes
watch(() => route.params.slug, async (newSlug) => {
  if (newSlug) {
    await fetchFleetData(newSlug);
  }
});

// Function to fetch fleet data with proper error handling
const fetchFleetData = async (fleetSlug) => {
  loading.value = true;
  error.value = null;
  
  try {
    const fleetData = await fetchFleetBySlug(fleetSlug);
    if (fleetData) {
      currentFleet.value = fleetData;
    } else {
      error.value = 'Fleet not found';
    }
  } catch (err) {
    console.error('Error fetching fleet data:', err);
    error.value = 'Failed to load fleet details. Please try again later.';
  } finally {
    loading.value = false;
  }
};

// Import components
import Detail from '~/components/FleetSingle/Detail.vue';
import FeatureVehicle from '~/components/FleetSingle/FeatureVehicle.vue';
import BookVehicle from '~/components/FleetSingle/BookVehicle.vue'; 
import ExploreFleet from '~/components/FleetSingle/ExploreFleet.vue';

// Define layout props for SEO and breadcrumb
definePageMeta({
  layout: 'default',
  layoutProps: computed(() => ({
    breadcrumbTitle: currentFleet.value?.title || 'Fleet Details',
    breadcrumbItems: [
      { text: 'Our Fleet', link: '/our-fleet' },
      { text: currentFleet.value?.title || 'Fleet Details', link: null }
    ],
    seoTitle: currentFleet.value?.title ? `${currentFleet.value.title} - UnionLimo Fleet` : 'Fleet Details - UnionLimo',
    seoDescription: currentFleet.value?.description || 'Explore our luxury fleet vehicles with premium comfort and professional chauffeur service.',
    seoKeywords: currentFleet.value?.title ? `${currentFleet.value.title.toLowerCase()}, luxury fleet, chauffeur service, unionlimo` : 'luxury fleet, chauffeur service, unionlimo'
  }))
})
</script>

<style scoped>

</style>