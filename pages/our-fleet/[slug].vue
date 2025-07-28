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

// Define static layout props
definePageMeta({
  layout: 'default',
  layoutProps: {
    breadcrumbTitle: 'Fleet Details',
    breadcrumbItems: [
      { text: 'Our Fleet', link: '/our-fleet' },
      { text: 'Fleet Details', link: null }
    ],
    seoTitle: 'Fleet Details - UnionLimo',
    seoDescription: 'Explore our luxury fleet vehicles with premium comfort and professional chauffeur service.',
    seoKeywords: 'luxury fleet, chauffeur service, unionlimo'
  }
})

// Dynamic SEO and breadcrumb handling
watch(currentFleet, (newFleet) => {
  if (newFleet) {
    // Update SEO
    useHead({
      title: `${newFleet.title} - UnionLimo Fleet`,
      meta: [
        { name: 'description', content: newFleet.description || 'Explore our luxury fleet vehicles with premium comfort and professional chauffeur service.' },
        { name: 'keywords', content: `${newFleet.title.toLowerCase()}, luxury fleet, chauffeur service, unionlimo` },
        { property: 'og:title', content: `${newFleet.title} - UnionLimo Fleet` },
        { property: 'og:description', content: newFleet.description || 'Explore our luxury fleet vehicles with premium comfort and professional chauffeur service.' }
      ]
    });
  }
}, { immediate: true });
</script>

<style scoped>

</style>