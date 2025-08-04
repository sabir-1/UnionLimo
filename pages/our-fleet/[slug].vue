<template>  
  <div>
    <!-- Loading State -->
    <div v-if="pending" class="text-center py-60">
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
    <template v-else-if="data">
      <BookVehicle :fleet-data="data" />
      <Detail :fleet-data="data" />
    </template>

    <!-- Not Found State -->
    <div v-else class="text-center py-60">
      <h3>Fleet not found</h3>
      <p>The fleet you're looking for doesn't exist.</p>
      <NuxtLink to="/our-fleet" class="btn btn-primary">Back to Fleet</NuxtLink>
    </div>
  </div>
  
  <!-- FAQs Section -->
  <Faqs />
</template>

<script setup>
import Faqs from '~/sections/homepage5/Faqs.vue'
import Detail from '~/components/FleetSingle/Detail.vue';
import BookVehicle from '~/components/FleetSingle/BookVehicle.vue'; 

// Get route params
const route = useRoute();
const { slug } = route.params;

// Use the fleet API composable
const { fetchFleetBySlug } = useFleetApi();

// Server-side data fetching with useAsyncData
const { data, pending, error } = await useAsyncData(
  `fleet-${slug}`,
  async () => {
    if (!slug) return null;
    try {
      return await fetchFleetBySlug(slug);
    } catch (err) {
      console.error('Error fetching fleet data:', err);
      throw new Error('Failed to load fleet details. Please try again later.');
    }
  },
  {
    server: true,
    lazy: false,
    default: () => null
  }
);

// Define static layout props
definePageMeta({
  layout: 'default',
  layoutProps: {
    breadcrumbTitle: 'Fleet Details',
    breadcrumbItems: [
      { text: 'Our Fleet', link: '/our-fleet' },
      { text: 'Fleet Details', link: null }
    ]
  }
})

// Computed SEO fields for reactivity
const seoTitle = computed(() => data.value?.seo?.title || (data.value ? `${data.value.title} - UnionLimo Fleet` : 'Fleet Details - UnionLimo'));
const seoDescription = computed(() => data.value?.seo?.description || data.value?.longDescription || data.value?.description || 'Explore our luxury fleet vehicles with premium comfort and professional chauffeur service.');
const seoKeywords = computed(() => data.value?.seo?.keywords || (data.value ? `${data.value.title.toLowerCase()}, luxury fleet, chauffeur service, unionlimo` : 'luxury fleet, chauffeur service, unionlimo'));
const seoCanonical = computed(() => data.value?.seo?.canonical_url || (data.value ? `https://unionlimo.com/our-fleet/${data.value.slug}` : 'https://unionlimo.com/our-fleet'));
const ogImage = computed(() => data.value?.featuredImage || data.value?.image || '/imgs/page/fleet/img-single.png');

// Set SEO meta tags reactively
useHead(() => ({
  title: seoTitle.value,
  meta: [
    { name: 'description', content: seoDescription.value },
    { name: 'keywords', content: seoKeywords.value },
    { property: 'og:title', content: seoTitle.value },
    { property: 'og:description', content: seoDescription.value },
    { property: 'og:image', content: ogImage.value },
    { property: 'og:type', content: 'website' }
  ],
  link: [
    { rel: 'canonical', href: seoCanonical.value }
  ]
}));

// Update breadcrumb when fleet data changes
watch(data, (newFleet) => {
  if (newFleet) {
    // Update route meta for breadcrumb
    if (route.meta.layoutProps) {
      route.meta.layoutProps.breadcrumbTitle = newFleet.title || 'Fleet Details';
      route.meta.layoutProps.breadcrumbItems = [
        { text: 'Our Fleet', link: '/our-fleet' },
        { text: newFleet.title || 'Fleet Details', link: null }
      ];
    }
  }
}, { immediate: true });
</script>

<style scoped>

</style>