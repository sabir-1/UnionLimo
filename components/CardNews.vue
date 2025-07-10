<template>
  <div class="cardNews wow fadeInUp">
    <a :href="link">
      <div class="cardImage">
        <div class="datePost">
          <div class="heading-52-medium color-white">{{ date }}</div>
          <p class="text-14 color-white">{{ monthYear }}</p>
        </div>
        <img :src="img" alt="luxride" />
      </div>
    </a>
    <div class="cardInfo">
      <div class="tags mb-10">
        <a href="#">{{ tag }}</a>
      </div>
      <a class="color-white" :href="link">
        <h3 class="text-20-medium color-white mb-20">{{ title }}</h3>
      </a>
      <slot></slot>
      <a class="cardLink btn btn-arrow-up" :href="link">
        <svg class="icon-16" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"></path>
        </svg>
      </a>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  img: {
    type: String,
    default: '/imgs/page/homepage1/news1.png'
  },
  title: {
    type: String,
    default: '3 hidden-gem destinations for your wish list'
  },
  tag: {
    type: String,
    default: 'Travel'
  },
  date: {
    type: String,
    default: '14.'
  },
  monthYear: {
    type: String,
    default: 'Jun, 2023'
  },
  link: {
    type: String,
    default: 'blog-single.html'
  }
});
</script>

<!-- Styling is handled globally by your existing CSS --> 