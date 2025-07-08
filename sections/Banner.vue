<template>
  <section class="section banner-home1">
    <div class="box-swiper">
      <div class="swiper-container swiper-banner-1 pb-0">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <div class="box-cover-image" style="background-image:url(/imgs/page/homepage1/banner.png)">
              <!-- <img src='/imgs/page/homepage1/banner.png' alt='luxride' /> -->
            </div>
            <div class="box-banner-info">
              <p class="text-16 color-white wow fadeInDown">Where Would You Like To Go?</p>
              <h2 class="heading-52-medium color-white wow fadeInRight">
                Your Personal
                <br class="d-none d-lg-block" />
                Chauffeur Services
              </h2>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="box-cover-image" style="background-image:url(/imgs/page/homepage1/banner2.png)"></div>
            <div class="box-banner-info">
              <p class="text-16 color-white wow fadeInDown">Where Would You Like To Go?</p>
              <h2 class="heading-52-medium color-white wow fadeInRight">
                Your Personal
                <br class="d-none d-lg-block" />
                Chauffeur Services
              </h2>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="box-cover-image" style="background-image:url(/imgs/page/homepage1/banner3.png)"></div>
            <div class="box-banner-info">
              <p class="text-16 color-white wow fadeInDown">Where Would You Like To Go?</p>
              <h2 class="heading-52-medium color-white wow fadeInRight">
                Your Personal
                <br class="d-none d-lg-block" />
                Chauffeur Services
              </h2>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="box-cover-image" style="background-image:url(/imgs/page/homepage1/banner4.png)"></div>
            <div class="box-banner-info">
              <p class="text-16 color-white wow fadeInDown">Where Would You Like To Go?</p>
              <h2 class="heading-52-medium color-white wow fadeInRight">
                Your Personal
                <br class="d-none d-lg-block" />
                Chauffeur Services
              </h2>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="box-cover-image" style="background-image:url(/imgs/page/homepage1/banner5.png)"></div>
            <div class="box-banner-info">
              <p class="text-16 color-white wow fadeInDown">Where Would You Like To Go?</p>
              <h2 class="heading-52-medium color-white wow fadeInRight">
                Your Personal
                <br class="d-none d-lg-block" />
                Chauffeur Services
              </h2>
            </div>
          </div>
        </div>
        <div class="box-pagination-button">
          <div class="swiper-button-prev swiper-button-prev-banner"></div>
          <div class="swiper-button-next swiper-button-next-banner"></div>
          <div class="swiper-pagination swiper-pagination-banner"></div>
        </div>
      </div>
    </div>
    <div class="box-search-ride wow fadeInRight">
      <div class="search-item search-date">
        <div class="search-icon">
          <span class="item-icon icon-date"></span>
        </div>
        <div class="search-inputs">
          <label class="text-14 color-grey">Date</label>
          <input class="search-input datepicker" type="text" placeholder="" value="Thu, Oct 06, 2022" />
        </div>
      </div>
      <div class="search-item search-time">
        <div class="search-icon">
          <span class="item-icon icon-time"></span>
        </div>
        <div class="search-inputs">
          <label class="text-14 color-grey">Time</label>
          <input class="search-input timepicker" type="text" placeholder="" value="6 PM : 15" />
        </div>
      </div>
      <div class="search-item search-from">
        <div class="search-icon">
          <span class="item-icon icon-from"></span>
        </div>
        <div class="search-inputs">
          <label class="text-14 color-grey">From</label>
          <input class="search-input dropdown-location" type="text" placeholder="" value="London City Airport (LCY)" readonly="readonly" />
          <Locations />
        </div>
      </div>
      <div class="search-item search-to">
        <div class="search-icon">
          <span class="item-icon icon-to"></span>
        </div>
        <div class="search-inputs">
          <label class="text-14 color-grey">To</label>
          <input class="search-input dropdown-location" type="text" placeholder="" value="London City Airport (LCY)" readonly="readonly" />
          <Locations />
        </div>
      </div>
      <div class="search-item search-button">
        <button class="btn btn-search" type="submit">
          <img src="/imgs/template/icons/search.svg" alt="luxride" />
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import Locations from '~/elements/Locations.vue'
</script>

<style scoped>
/* Banner specific styles */
</style> 