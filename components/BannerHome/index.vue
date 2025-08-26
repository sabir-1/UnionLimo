<template>
  <section class="section banner-home1 banner-home9 mt-20" v-if="serviceData">
    <div 
      class="box-cover-image wow fadeInUp"
      :style="{ backgroundImage: `url(${serviceData.src})` }"
    ></div>
    <div class="box-banner-info text-center wow fadeInUp">
      <h2 class="heading-52-medium color-white">
        {{ serviceData.banner_title || serviceData.title }}
      </h2>
      <p class="color-white">{{ serviceData.banner_description || serviceData.desc }}</p>
      <div class="mt-30">
        <NuxtLink to="/book-a-quote" class="btn btn-border">
          Schedule Ride Now!
          <svg 
            class="icon-16" 
            fill="none" 
            stroke="currentColor" 
            stroke-width="1.5" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg" 
            aria-hidden="true"
          >
            <path 
              stroke-linecap="round" 
              stroke-linejoin="round" 
              d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
            />
          </svg>
        </NuxtLink>
        <NuxtLink to="/fleets" class="btn btn-primary ml-10">
          Book Your Fleet
          <svg 
            class="icon-16" 
            fill="none" 
            stroke="currentColor" 
            stroke-width="1.5" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg" 
            aria-hidden="true"
          >
            <path 
              stroke-linecap="round" 
              stroke-linejoin="round" 
              d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
            />
          </svg>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, nextTick, onUnmounted } from 'vue'
import Locations from '~/elements/Locations.vue'

const props = defineProps({
  serviceData: {
    type: Object,
    required: false,
    default: () => ({
      title: 'Luxury Chauffeur Service'
    })
  }
})
// Search form data
const searchData = ref({
  date: 'Thu, Oct 06, 2022',
  time: '6 PM  :  15',
  from: 'London City Airport (LCY)',
  to: 'London City Airport (LCY)'
})

// Dropdown states
const showFromDropdown = ref(false)
const showToDropdown = ref(false)

// Refs for inputs
const dateInput = ref(null)
const timeInput = ref(null)

// Methods
const toggleFromDropdown = () => {
  showFromDropdown.value = !showFromDropdown.value
  showToDropdown.value = false
}

const toggleToDropdown = () => {
  showToDropdown.value = !showToDropdown.value
  showFromDropdown.value = false
}

const selectFromLocation = (location) => {
  searchData.value.from = location.title
  showFromDropdown.value = false
}

const selectToLocation = (location) => {
  searchData.value.to = location.title
  showToDropdown.value = false
}

const handleSearch = () => {
  // Handle search functionality
  console.log('Search data:', searchData.value)
  // You can emit an event or call an API here
}

// Handle click outside dropdowns
const handleClickOutside = (event) => {
  const target = event.target
  if (!target.closest('.search-from') && !target.closest('.search-to')) {
    showFromDropdown.value = false
    showToDropdown.value = false
  }
}

// Initialize datepicker and timepicker
const initializePickers = () => {
  if (typeof window !== 'undefined' && window.$) {
    const $ = window.$
    
    // Initialize datepicker
    if (dateInput.value) {
      $(dateInput.value).datepicker({
        dateFormat: "D, M dd, yy",
        beforeShow: function (input, inst) {
          if ($(window).width() > 1200) {
            inst.dpDiv.css({
              marginTop: "40px",
              marginLeft: "-90px"
            });
          } else {
            inst.dpDiv.css({
              marginTop: "20px",
              marginLeft: "0px"
            });
          }
        }
      }).attr("readonly", "readonly");
    }
    
    // Initialize timepicker
    if (timeInput.value) {
      $(timeInput.value).timepicker({
        timeFormat: "hh p : mm",
        interval: 10,
        minTime: "0",
        maxTime: "23:59pm",
        defaultTime: "08",
        startTime: "00:00",
        dynamic: false,
        dropdown: true,
        scrollbar: false,
        zindex: 99
      }).attr("readonly", "readonly");
    }
  }
}

// Initialize on mount (pickers only)
onMounted(() => {
  nextTick(() => {
    setTimeout(() => {
      initializePickers()
    }, 100)
  })
  document.addEventListener('click', handleClickOutside)
})

// Cleanup on unmount
onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})

// Slider removed; no route watch required
</script>

 


