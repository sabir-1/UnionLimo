<template>
  <section class="section our-service-section">
    <div class="container">
      <div class="row">
        <div class="col-12 text-center">
          <h2 class="section-title">Our Services</h2>
          <p class="section-subtitle">Comprehensive transportation solutions for every need</p>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-4 col-md-6 mb-4" v-for="service in services" :key="service.id">
          <div class="service-card">
            <div class="service-icon">
              <img :src="service.icon" :alt="service.title" />
            </div>
            <h4>{{ service.title }}</h4>
            <p>{{ service.description }}</p>
            <ul class="service-features">
              <li v-for="feature in service.features" :key="feature">{{ feature }}</li>
            </ul>
            <NuxtLink :to="service.link" class="btn btn-primary">Book Service</NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const services = ref([
  {
    id: 1,
    title: 'Airport Transfer',
    description: 'Reliable and comfortable airport transportation',
    icon: '/imgs/template/icons/plane.svg',
    features: ['Meet & Greet', 'Flight Monitoring', 'Luggage Assistance'],
    link: '/service-single'
  },
  {
    id: 2,
    title: 'Corporate Travel',
    description: 'Professional business transportation services',
    icon: '/imgs/template/icons/business.svg',
    features: ['Executive Vehicles', 'Professional Chauffeurs', 'Flexible Scheduling'],
    link: '/service-single'
  },
  {
    id: 3,
    title: 'Wedding & Events',
    description: 'Make your special occasions memorable',
    icon: '/imgs/template/icons/celebration.svg',
    features: ['Luxury Fleet', 'Professional Service', 'Custom Packages'],
    link: '/service-single'
  }
])
</script>

<style scoped>
.our-service-section {
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

.service-card {
  text-align: center;
  padding: 30px 20px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;
  height: 100%;
}

.service-card:hover {
  transform: translateY(-5px);
}

.service-icon {
  width: 80px;
  height: 80px;
  margin: 0 auto 20px;
  background: #007bff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.service-icon img {
  width: 40px;
  height: 40px;
  filter: brightness(0) invert(1);
}

.service-card h4 {
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 15px;
  color: #333;
}

.service-card p {
  color: #666;
  margin-bottom: 20px;
  line-height: 1.6;
}

.service-features {
  list-style: none;
  padding: 0;
  margin-bottom: 20px;
}

.service-features li {
  color: #555;
  margin-bottom: 8px;
  font-size: 0.9rem;
}

.service-features li:before {
  content: "✓";
  color: #007bff;
  font-weight: bold;
  margin-right: 8px;
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