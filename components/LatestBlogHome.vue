<template>
    <div>
        <section class="section pt-60 pb-0 bg-white latest-new-white">
            <div class="container-sub">
                <div class="row align-items-center">
            <div class="col-lg-6 col-7">
              <h2 class="heading-44-medium color-text wow fadeInUp">Latest From News</h2>
            </div>
            <div class="col-lg-6 col-5 text-end"><a class="text-16-medium color-text hover-up d-inline-block wow fadeInUp" href="#">More News
                <svg class="icon-16" fill="none" stroke="currentColor" stroke-width="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"></path>
                </svg></a></div>
          </div>
                <div class="row mt-50">
                    <div class="col-lg-4" v-for="blog in blogs" :key="blog.id">
                        <CardNews 
                            :img="blog.img"
                            :title="blog.title" 
                            :tag="blog.category" 
                            :date="blog.day" 
                            :monthYear="blog.month"
                            :link="blog.link" />
                    </div>
                </div>

                <div class="text-center mt-40 mb-120 wow fadeInDown">
                    <Pagination />
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
import CardNews from '@/components/CardNews.vue';
import Pagination from '~/elements/Pagination.vue';

// Dynamic blog data
const blogs = ref([
    {
        id: 1,
        img: "/imgs/page/homepage1/news1.png",
        title: "3 hidden-gem destinations for your wish list",
        category: "Travel",
        day: "14.",
        month: "Jun, 2022",
        link: "/blogs/hidden-gem-destinations"
    },
    {
        id: 2,
        img: "/imgs/page/homepage1/news2.png",
        title: "Explore the big things happening in Dallas",
        category: "Culture",
        day: "18.",
        month: "Jun, 2022",
        link: "/blogs/dallas-exploration"
    },
    {
        id: 3,
        img: "/imgs/page/homepage1/news3.png",
        title: "LA's worst traffic areas and how to avoid them",
        category: "News",
        day: "20.",
        month: "Jun, 2022",
        link: "/blogs/la-traffic-guide"
    },
  
  
]);

// Define layout props for SEO and breadcrumb
definePageMeta({
  layout: 'default',
  layoutProps: {
    breadcrumbTitle: 'Blog & News',
    breadcrumbItems: [
      { text: 'Blog', link: null }
    ],
    seoTitle: 'Blog & News - UnionLimo',
    seoDescription: 'Stay updated with the latest news, travel tips, and insights about luxury transportation, chauffeur services, and premium travel experiences.',
    seoKeywords: 'travel blog, luxury transportation news, chauffeur service tips, travel insights, transportation blog'
  }
})
</script>