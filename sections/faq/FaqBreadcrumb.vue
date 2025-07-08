<template>
  <section class="section pt-60 pb-60 bg-primary">
    <div class="container-sub">
      <h1 class="heading-44-medium color-white mb-5 wow fadeInDown">
        Frequently Asked Questions
      </h1>
      <div class="box-breadcrumb wow fadeInUp">
        <ul class="breadcrumb-list">
          <li class="breadcrumb-item">
            <NuxtLink to="/" class="breadcrumb-link">Home</NuxtLink>
          </li>
          <li class="breadcrumb-item">
            <NuxtLink to="/faq" class="breadcrumb-link">Frequently Asked Questions</NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup>
// No additional logic needed for breadcrumb
</script>

<style scoped>
.section {
  padding: 60px 0;
}

.bg-primary {
  background: linear-gradient(135deg, #007bff 0%, #0056b3 100%);
}

.container-sub {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
}

.heading-44-medium {
  font-size: 2.5rem;
  font-weight: 600;
  color: #fff;
  margin-bottom: 0.5rem;
}

.color-white {
  color: #fff;
}

.mb-5 {
  margin-bottom: 1.25rem;
}

.pt-60 {
  padding-top: 60px;
}

.pb-60 {
  padding-bottom: 60px;
}

.box-breadcrumb {
  margin-top: 1rem;
}

.breadcrumb-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.breadcrumb-item {
  display: flex;
  align-items: center;
}

.breadcrumb-item:not(:last-child)::after {
  content: '/';
  margin-left: 0.5rem;
  color: rgba(255, 255, 255, 0.7);
}

.breadcrumb-link {
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  transition: color 0.3s ease;
  font-size: 1rem;
}

.breadcrumb-link:hover {
  color: #fff;
  text-decoration: underline;
}

/* Animation classes */
.wow {
  animation-duration: 1s;
  animation-fill-mode: both;
}

.fadeInDown {
  animation-name: fadeInDown;
}

.fadeInUp {
  animation-name: fadeInUp;
}

@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}

/* Responsive design */
@media (max-width: 768px) {
  .heading-44-medium {
    font-size: 2rem;
  }
  
  .breadcrumb-list {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.25rem;
  }
  
  .breadcrumb-item:not(:last-child)::after {
    display: none;
  }
}
</style> 