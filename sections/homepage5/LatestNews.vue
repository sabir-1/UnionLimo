<template>
  <section class="section bg-2 latest-new-white latest-new-background">
    <div class="container-sub">
      <div class="row align-items-center">
        <div class="col-lg-6 col-7">
          <h2 class="heading-44-medium color-text wow fadeInUp">Latest From News</h2>
        </div>
        <div class="col-lg-6 col-5 text-end">
          <a href="#" class="text-16-medium color-text hover-up d-inline-block wow fadeInUp">
            More News
            <svg class="icon-16 color-text" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"></path>
            </svg>
          </a>
        </div>
      </div>
      <div class="row mt-50">
        <div class="col-lg-4">
          <CardNews 
            src="/imgs/page/homepage1/news1.png" 
            title="3 hidden-gem destinations for your wish list" 
            category="Travel" 
            day="14." 
            month="Jun, 2022" 
          />
        </div>
        <div class="col-lg-4">
          <CardNews 
            src="/imgs/page/homepage1/news2.png" 
            title="Explore the big things happening in Dallas" 
            category="Culture" 
            day="18." 
            month="Jun, 2022" 
          />
        </div>
        <div class="col-lg-4">
          <CardNews 
            src="/imgs/page/homepage1/news3.png" 
            title="LA's worst traffic areas and how to avoid them" 
            category="News" 
            day="20." 
            month="Jun, 2022" 
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { CardNews } from '~/components';
// LatestNews component logic
</script>

<style scoped>
/* LatestNews specific styles */
</style> 