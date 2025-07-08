<template>
  <section class="section region-section">
    <div class="container">
      <div class="row">
        <div class="col-12 text-center">
          <h2 class="section-title">Our Service Regions</h2>
          <p class="section-subtitle">We provide premium transportation services across major cities</p>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-3 col-md-6 mb-4" v-for="region in regions" :key="region.id">
          <div class="region-card">
            <div class="region-image">
              <img :src="region.image" :alt="region.name" />
            </div>
            <div class="region-content">
              <h4>{{ region.name }}</h4>
              <p>{{ region.description }}</p>
              <div class="region-stats">
                <span class="stat">{{ region.vehicles }} Vehicles</span>
                <span class="stat">{{ region.routes }} Routes</span>
              </div>
              <NuxtLink :to="region.link" class="btn btn-outline">Explore {{ region.name }}</NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const regions = ref([
  {
    id: 1,
    name: 'New York',
    description: 'Premium transportation services in the Big Apple',
    image: '/imgs/page/homepage1/region1.jpg',
    vehicles: 50,
    routes: 25,
    link: '/region/new-york'
  },
  {
    id: 2,
    name: 'London',
    description: 'Luxury chauffeur services across London',
    image: '/imgs/page/homepage1/region2.jpg',
    vehicles: 40,
    routes: 20,
    link: '/region/london'
  },
  {
    id: 3,
    name: 'Los Angeles',
    description: 'Hollywood-style transportation services',
    image: '/imgs/page/homepage1/region3.jpg',
    vehicles: 35,
    routes: 18,
    link: '/region/los-angeles'
  },
  {
    id: 4,
    name: 'Paris',
    description: 'Elegant transportation in the City of Light',
    image: '/imgs/page/homepage1/region4.jpg',
    vehicles: 30,
    routes: 15,
    link: '/region/paris'
  }
])
</script>

<style scoped>
.region-section {
  padding: 80px 0;
  background: #fff;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #333;
}

.section-subtitle {
  font-size: 1.1rem;
  color: #666;
  margin-bottom: 3rem;
}

.region-card {
  background: #fff;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;
}

.region-card:hover {
  transform: translateY(-5px);
}

.region-image {
  height: 150px;
  overflow: hidden;
}

.region-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.region-content {
  padding: 20px;
}

.region-content h4 {
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 10px;
  color: #333;
}

.region-content p {
  color: #666;
  margin-bottom: 15px;
  font-size: 0.9rem;
}

.region-stats {
  display: flex;
  gap: 15px;
  margin-bottom: 15px;
}

.stat {
  background: #f8f9fa;
  padding: 5px 10px;
  border-radius: 15px;
  font-size: 0.8rem;
  color: #555;
}

.btn-outline {
  border: 2px solid #007bff;
  color: #007bff;
  padding: 8px 20px;
  border-radius: 5px;
  text-decoration: none;
  display: inline-block;
  transition: all 0.3s ease;
  font-size: 0.9rem;
}

.btn-outline:hover {
  background: #007bff;
  color: white;
}
</style> 