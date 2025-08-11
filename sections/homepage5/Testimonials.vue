<template>
  <section class="section pt-180 box-testimonials box-testimonials-home5  ">
    <div class="container-sub p-0">
      <div class="row align-items-center mar-top-min">
            <div class="col-lg-6 col-7">
              <h2 class="heading-44-medium color-text wow fadeInUp">Testimonials</h2>
            </div>
            <div class="col-lg-6 col-5 text-end"><a class="text-16-medium color-text hover-up d-inline-block wow fadeInUp" href="#">See All
                <svg class="icon-16" fill="none" stroke="currentColor" stroke-width="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"></path>
                </svg></a></div>
          </div>
      <div class=" ">
        <div class="w-full  lg:px-4 ">
          <div class="embedsocial-hashtag" data-ref="c2ceb93d3508e7e801623e8762342c8ace1f46d3"></div>
        </div>
        <!-- <div class="box-swiper">
          <div class="swiper-container swiper-group-testimonials pb-50">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <div class="cardQuote cardTestimonialsStyle2 wow fadeInUp">
                  <div class="content-quote color-text heading-32-medium">
                    We just had a bad experience with Redlane from Civitavecchia to our hotel in Rome so we gave Luxride a try for our ride from.
                  </div>
                  <div class="box-quote">
                    <div class="box-author">
                      <div class="author-info">
                        <div class="author-name text-18-medium color-text">Jonathan Miller</div>
                        <p class="text-14 color-text desc-author">Web Developer</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="cardQuote cardTestimonialsStyle2 wow fadeInUp">
                  <div class="content-quote color-text heading-32-medium">
                    We just had a bad experience with Redlane from Civitavecchia to our hotel in Rome so we gave Luxride a try for our ride from.
                  </div>
                  <div class="box-quote">
                    <div class="box-author">
                      <div class="author-info">
                        <div class="author-name text-18-medium color-text">Jonathan Miller</div>
                        <p class="text-14 color-text desc-author">Web Developer</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="cardQuote cardTestimonialsStyle2 wow fadeInUp">
                  <div class="content-quote color-text heading-32-medium">
                    We just had a bad experience with Redlane from Civitavecchia to our hotel in Rome so we gave Luxride a try for our ride from.
                  </div>
                  <div class="box-quote">
                    <div class="box-author">
                      <div class="author-info">
                        <div class="author-name text-18-medium color-text">Jonathan Miller</div>
                        <p class="text-14 color-text desc-author">Web Developer</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="cardQuote cardTestimonialsStyle2 wow fadeInUp">
                  <div class="content-quote color-text heading-32-medium">
                    We just had a bad experience with Redlane from Civitavecchia to our hotel in Rome so we gave Luxride a try for our ride from.
                  </div>
                  <div class="box-quote">
                    <div class="box-author">
                      <div class="author-info">
                        <div class="author-name text-18-medium color-text">Jonathan Miller</div>
                        <p class="text-14 color-text desc-author">Web Developer</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="box-pagination-testimonials box-pagination-testimonials-2 mt-30">
              <span class="firstNumber"></span>
              <span class="lastNumber"></span>
              <div class="swiper-pagination swiper-pagination-testimonials"></div>
            </div>
          </div>
        </div> -->
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  const scriptElementId = 'EmbedSocialHashtagScript'
  if (!document.getElementById(scriptElementId)) {
    const scriptElement = document.createElement('script')
    scriptElement.id = scriptElementId
    scriptElement.src = 'https://embedsocial.com/cdn/ht.js'
    document.head.appendChild(scriptElement)
  }
})
</script>

<style scoped>
/* Testimonials specific styles */
</style> 