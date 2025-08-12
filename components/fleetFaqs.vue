<template>
  <section class="section" v-if="faqs && faqs.length > 0">
    <div class="container-sub">
      <div class="box-faqs">
        <div class="text-center"> 
          <h2 class="heading-44-medium color-text mb-20 wow fadeInUp">Frequently Asked Questions</h2>
        </div>
        <div class="mt-60 mb-40">
          <div class="accordion wow fadeInUp" id="accordionFAQ">
            <div 
              v-for="(faq, index) in faqs" 
              :key="index" 
              class="accordion-item"
            >
              <h5 class="accordion-header" :id="`heading${index}`">
                <button 
                  class="accordion-button text-heading-5" 
                  :class="{ collapsed: index !== 0 }"
                  type="button" 
                  data-bs-toggle="collapse" 
                  :data-bs-target="`#collapse${index}`" 
                  :aria-expanded="index === 0 ? 'true' : 'false'" 
                  :aria-controls="`collapse${index}`"
                >
                  {{ faq.question }}
                </button>
              </h5>
              <div 
                class="accordion-collapse collapse" 
                :class="{ show: index === 0 }"
                :id="`collapse${index}`" 
                :aria-labelledby="`heading${index}`" 
                data-bs-parent="#accordionFAQ"
              >
                <div class="accordion-body" v-html="faq.answer"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Define props to receive FAQs data from parent
const props = defineProps({
  faqs: {
    type: Array,
    default: () => []
  }
})

// Debug logging
console.log('fleetFaqs component received props:', props)
console.log('FAQs array:', props.faqs)
console.log('FAQs type:', typeof props.faqs)
console.log('FAQs length:', props.faqs?.length)
console.log('FAQs content:', JSON.stringify(props.faqs, null, 2))

// Watch for changes in props
watch(() => props.faqs, (newFaqs) => {
  console.log('FAQs props changed:', newFaqs)
}, { immediate: true })
</script>