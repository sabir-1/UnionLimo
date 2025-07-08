<template>
  <section class="section latest-news-section">
    <div class="container">
      <div class="row">
        <div class="col-12 text-center">
          <h2 class="section-title">Latest News & Updates</h2>
          <p class="section-subtitle">Stay updated with our latest news and announcements</p>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-4 col-md-6 mb-4" v-for="article in articles" :key="article.id">
          <div class="news-card">
            <div class="news-image">
              <img :src="article.image" :alt="article.title" />
              <div class="news-date">
                <span class="day">{{ article.day }}</span>
                <span class="month">{{ article.month }}</span>
              </div>
            </div>
            <div class="news-content">
              <div class="news-meta">
                <span class="category">{{ article.category }}</span>
                <span class="author">By {{ article.author }}</span>
              </div>
              <h4>{{ article.title }}</h4>
              <p>{{ article.excerpt }}</p>
              <NuxtLink :to="article.link" class="btn btn-outline">Read More</NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const articles = ref([
  {
    id: 1,
    title: 'New Luxury Fleet Addition',
    excerpt: 'We are excited to announce the addition of new luxury vehicles to our fleet...',
    image: '/imgs/page/homepage1/news1.jpg',
    category: 'Company News',
    author: 'Admin',
    day: '15',
    month: 'Dec',
    link: '/blog-single'
  },
  {
    id: 2,
    title: 'Holiday Season Special Offers',
    excerpt: 'Book your holiday travel with our special seasonal packages and discounts...',
    image: '/imgs/page/homepage1/news2.jpg',
    category: 'Offers',
    author: 'Marketing',
    day: '12',
    month: 'Dec',
    link: '/blog-single'
  },
  {
    id: 3,
    title: 'Safety Protocols Update',
    excerpt: 'Learn about our enhanced safety measures and protocols for passenger protection...',
    image: '/imgs/page/homepage1/news3.jpg',
    category: 'Safety',
    author: 'Operations',
    day: '10',
    month: 'Dec',
    link: '/blog-single'
  }
])
</script>

<style scoped>
.latest-news-section {
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

.news-card {
  background: #fff;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;
}

.news-card:hover {
  transform: translateY(-5px);
}

.news-image {
  position: relative;
  height: 200px;
  overflow: hidden;
}

.news-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.news-date {
  position: absolute;
  top: 15px;
  left: 15px;
  background: #007bff;
  color: white;
  padding: 10px;
  border-radius: 5px;
  text-align: center;
}

.news-date .day {
  display: block;
  font-size: 1.2rem;
  font-weight: bold;
}

.news-date .month {
  display: block;
  font-size: 0.8rem;
  text-transform: uppercase;
}

.news-content {
  padding: 20px;
}

.news-meta {
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
  font-size: 0.8rem;
}

.category {
  color: #007bff;
  font-weight: 600;
}

.author {
  color: #666;
}

.news-content h4 {
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 10px;
  color: #333;
  line-height: 1.4;
}

.news-content p {
  color: #666;
  margin-bottom: 15px;
  line-height: 1.6;
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