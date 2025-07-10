<template>
  <section class="section pt-60 pb-60 bg-primary">
    <div class="container-sub">
      <h1 class="heading-44-medium color-white mb-5 wow fadeInDown">
        {{ title }}
      </h1>
      <div class="box-breadcrumb wow fadeInUp">
        <ul>
          <li>
            <NuxtLink to="/">Home</NuxtLink>
          </li>
          <li v-for="(item, index) in items" :key="index">
            <NuxtLink v-if="item.link" :to="item.link">{{ item.text }}</NuxtLink>
            <span v-else class="active">{{ item.text }}</span>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup>
// Props for dynamic breadcrumb
const props = defineProps({
  title: {
    type: String,
    default: 'Page'
  },
  items: {
    type: Array,
    default: () => []
  }
})
</script>

<style scoped>
/* Breadcrumb specific styles */
.box-breadcrumb ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}

.box-breadcrumb ul li {
  margin-right: 10px;
  color: rgba(255, 255, 255, 0.8);
}

.box-breadcrumb ul li:not(:last-child)::after {
  content: '/';
  margin-left: 10px;
  color: rgba(255, 255, 255, 0.6);
}

.box-breadcrumb ul li a {
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  transition: color 0.3s ease;
}

.box-breadcrumb ul li a:hover {
  color: white;
}

.box-breadcrumb ul li .active {
  color: white;
  font-weight: 500;
}
</style>
