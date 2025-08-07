<template>
  <div class="cardNews wow fadeInUp">
    <NuxtLink :to="`/blogs/${link}`">
      <div class="cardImage">
        <div class="datePost">
          <div class="heading-52-medium color-white">{{ date }}</div>
          <p class="text-14 color-white">{{ monthYear }}</p>
        </div>
        <img :src="img" alt="luxride" />
      </div>
    </NuxtLink>
    <div class="cardInfo">
      <div class="tags mb-10 flex flex-wrap gap-2">
        <NuxtLink 
          v-for="(category, index) in categories" 
          :key="index" 
          :to="`/blogs/${category.cate_slug}/${link}`" 
          class="category-tag"
        >
          {{ category.cate_name }}
        </NuxtLink>
      </div>
      <NuxtLink class="color-white" :to="`/blogs/${link}`">
        <h3 class="text-20-medium color-white mb-20">{{ title }}</h3>
      </NuxtLink>
      <slot></slot>
      <NuxtLink class="cardLink btn btn-arrow-up" :to="`/blogs/${link}`">
        <svg class="icon-16" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"></path>
        </svg>
      </NuxtLink>
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
  categories: {
    type: Array,
    default: () => [{ cate_name: 'Travel', cate_slug: 'travel' }]
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

<style scoped>
.category-tag {
  display: inline-block;
  margin-right: 2px;
    margin-bottom: 4px;
    padding: 4px 8px;
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 4px;
    font-size: 15px;
  color: #fff;
  text-decoration: none;
  transition: background-color 0.3s ease;
}

.category-tag:hover {
  background-color: rgba(255, 255, 255, 0.2);
  color: #fff;
  text-decoration: none;
}

.category-tag:last-child {
  margin-right: 0;
}
</style> 