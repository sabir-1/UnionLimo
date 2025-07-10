<template>
    <div class="">
   <section class="section pt-60 bg-white latest-new-white">
        <div class="container-sub"> 
          <div class="row align-items-center"> 
            <div class="col-lg-6 col-md-6 col-sm-6 text-center text-sm-start mb-30"> 
              <h2 class="heading-24-medium wow fadeInUp">Choose Your Fleet</h2>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-6 text-center text-sm-end mb-30 wow fadeInUp">
              <div class="dropdown dropdown-menu-box"><a class="dropdown-toggle" id="dropdownMenuButton1" href="#" data-bs-toggle="dropdown" aria-expanded="false">Vehicle Type</a>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <li><a class="dropdown-item" href="#">Hatchback</a></li>
                  <li><a class="dropdown-item" href="#">Sedan</a></li>
                  <li> <a class="dropdown-item" href="#">SUV</a></li>
                  <li> <a class="dropdown-item" href="#">Crossover</a></li>
                  <li> <a class="dropdown-item" href="#">Sports Car</a></li>
                  <li> <a class="dropdown-item" href="#">Minivan</a></li>
                </ul>
              </div>
              <div class="dropdown dropdown-menu-box"><a class="dropdown-toggle" id="dropdownMenuButton2" href="#" data-bs-toggle="dropdown" aria-expanded="false">Vehicle Make</a>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton2">
                  <li><a class="dropdown-item" href="#">Mercedes-Benz</a></li>
                  <li><a class="dropdown-item" href="#">Audi</a></li>
                  <li> <a class="dropdown-item" href="#">Hyundai</a></li>
                  <li> <a class="dropdown-item" href="#">Honda</a></li>
                  <li> <a class="dropdown-item" href="#">Nissan</a></li>
                  <li> <a class="dropdown-item" href="#">Toyota</a></li>
                  <li> <a class="dropdown-item" href="#">Volkswagen</a></li>
                  <li> <a class="dropdown-item" href="#">Subaru</a></li>
                  <li> <a class="dropdown-item" href="#">Lamborghini</a></li>
                  <li> <a class="dropdown-item" href="#">Lincoln</a></li>
                  <li> <a class="dropdown-item" href="#">Bentley</a></li>
                  <li> <a class="dropdown-item" href="#">Chevrolet</a></li>
                  <li> <a class="dropdown-item" href="#">Ford</a></li>
                  <li> <a class="dropdown-item" href="#">Volvo</a></li>
                  <li> <a class="dropdown-item" href="#">GMC</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="row mt-30 our-fleet-2"> 
            <div class="col-lg-3 col-md-6 mb-30" v-for="fleet in fleetList" :key="fleet.id"> 
              <div class="cardFleet cardFleetStyle3 wow fadeInUp">
                <div class="cardImage mb-30"><a href="#"><img :src="fleet.image" :alt="fleet.title"></a></div>
                <div class="cardInfo"><a href="#">
                    <h3 class="text-20-medium color-text mb-10">{{ fleet.title }}</h3></a>
                  <p class="text-14 color-text mb-30">{{ fleet.description }}</p>
                </div>
                <div class="cardInfoBottom">
                  <div class="passenger"><span class="icon-circle icon-passenger"></span><span class="text-14">{{ fleet.passengers }}</span></div>
                  <div class="luggage"><span class="icon-circle icon-luggage"></span><span class="text-14">{{ fleet.luggage }}</span></div>
                </div>
              </div>
            </div>
          </div>
          <div class="text-center mt-40 mb-120 wow fadeInUp">
            <Pagination/>
          </div>
          
        </div>
      </section> 
    </div>
</template>

<script setup>
import { ref } from 'vue'
import Pagination from '~/elements/Pagination.vue'
 
const fleetList = ref([
  {
    id: 1,
    image: '/imgs/page/homepage1/e-class.png',
    title: 'Business Class',
    description: 'Mercedes-Benz E-Class, BMW 5 Series, Cadillac XTS or similar',
    passengers: '4',
    luggage: '2'
  },
  {
    id: 2,
    image: '/imgs/page/homepage1/eqs.png',
    title: 'First Class',
    description: 'Mercedes-Benz EQS, BMW 7 Series, Audi A8 or similar',
    passengers: '4',
    luggage: '2'
  },
  {
    id: 3,
    image: '/imgs/page/homepage1/suv.png',
    title: 'Business Van/SUV',
    description: 'Mercedes-Benz V-Class, Chevrolet Suburban, Cadillac',
    passengers: '4',
    luggage: '2'
  },
  {
    id: 4,
    image: '/imgs/page/homepage1/suv-class.png',
    title: 'SUV Class',
    description: 'Mercedes-Benz V-Class, Chevrolet Suburban, Cadillac',
    passengers: '4',
    luggage: '2'
  },
  {
    id: 5,
    image: '/imgs/page/homepage1/e-class.png',
    title: 'Luxury Class',
    description: 'Mercedes-Benz E-Class, BMW 5 Series, Cadillac XTS or similar',
    passengers: '4',
    luggage: '2'
  },
  {
    id: 6,
    image: '/imgs/page/homepage1/v-class.png',
    title: 'Electric Class',
    description: 'Mercedes-Benz EQS, BMW 7 Series, Audi A8 or similar',
    passengers: '4',
    luggage: '2'
  },
  {
    id: 7,
    image: '/imgs/page/homepage1/e-class.png',
    title: 'Business Class',
    description: 'Mercedes-Benz V-Class, Chevrolet Suburban, Cadillac',
    passengers: '4',
    luggage: '2'
  },
  {
    id: 8,
    image: '/imgs/page/homepage1/eqs.png',
    title: 'First Class',
    description: 'Mercedes-Benz V-Class, Chevrolet Suburban, Cadillac',
    passengers: '4',
    luggage: '2'
  }
])

// Vehicle type options
const vehicleTypes = ref([
  'Hatchback',
  'Sedan',
  'SUV',
  'Crossover',
  'Sports Car',
  'Minivan'
])

// Vehicle make options
const vehicleMakes = ref([
  'Mercedes-Benz',
  'Audi',
  'Hyundai',
  'Honda',
  'Nissan',
  'Toyota',
  'Volkswagen',
  'Subaru',
  'Lamborghini',
  'Lincoln',
  'Bentley',
  'Chevrolet',
  'Ford',
  'Volvo',
  'GMC'
])

// Selected filters
const selectedVehicleType = ref('')
const selectedVehicleMake = ref('')

// Filter methods
const filterByVehicleType = (type) => {
  selectedVehicleType.value = type
  // Add filtering logic here
}

const filterByVehicleMake = (make) => {
  selectedVehicleMake.value = make
  // Add filtering logic here
}

// Define layout props for SEO and breadcrumb
definePageMeta({
  layout: 'default',
  layoutProps: {
    breadcrumbTitle: 'Our Fleet',
    breadcrumbItems: [
      { text: 'Our Fleet', link: null }
    ],
    seoTitle: 'Our Fleet - Luxury Vehicles | UnionLimo',
    seoDescription: 'Explore our premium fleet of luxury vehicles including Mercedes-Benz, BMW, Audi and more. Business class, first class, SUV and electric vehicles available.',
    seoKeywords: 'luxury fleet, mercedes benz, bmw, audi, suv, business class, first class, luxury vehicles'
  }
})
</script>

 
