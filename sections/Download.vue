<template>
  <section class="section download-section">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-6">
          <div class="download-content">
            <h2 class="section-title">Download Our Mobile App</h2>
            <p class="section-description">
              Get the Luxride app for instant booking, real-time tracking, and exclusive mobile-only offers. 
              Available for both iOS and Android devices.
            </p>
            <div class="app-features">
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
            <div class="download-buttons">
              <a href="#" class="btn btn-app">
                <img src="/imgs/template/icons/apple-icon.svg" alt="App Store" />
                <div class="btn-text">
                  <span class="small">Download on the</span>
                  <span class="large">App Store</span>
                </div>
              </a>
              <a href="#" class="btn btn-app">
                <img src="/imgs/template/icons/google-icon.svg" alt="Google Play" />
                <div class="btn-text">
                  <span class="small">Get it on</span>
                  <span class="large">Google Play</span>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="download-image">
            <img src="/imgs/page/homepage1/app-mockup.png" alt="Mobile App" />
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
    title: 'Instant Booking',
    description: 'Book your ride in seconds with our streamlined app',
    icon: '/imgs/template/icons/booking.svg'
  },
  {
    id: 2,
    title: 'Real-time Tracking',
    description: 'Track your vehicle in real-time with GPS technology',
    icon: '/imgs/template/icons/tracking.svg'
  },
  {
    id: 3,
    title: 'Exclusive Offers',
    description: 'Get app-only discounts and special promotions',
    icon: '/imgs/template/icons/offers.svg'
  }
])
</script>

<style scoped>
.download-section {
  padding: 80px 0;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: white;
}

.section-description {
  font-size: 1.1rem;
  margin-bottom: 2rem;
  line-height: 1.6;
  opacity: 0.9;
}

.app-features {
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
  background: rgba(255,255,255,0.2);
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
  color: white;
}

.feature-text p {
  opacity: 0.8;
  margin: 0;
  font-size: 0.9rem;
}

.download-buttons {
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
}

.btn-app {
  display: flex;
  align-items: center;
  background: rgba(255,255,255,0.1);
  border: 2px solid rgba(255,255,255,0.3);
  color: white;
  padding: 12px 20px;
  border-radius: 8px;
  text-decoration: none;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
}

.btn-app:hover {
  background: rgba(255,255,255,0.2);
  border-color: rgba(255,255,255,0.5);
  color: white;
  transform: translateY(-2px);
}

.btn-app img {
  width: 30px;
  height: 30px;
  margin-right: 10px;
}

.btn-text {
  display: flex;
  flex-direction: column;
}

.btn-text .small {
  font-size: 0.7rem;
  opacity: 0.8;
}

.btn-text .large {
  font-size: 1rem;
  font-weight: 600;
}

.download-image {
  text-align: center;
}

.download-image img {
  max-width: 100%;
  height: auto;
  border-radius: 20px;
  box-shadow: 0 20px 40px rgba(0,0,0,0.3);
}

@media (max-width: 768px) {
  .download-buttons {
    justify-content: center;
  }
  
  .download-image {
    margin-top: 40px;
  }
}
</style> 