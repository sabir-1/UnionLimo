<template>
  <section class="section pt-60">
    <div class="container-sub">
      <!-- Loading State -->
      <div v-if="loading" class="row">
        <div class="col-lg-4 col-sm-6 mb-30" v-for="n in 9" :key="n">
          <div class="service-skeleton">
            <div class="skeleton-image"></div>
            <div class="skeleton-content">
              <div class="skeleton-title"></div>
              <div class="skeleton-description"></div>
            </div>
          </div>
        </div>
      </div>

      <!-- Services Grid -->
      <div v-else class="row">
        <div class="col-lg-4 col-sm-6 mb-30" v-for="(service, idx) in paginatedServices" :key="service.id">
          <CardServiceStyle5 
            :src="service.src" 
            :title="service.title" 
            :desc="service.desc" 
            :link="service.link" 
          />
        </div>
      </div>

      <!-- Pagination -->
      <div v-if="!loading && totalPages > 1" class="text-center mt-40 mb-120 wow fadeInUp">
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
/* Service skeleton loading styles */
.service-skeleton {
  background: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.skeleton-image {
  width: 100%;
  height: 200px;
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: skeleton-pulse 1.5s ease-in-out infinite;
}

.skeleton-content {
  padding: 20px;
}

.skeleton-title {
  width: 80%;
  height: 20px;
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  border-radius: 4px;
  margin-bottom: 10px;
  animation: skeleton-pulse 1.5s ease-in-out infinite;
}

.skeleton-description {
  width: 100%;
  height: 16px;
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  border-radius: 4px;
  animation: skeleton-pulse 1.5s ease-in-out infinite;
}

@keyframes skeleton-pulse {
  0%, 100% {
    opacity: 0.6;
  }
  50% {
    opacity: 1;
  }
}
</style>
