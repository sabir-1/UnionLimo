<template>
  <section class="section   ">
        <div class="container-sub">
          <div class="box-faqs">
            <div class="text-center"> 
              <h2 class="heading-44-medium color-text mb-20 wow fadeInUp">Faqs</h2>
            </div>
            <div class="mt-60 mb-40">
              <div class="accordion wow fadeInUp" id="accordionFAQ">
                <div 
                  v-for="(faq, index) in activeFaqs" 
                  :key="faq.id" 
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
import { ref, onMounted, computed } from 'vue'

const faqs = ref([])
const loading = ref(true)
const error = ref(null)

// Fetch FAQs from API
const fetchFaqs = async () => {
  try {
    loading.value = true
    const response = await fetch('https://edgeranking.com/api/faqs/all')
    if (!response.ok) {
      throw new Error('Failed to fetch FAQs')
    }
    const data = await response.json()
    faqs.value = data.data || []
  } catch (err) {
    error.value = err.message
    console.error('Error fetching FAQs:', err)
  } finally {
    loading.value = false
  }
}

// Filter only active FAQs (status is "Active" or empty)
const activeFaqs = computed(() => {
  return faqs.value.filter(faq => 
    faq.status === 'Active' || faq.status === '' || faq.status === null
  )
})

onMounted(() => {
  fetchFaqs()
})
</script>