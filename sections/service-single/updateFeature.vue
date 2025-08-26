<template>
  <section class="section mt-90" id="update-our-services">
    <div class="container-sub p-0">
      <div class="row cardIconTitleDescLeft" v-if="whyChooseItems.length">
        <div class="col-lg-12">
          <h2 class="heading-44-medium color-text mb-40">Why Choose Us?</h2>
        </div>
        <div
          class="col-lg-4 col-md-6 col-sm-6 mb-30"
          v-for="(item, index) in whyChooseItems"
          :key="index"
        >
          <CardBlogGridUp 
            :img="item.image" 
            :title="item.title" 
            :description="item.description"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import CardBlogGridUp from '@/components/CardBlogGridUp.vue'

const props = defineProps({
  serviceData: {
    type: Object,
    default: null
  }
})

const whyChooseItems = computed(() => Array.isArray(props?.serviceData?.why_choose) ? props.serviceData.why_choose : [])
</script>

<style scoped>
/* Add any component-specific styles here */
</style> 