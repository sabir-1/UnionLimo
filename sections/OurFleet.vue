<template>
  <section class="section our-fleet-section">
    <div class="container">
      <div class="row">
        <div class="col-12 text-center">
          <h2 class="section-title">Our Fleet</h2>
          <p class="section-subtitle">Choose from our premium vehicle collection</p>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-4 col-md-6 mb-4" v-for="vehicle in vehicles" :key="vehicle.id">
          <div class="fleet-card">
            <div class="fleet-image">
              <img :src="vehicle.image" :alt="vehicle.name" />
            </div>
            <div class="fleet-content">
              <h4>{{ vehicle.name }}</h4>
              <p>{{ vehicle.description }}</p>
              <div class="fleet-features">
                <span class="feature">{{ vehicle.passengers }} Passengers</span>
                <span class="feature">{{ vehicle.luggage }} Luggage</span>
              </div>
              <NuxtLink :to="vehicle.link" class="btn btn-primary">Book Now</NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const vehicles = ref([
  {
    id: 1,
    name: 'Business Class',
    description: 'Professional sedan for business travel',
    image: '/imgs/page/homepage1/fleet1.jpg',
    passengers: 4,
    luggage: 3,
    link: '/fleet-single'
  },
  {
    id: 2,
    name: 'First Class',
    description: 'Luxury vehicle for premium experience',
    image: '/imgs/page/homepage1/fleet2.jpg',
    passengers: 6,
    luggage: 4,
    link: '/fleet-single'
  },
  {
    id: 3,
    name: 'XL Class',
    description: 'Spacious vehicle for group travel',
    image: '/imgs/page/homepage1/fleet3.jpg',
    passengers: 8,
    luggage: 6,
    link: '/fleet-single'
  }
])
</script>

<style scoped>
.our-fleet-section {
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

.fleet-card {
  background: #fff;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;
}

.fleet-card:hover {
  transform: translateY(-5px);
}

.fleet-image {
  height: 200px;
  overflow: hidden;
}

.fleet-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.fleet-content {
  padding: 20px;
}

.fleet-content h4 {
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 10px;
  color: #333;
}

.fleet-content p {
  color: #666;
  margin-bottom: 15px;
}

.fleet-features {
  display: flex;
  gap: 15px;
  margin-bottom: 20px;
}

.feature {
  background: #f8f9fa;
  padding: 5px 10px;
  border-radius: 15px;
  font-size: 0.9rem;
  color: #555;
}

.btn-primary {
  background: #007bff;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  text-decoration: none;
  display: inline-block;
  transition: background 0.3s ease;
}

.btn-primary:hover {
  background: #0056b3;
}
</style> 