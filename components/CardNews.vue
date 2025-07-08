<template>
  <div class="cardNews">
    <div class="cardImage">
      <a :href="link">
        <img :src="src" alt="Luxride" />
      </a>
      <div class="datePost">
        <span class="heading-52-medium">{{ day }}</span>
        <br>
        <span class="text-14">{{ month }}</span>
      </div>
    </div>
    <div class="cardInfo">
      <a :href="link">
        <h3 class="cardTitle text-20-medium color-text mb-10">{{ title }}</h3>
      </a>
      <p class="cardDesc text-14 color-text mb-10">{{ category }}</p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  src: {
    type: String,
    default: '/imgs/page/homepage1/news1.png'
  },
  title: {
    type: String,
    default: '3 hidden-gem destinations for your wish list'
  },
  category: {
    type: String,
    default: 'Travel'
  },
  day: {
    type: String,
    default: '14.'
  },
  month: {
    type: String,
    default: 'Jun, 2022'
  },
  link: {
    type: String,
    default: '/blog-single'
  }
});
</script>

<!-- Styling is handled globally by your existing CSS --> 