<template>
  <section class="section showcase-section">
    <div class="container">
      <div class="row">
        <div class="col-12 text-center">
          <h2 class="section-title">Our Showcase</h2>
          <p class="section-subtitle">Discover our premium services and experiences</p>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-4 col-md-6 mb-4" v-for="item in showcaseItems" :key="item.id">
          <div class="showcase-card">
            <div class="showcase-image">
              <img :src="item.image" :alt="item.title" />
            </div>
            <div class="showcase-content">
              <h4>{{ item.title }}</h4>
              <p>{{ item.description }}</p>
              <NuxtLink :to="item.link" class="btn btn-outline">Learn More</NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const showcaseItems = ref([
  {
    id: 1,
    title: 'Airport Transfer',
    description: 'Reliable airport pickup and drop-off services',
    image: '/imgs/page/homepage1/showcase1.jpg',
    link: '/service-single'
  },
  {
    id: 2,
    title: 'Corporate Travel',
    description: 'Professional transportation for business needs',
    image: '/imgs/page/homepage1/showcase2.jpg',
    link: '/service-single'
  },
  {
    id: 3,
    title: 'Wedding Services',
    description: 'Make your special day memorable with luxury rides',
    image: '/imgs/page/homepage1/showcase3.jpg',
    link: '/service-single'
  }
])
</script>

<style scoped>
.showcase-section {
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

.showcase-card {
  background: #fff;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;
}

.showcase-card:hover {
  transform: translateY(-5px);
}

.showcase-image {
  height: 200px;
  overflow: hidden;
}

.showcase-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.showcase-content {
  padding: 20px;
}

.showcase-content h4 {
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 10px;
  color: #333;
}

.showcase-content p {
  color: #666;
  margin-bottom: 15px;
}

.btn-outline {
  border: 2px solid #007bff;
  color: #007bff;
  padding: 8px 20px;
  border-radius: 5px;
  text-decoration: none;
  display: inline-block;
  transition: all 0.3s ease;
}

.btn-outline:hover {
  background: #007bff;
  color: white;
}
</style> 