<template>
  <section class="section make-your-trip-section">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-6">
          <div class="trip-content">
            <h2 class="section-title">Make Your Trip Memorable</h2>
            <p class="section-description">
              Experience luxury transportation with our premium chauffeur services. 
              We provide professional, reliable, and comfortable rides for all your travel needs.
            </p>
            <div class="trip-features">
              <div class="feature-item" v-for="feature in features" :key="feature.id">
                <div class="feature-icon">
                  <img :src="feature.icon" :alt="feature.title" />
                </div>
                <div class="feature-text">
                  <h5>{{ feature.title }}</h5>
                  <p>{{ feature.description }}</p>
                </div>
              </div>
            </div>
            <NuxtLink to="/fleet-list" class="btn btn-primary">Explore Our Fleet</NuxtLink>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="trip-image">
            <img src="/imgs/page/homepage1/trip-image.jpg" alt="Luxury Transportation" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const features = ref([
  {
    id: 1,
    title: 'Professional Chauffeurs',
    description: 'Experienced and licensed drivers',
    icon: '/imgs/template/icons/driver.svg'
  },
  {
    id: 2,
    title: 'Luxury Vehicles',
    description: 'Premium fleet of modern vehicles',
    icon: '/imgs/template/icons/car.svg'
  },
  {
    id: 3,
    title: '24/7 Service',
    description: 'Available round the clock',
    icon: '/imgs/template/icons/clock.svg'
  }
])
</script>

<style scoped>
.make-your-trip-section {
  padding: 80px 0;
  background: #fff;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: #333;
}

.section-description {
  font-size: 1.1rem;
  color: #666;
  margin-bottom: 2rem;
  line-height: 1.6;
}

.trip-features {
  margin-bottom: 2rem;
}

.feature-item {
  display: flex;
  align-items: flex-start;
  margin-bottom: 1.5rem;
}

.feature-icon {
  width: 50px;
  height: 50px;
  background: #007bff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 15px;
  flex-shrink: 0;
}

.feature-icon img {
  width: 25px;
  height: 25px;
  filter: brightness(0) invert(1);
}

.feature-text h5 {
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 5px;
  color: #333;
}

.feature-text p {
  color: #666;
  margin: 0;
}

.trip-image {
  text-align: center;
}

.trip-image img {
  max-width: 100%;
  height: auto;
  border-radius: 10px;
}

.btn-primary {
  background: #007bff;
  color: white;
  padding: 12px 30px;
  border-radius: 5px;
  text-decoration: none;
  display: inline-block;
  font-weight: 600;
  transition: background 0.3s ease;
}

.btn-primary:hover {
  background: #0056b3;
}
</style> 