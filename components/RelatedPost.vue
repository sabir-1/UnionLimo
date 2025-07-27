<template>
  <section class="section pt-80 bg-white latest-new-white mb-20">
    <div class="container-sub">
      <h2 class="heading-44-medium color-text mb-60 wow fadeInDown">Related Posts</h2>
      <div class="row">
        <div class="col-lg-4" v-for="(post, idx) in posts" :key="idx">
          <CardNews
            :img="post.img"
            :title="post.title"
            :tag="post.tag"
            :date="post.date"
            :monthYear="post.monthYear"
            :link="post.link"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import CardNews from './CardNews.vue'

const posts = [
  {
    img: '/imgs/page/homepage1/news1.png',
    title: '3 hidden-gem destinations for your wish list',
    tag: 'Travel',
    date: '14.',
    monthYear: 'Jun, 2022',
    link: '#'
  },
  {
    img: '/imgs/page/homepage1/news2.png',
    title: 'Explore the big things happening in Dallas',
    tag: 'Culture',
    date: '18.',
    monthYear: 'Jun, 2022',
    link: '#'
  },
  {
    img: '/imgs/page/homepage1/news3.png',
    title: 'LA’s worst traffic areas and how to avoid them',
    tag: 'News',
    date: '20.',
    monthYear: 'Jun, 2022',
    link: '#'
  }
]
</script>
