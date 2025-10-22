<template>
    <div class="">
   <section class="section pt-60 bg-white latest-new-white">
        <div class="container-sub"> 
          <div class="row align-items-center"> 
            <div class="col-lg-6 col-md-6 col-sm-6 text-center text-sm-start mb-30"> 
              <h2 class="heading-24-medium wow fadeInUp">Choose Your Fleet</h2>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-6 text-center text-sm-end mb-30 wow fadeInUp">
              <div class="dropdown dropdown-menu-box">
                <a class="dropdown-toggle" id="dropdownMenuButton1" href="#" data-bs-toggle="dropdown" aria-expanded="false">
                  {{ selectedVehicleType || 'Vehicle Type' }}
                </a>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <li><a class="dropdown-item" href="#" @click.prevent="filterByVehicleType('')">All Types</a></li>
                  <li><a class="dropdown-item" href="#" @click.prevent="filterByVehicleType('Hatchback')">Hatchback</a></li>
                  <li><a class="dropdown-item" href="#" @click.prevent="filterByVehicleType('Sedan')">Sedan</a></li>
                  <li> <a class="dropdown-item" href="#" @click.prevent="filterByVehicleType('SUV')">SUV</a></li>
                  <li> <a class="dropdown-item" href="#" @click.prevent="filterByVehicleType('Crossover')">Crossover</a></li>
                  <li> <a class="dropdown-item" href="#" @click.prevent="filterByVehicleType('Sports Car')">Sports Car</a></li>
                  <li> <a class="dropdown-item" href="#" @click.prevent="filterByVehicleType('Minivan')">Minivan</a></li>
                </ul>
              </div>
              <div class="dropdown dropdown-menu-box">
                <a class="dropdown-toggle" id="dropdownMenuButton2" href="#" data-bs-toggle="dropdown" aria-expanded="false">
                  {{ selectedVehicleMake || 'Vehicle Make' }}
                </a>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton2">
                  <li><a class="dropdown-item" href="#" @click.prevent="filterByVehicleMake('')">All Makes</a></li>
                  <li><a class="dropdown-item" href="#" @click.prevent="filterByVehicleMake('Mercedes-Benz')">Mercedes-Benz</a></li>
                  <li><a class="dropdown-item" href="#" @click.prevent="filterByVehicleMake('Audi')">Audi</a></li>
                  <li> <a class="dropdown-item" href="#" @click.prevent="filterByVehicleMake('Hyundai')">Hyundai</a></li>
                  <li> <a class="dropdown-item" href="#" @click.prevent="filterByVehicleMake('Honda')">Honda</a></li>
                  <li> <a class="dropdown-item" href="#" @click.prevent="filterByVehicleMake('Nissan')">Nissan</a></li>
                  <li> <a class="dropdown-item" href="#" @click.prevent="filterByVehicleMake('Toyota')">Toyota</a></li>
                  <li> <a class="dropdown-item" href="#" @click.prevent="filterByVehicleMake('Volkswagen')">Volkswagen</a></li>
                  <li> <a class="dropdown-item" href="#" @click.prevent="filterByVehicleMake('Subaru')">Subaru</a></li>
                  <li> <a class="dropdown-item" href="#" @click.prevent="filterByVehicleMake('Lamborghini')">Lamborghini</a></li>
                  <li> <a class="dropdown-item" href="#" @click.prevent="filterByVehicleMake('Lincoln')">Lincoln</a></li>
                  <li> <a class="dropdown-item" href="#" @click.prevent="filterByVehicleMake('Bentley')">Bentley</a></li>
                  <li> <a class="dropdown-item" href="#" @click.prevent="filterByVehicleMake('Chevrolet')">Chevrolet</a></li>
                  <li> <a class="dropdown-item" href="#" @click.prevent="filterByVehicleMake('Ford')">Ford</a></li>
                  <li> <a class="dropdown-item" href="#" @click.prevent="filterByVehicleMake('Volvo')">Volvo</a></li>
                  <li> <a class="dropdown-item" href="#" @click.prevent="filterByVehicleMake('GMC')">GMC</a></li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Loading State -->
          <div v-if="loading" class="row mt-30 our-fleet-2">
            <div class="col-lg-4 col-md-6 mb-30" v-for="n in 9" :key="n">
              <div class="fleet-skeleton">
                <div class="skeleton-image"></div>
                <div class="skeleton-content">
                  <div class="skeleton-title"></div>
                  <div class="skeleton-description"></div>
                  <div class="skeleton-features">
                    <div class="skeleton-feature"></div>
                    <div class="skeleton-feature"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Fleet Grid -->
          <div v-else class="row mt-30 our-fleet-2"> 
            <div class="col-lg-4 col-md-6 mb-30" v-for="fleet in paginatedFleets" :key="fleet.id"> 
              <div class="cardFleet cardFleetStyle3 wow fadeInUp">
                <div class="cardImage mb-30">
                  <NuxtLink :to="`/fleets/${fleet.slug}`">
                    <img :src="fleet.image" :alt="fleet.title">
                  </NuxtLink>
                  
                   
                </div>
                <div class="cardInfo">
                  <div class="tags mb-10" v-if="fleet.category">
                    <NuxtLink to="#">{{ fleet.category }}</NuxtLink>
                  </div>
                  <NuxtLink :to="`/fleets/${fleet.slug}`">
                    <h3 class="text-20-medium color-text mb-10">{{ fleet.title }}</h3>
                  </NuxtLink>
                  <p class="text-14 color-text mb-30">{{ fleet.description }}</p>
                </div>
                <div class="cardInfoBottom">
                  <div class="passenger"><span class="icon-circle icon-passenger"></span><span class="text-14">{{ fleet.passengers }}</span></div>
                  <div class="luggage"><span class="icon-circle icon-luggage"></span><span class="text-14">{{ fleet.luggage }}</span></div>
                </div>
              </div>
            </div>
          </div>

          <!-- Empty State -->
          <div v-if="!loading && paginatedFleets.length === 0" class="text-center py-60">
            <!-- <div class="col-lg-4 col-md-6 mb-30" v-for="n in 9" :key="n">
              <div class="fleet-skeleton">
                <div class="skeleton-image"></div>
                <div class="skeleton-content">
                  <div class="skeleton-title"></div>
                  <div class="skeleton-description"></div>
                  <div class="skeleton-features">
                    <div class="skeleton-feature"></div>
                    <div class="skeleton-feature"></div>
                  </div>
                </div>
              </div>
            </div> -->
            <!-- <h3>No fleets found</h3>
            <p>Try adjusting your filters or check back later for new vehicles.</p>
            <button @click="clearFilters" class="btn btn-primary">Clear Filters</button> -->
          </div>

          <!-- Pagination -->
          <div class="text-center mt-40 mb-120 wow fadeInUp" v-show="!loading && totalPages > 1">
            <Pagination 
              :current-page="currentPage" 
              :total-pages="totalPages" 
              @change="changePage" 
            />
          </div>
          
        </div>
      </section> 
    </div>
</template>

<script setup>
import { ref } from 'vue'
import Pagination from '~/elements/Pagination.vue'

// Use the fleet API composable
const { 
  fleets, 
  loading, 
  error, 
  currentPage,
  paginatedFleets,
  totalPages,
  selectedVehicleType,
  selectedVehicleMake,
  fetchFleets, 
  filterByVehicleType,
  filterByVehicleMake,
  changePage,
  clearFilters
} = useFleetApi();

// Fetch fleets on page load
onMounted(() => {
  fetchFleets();
});

// Define layout props for SEO and breadcrumb
definePageMeta({
  layout: 'default',
  layoutProps: {
    breadcrumbTitle: 'Our Fleet',
    breadcrumbItems: [
      { text: 'Our Fleet', link: null }
    ],
    seoTitle: 'Our Fleet - Luxury Vehicles | UnionLimo',
    seoDescription: 'Explore our premium fleet of luxury vehicles including Mercedes-Benz, BMW, Audi and more. Business class, first class, SUV and electric vehicles available.',
    seoKeywords: 'luxury fleet, mercedes benz, bmw, audi, suv, business class, first class, luxury vehicles'
  }
})
</script> 

<style scoped>
.category-badge {
  position: absolute;
  bottom: 10px;
  left: 10px;
  z-index: 2;
}

.category-badge .badge {
  font-size: 12px;
  padding: 6px 12px;
  border-radius: 20px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.cardImage {
  position: relative;
}

.cardImage img {
  width: 100%;
  height: auto;
  border-radius: 8px;
}

/* Fleet skeleton loading styles */

</style> 