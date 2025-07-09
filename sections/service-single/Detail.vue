<template>
  <section class="section">
    <div class="container-sub">
      <div class="mt-120">
        <h2 class="heading-44-medium mb-30 color-text title-fleet wow fadeInDown">{{ serviceData.title }}</h2>
        <div class="content-single wow fadeInUp">
          <p>{{ serviceData.longDescription }}</p>
          
          <ul class="list-ticks list-ticks-small" v-if="serviceData.features && serviceData.features.length > 0">
            <li class="text-16 mb-20" v-for="feature in serviceData.features" :key="feature">{{ feature }}</li>
          </ul>
        </div>
      </div>
      
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
</script>
 