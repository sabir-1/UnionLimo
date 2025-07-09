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

      <div class="row align-items-center mt-90 mb-120" v-if="serviceData.pricing">
        <div class="col-lg-6 mb-30">
          <div class="box-info-left wow fadeInDown">
            <h3 class="heading-44-medium color-text mb-30">Pricing Information</h3>
            <div class="pricing-info">
              <div v-for="(price, key) in serviceData.pricing" :key="key" class="price-item mb-15">
                <span class="text-16 color-text font-weight-bold">{{ key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase()) }}:</span>
                <span class="text-16 color-text ml-10">{{ price }}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6 mb-30 wow fadeInUp">
          <img :src="serviceData.bannerImage || serviceData.image" :alt="serviceData.title" />
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

<style scoped>
/* Add any component-specific styles here */
.pricing-info {
  background: #f8f9fa;
  padding: 20px;
  border-radius: 8px;
}

.price-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0;
  border-bottom: 1px solid #e9ecef;
}

.price-item:last-child {
  border-bottom: none;
}
</style> 