<template>
  <section class="section pt-60">
    <div class="container-sub">
      <!-- Loading State -->
      <div v-if="loading" class="text-center py-60">
        <div class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
        <p class="mt-3">Loading services...</p>
      </div>

      <!-- Error State -->
      <div v-else-if="error" class="text-center py-60">
        <div class="alert alert-warning" role="alert">
          <h4>Oops!</h4>
          <p>{{ error }}</p>
          <button @click="fetchServices" class="btn btn-primary">Try Again</button>
        </div>
      </div>

      <!-- Services Grid -->
      <div v-else-if="filteredServices.length > 0" class="row">
        <div class="col-lg-4 col-sm-6 mb-30" v-for="(service, idx) in paginatedServices" :key="service.id">
          <CardServiceStyle5 
            :src="service.src" 
            :title="service.title" 
            :desc="service.desc" 
            :link="service.link" 
          />
        </div>
      </div>

      <!-- Empty State -->
      <div v-else class="text-center py-60">
        <h3>No services found</h3>
        <p>Check back later for new services!</p>
      </div>

      <!-- Pagination -->
      <div v-if="!loading && !error && totalPages > 1" class="text-center mt-40 mb-120 wow fadeInUp">
        <Pagination 
          :current-page="currentPage" 
          :total-pages="totalPages" 
          @change="changePage" 
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import CardServiceStyle5 from './CardServiceStyle5.vue';
import Pagination from '~/elements/Pagination.vue';

// Use the services API composable
const { 
  services, 
  loading, 
  error, 
  currentPage,
  filteredServices,
  paginatedServices,
  totalPages,
  fetchServices, 
  changePage
} = useServicesApi();

// Fetch services on component mount
onMounted(() => {
  fetchServices();
});
</script>

<style scoped>
/* Add any section-specific styles here if needed */
</style>
