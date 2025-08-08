<template>
  <div class="box-dropdown-location">
    <div class="list-locations">
      <div 
        v-for="(location, index) in locations" 
        :key="index"
        class="item-location"
        @click="selectLocation(location)"
      >
        <div class="location-icon">
          <img :src="location.icon" :alt="location.title" />
        </div>
        <div class="location-info">
          <h6 class="text-16-medium color-text title-location">{{ location.title }}</h6>
          <p class="text-14 color-grey">{{ location.subtitle }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const emit = defineEmits(['location-selected'])

const locations = ref([
  {
    title: 'London Heathrow Airport (LHR)',
    subtitle: 'London, United Kingdom',
    icon: '/imgs/page/homepage1/plane.png'
  },
  {
    title: 'London Tower Hill',
    subtitle: 'London, United Kingdom',
    icon: '/imgs/page/homepage1/building.png'
  },
  {
    title: 'Leyton Train Station',
    subtitle: 'London, United Kingdom',
    icon: '/imgs/page/homepage1/train.png'
  },
  {
    title: 'London Luton Airport (LTN)',
    subtitle: 'London, United Kingdom',
    icon: '/imgs/page/homepage1/plane.png'
  }
])

const selectLocation = (location) => {
  emit('location-selected', location)
}
</script>

<style scoped>
.box-dropdown-location {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: white;
  border: 1px solid #e0e0e0;
  border-radius: 5px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  max-height: 300px;
  overflow-y: auto;
}

.list-locations {
  padding: 0;
}

.item-location {
  display: flex;
  align-items: center;
  padding: 15px;
  border-bottom: 1px solid #f0f0f0;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.item-location:hover {
  background-color: #f8f9fa;
}

.item-location:last-child {
  border-bottom: none;
}

.location-icon {
  margin-right: 15px;
}

.location-icon img {
  width: 24px;
  height: 24px;
  object-fit: contain;
}

.location-info {
  flex: 1;
}

.title-location {
  margin: 0 0 5px 0;
}

.location-info p {
  margin: 0;
}
</style> 