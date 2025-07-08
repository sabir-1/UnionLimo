<template>
  <section class="section how-it-work-section">
    <div class="container">
      <div class="row">
        <div class="col-12 text-center">
          <h2 class="section-title">How It Works</h2>
          <p class="section-subtitle">Simple steps to book your luxury ride</p>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-3 col-md-6 mb-4" v-for="step in steps" :key="step.id">
          <div class="step-card">
            <div class="step-icon">
              <img :src="step.icon" :alt="step.title" />
            </div>
            <h4>{{ step.title }}</h4>
            <p>{{ step.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const steps = ref([
  {
    id: 1,
    title: 'Choose Your Vehicle',
    description: 'Select from our premium fleet of vehicles',
    icon: '/imgs/template/icons/car.svg'
  },
  {
    id: 2,
    title: 'Book Your Ride',
    description: 'Enter your details and confirm your booking',
    icon: '/imgs/template/icons/calendar.svg'
  },
  {
    id: 3,
    title: 'Meet Your Chauffeur',
    description: 'Your professional chauffeur will arrive on time',
    icon: '/imgs/template/icons/driver.svg'
  },
  {
    id: 4,
    title: 'Enjoy Your Journey',
    description: 'Relax and enjoy your luxury transportation',
    icon: '/imgs/template/icons/star.svg'
  }
])
</script>

<style scoped>
.how-it-work-section {
  padding: 80px 0;
  background: #f8f9fa;
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

.step-card {
  text-align: center;
  padding: 30px 20px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;
}

.step-card:hover {
  transform: translateY(-5px);
}

.step-icon {
  width: 80px;
  height: 80px;
  margin: 0 auto 20px;
  background: #007bff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.step-icon img {
  width: 40px;
  height: 40px;
  filter: brightness(0) invert(1);
}

.step-card h4 {
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 15px;
  color: #333;
}

.step-card p {
  color: #666;
  line-height: 1.6;
}
</style> 