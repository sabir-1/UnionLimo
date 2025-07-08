<template>
  <section class="section testimonials-section">
    <div class="container">
      <div class="row">
        <div class="col-12 text-center">
          <h2 class="section-title">What Our Clients Say</h2>
          <p class="section-subtitle">Read testimonials from satisfied customers</p>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-4 col-md-6 mb-4" v-for="testimonial in testimonials" :key="testimonial.id">
          <div class="testimonial-card">
            <div class="testimonial-content">
              <p>"{{ testimonial.quote }}"</p>
            </div>
            <div class="testimonial-author">
              <div class="author-image">
                <img :src="testimonial.avatar" :alt="testimonial.name" />
              </div>
              <div class="author-info">
                <h5>{{ testimonial.name }}</h5>
                <span>{{ testimonial.position }}</span>
                <div class="rating">
                  <span v-for="star in 5" :key="star" class="star">★</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const testimonials = ref([
  {
    id: 1,
    quote: "Excellent service! The chauffeur was professional and the vehicle was immaculate. Highly recommended for airport transfers.",
    name: "Sarah Johnson",
    position: "Business Executive",
    avatar: "/imgs/page/homepage1/avatar1.jpg"
  },
  {
    id: 2,
    quote: "Used their service for our wedding and it was perfect. The team went above and beyond to make our day special.",
    name: "Michael Chen",
    position: "Wedding Client",
    avatar: "/imgs/page/homepage1/avatar2.jpg"
  },
  {
    id: 3,
    quote: "Reliable, punctual, and luxurious. This is now our go-to service for all corporate travel needs.",
    name: "Emily Rodriguez",
    position: "Corporate Manager",
    avatar: "/imgs/page/homepage1/avatar3.jpg"
  }
])
</script>

<style scoped>
.testimonials-section {
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

.testimonial-card {
  background: #fff;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;
  height: 100%;
}

.testimonial-card:hover {
  transform: translateY(-5px);
}

.testimonial-content {
  margin-bottom: 20px;
}

.testimonial-content p {
  font-style: italic;
  color: #555;
  line-height: 1.6;
  font-size: 1rem;
}

.testimonial-author {
  display: flex;
  align-items: center;
}

.author-image {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 15px;
}

.author-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.author-info h5 {
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 5px;
  color: #333;
}

.author-info span {
  color: #666;
  font-size: 0.9rem;
  display: block;
  margin-bottom: 5px;
}

.rating {
  display: flex;
  gap: 2px;
}

.star {
  color: #ffc107;
  font-size: 0.9rem;
}
</style> 