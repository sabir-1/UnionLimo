<template>
  <section class="section">
    <div class="container-sub">
      <div class="mt-120">
        <!-- <h2 class="heading-44-medium mb-30 color-text title-fleet wow fadeInDown">{{ serviceData.title }}</h2> -->
        <div class="content-single wow fadeInUp">
          <div class="description-wrapper">
            <div class="collapsible" :class="{ collapsed: !showFullDescription }">
              <div v-html="serviceData.longDescription"></div>
            </div>
            <div class="mt-20" v-if="shouldShowToggle">
              <button type="button" class="btn btn-black cust-style-see" @click="showFullDescription = !showFullDescription">
                {{ showFullDescription ? 'See less' : 'See more' }}
              </button>
            </div>
          </div>
          
          <!-- <ul class="list-ticks list-ticks-small" v-if="serviceData.features && serviceData.features.length > 0">
            <li class="text-16 mb-20" v-for="feature in serviceData.features" :key="feature">{{ feature }}</li>
          </ul> -->
        </div>
      </div>
      </div>
      <!-- <div class="mt-100">

        <TopCities/>
      </div> -->
     
      <div class="container-sub">
      <div v-if="serviceData.details && serviceData.details.length > 0">
        <div class="row align-items-center mt-90" v-for="(detail, index) in serviceData.details" :key="index">
          <div class="col-lg-6 mb-30 wow fadeInDown" v-if="index % 2 === 0">
            <img :src="serviceData.image" :alt="serviceData.title" />
          </div>
          <div class="col-lg-6 mb-30">
            <div :class="index % 2 === 0 ? 'box-info-right' : 'box-info-left'" class="wow fadeInUp">
              <h3 class="heading-44-medium color-text mb-30">{{ detail.title }}</h3>
              <p class="text-16 color-text">{{ detail.content }}</p>
            </div>
          </div>
          <div class="col-lg-6 mb-30 wow fadeInUp" v-if="index % 2 === 1">
            <img :src="serviceData.image" :alt="serviceData.title" />
          </div>
        </div>
      </div>

       
    </div>
  </section>
</template>

<script setup>
import TopCities from '~/sections/homepage5/TopCities.vue'
import { ref, computed } from 'vue'
const props = defineProps({
  serviceData: {
    type: Object,
    required: true,
    default: () => ({
      title: 'Service',
      longDescription: 'Service description',
      features: [],
      details: [],
      pricing: {},
      image: '/imgs/page/homepage1/service1.png',
      bannerImage: '/imgs/page/services/default-banner.png'
    })
  }
})

const showFullDescription = ref(false)
const shouldShowToggle = computed(() => {
  if (!props.serviceData || !props.serviceData.longDescription) return false
  const textOnly = props.serviceData.longDescription.replace(/<[^>]*>/g, '').trim()
  return textOnly.length > 300
})
</script>

<style scoped>

.cust-style-see{
  background-color: #000;
  color: #fff;
  border: 1px solid #000;
  padding: 10px 20px;
  border-radius: 5px;
  margin-bottom: 30px;
}
.collapsible {
  overflow: hidden;
  transition: max-height 0.3s ease;
  position: relative;
}
.collapsible.collapsed {
  /* max-height: 220px; */
  max-height: 800px;
}
.collapsible.collapsed::after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 60px;
  background: linear-gradient(to bottom, rgba(255,255,255,0), rgba(255,255,255,1));
  pointer-events: none;
}
</style>
 