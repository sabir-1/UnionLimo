<template>
  <div>
    <!-- Search Section -->
    <section class="section pt-60">
      <div class="container-sub">
        <div class="row justify-content-center">
          <div class="col-lg-8">
            <div class="search-box">
              <div class="input-group">
                <input 
                  type="text" 
                  class="form-control" 
                  placeholder="Search services..."
                  v-model="searchQuery"
                  @input="handleSearch"
                />
                <button class="btn btn-primary" type="button" @click="handleSearch">
                  <i class="fi fi-rr-search"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Service List Section -->
    <ServicesLists />
  </div>
</template>

<script setup>
// Import components
import ServicesLists from '~/components/ServicesLists.vue'

// Use the services API composable
const { 
  searchQuery,
  searchServices,
  clearFilters
} = useServicesApi();

// Handle search input
const handleSearch = () => {
  searchServices(searchQuery.value);
};

// Clear search on component unmount
onUnmounted(() => {
  clearFilters();
});

// Define layout props for SEO and breadcrumb
definePageMeta({
  layout: 'default',
  layoutProps: {
    breadcrumbTitle: 'Our Services',
    breadcrumbItems: [
      { text: 'Services', link: null }
    ],
    seoTitle: 'Our Services - Premium Transportation | UnionLimo',
    seoDescription: 'Discover our comprehensive range of premium transportation services including airport transfers, corporate travel, wedding transportation and luxury chauffeur services.',
    seoKeywords: 'transportation services, airport transfer, corporate travel, wedding transportation, luxury chauffeur service'
  }
})
</script>

<style scoped>
.search-box {
  position: relative;
}

.search-box input {
  padding-right: 40px;
}

.input-group .btn {
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  z-index: 10;
}
</style>
  