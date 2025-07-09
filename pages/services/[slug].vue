<template>
  <div>
    <!-- Header -->
    <HeaderVariation3 />

    <!-- Breadcrumb Section -->
    <BreadCrumb />

    <!-- Service Detail Section -->
    <ServiceDetail :service-data="serviceData" />

    <!-- Footer -->
    <FooterVariation7 />
  </div>
</template>

<script setup>
// Import components
import HeaderVariation3 from '~/components/HeaderVariation3.vue'
import FooterVariation7 from '~/components/FooterVariation7.vue'
import BreadCrumb from '~/components/BreadCrumb.vue'
import ServiceDetail from '~/sections/service-single/Detail.vue'
// Get route params
const route = useRoute()
const { slug } = route.params

const servicesData = {
  'business-class': {
    id: 'business-class',
    title: 'Business Class',
    slug: 'business-class',
    description: 'Premium business transportation with luxury vehicles and professional chauffeurs.',
    longDescription: 'Our Business Class service offers the perfect blend of luxury, comfort, and professionalism. Whether you\'re traveling for business meetings, corporate events, or executive transportation, our fleet of premium vehicles and experienced chauffeurs ensure a seamless journey.',
    image: '/imgs/page/homepage1/service1.png',
    bannerImage: '/imgs/page/services/business-banner.png',
    features: [
      'Mercedes-Benz E-Class, BMW 5 Series, Cadillac XTS or similar',
      'Professional chauffeurs with business etiquette training',
      'Flight monitoring and meet & greet service',
      'Complimentary WiFi and refreshments',
      'Flexible scheduling and 24/7 availability'
    ],
    details: [
      {
        title: 'Vehicle Specifications',
        content: 'Our Business Class fleet includes the latest models of Mercedes-Benz E-Class, BMW 5 Series, and Cadillac XTS. All vehicles are equipped with premium amenities including leather seating, climate control, and advanced safety features.'
      },
      {
        title: 'Service Features',
        content: 'Professional chauffeurs undergo rigorous training in business etiquette and customer service. We provide flight monitoring, meet & greet services, and ensure your journey is comfortable and punctual.'
      },
      {
        title: 'Booking & Pricing',
        content: 'Transparent pricing with no hidden fees. Book online, via phone, or through our mobile app. We offer both hourly and point-to-point services with competitive rates.'
      }
    ],
    pricing: {
      hourly: '$85/hour',
      airport: '$120',
      city: '$65'
    }
  },
  'chauffeur-hailing': {
    id: 'chauffeur-hailing',
    title: 'Chauffeur Hailing',
    slug: 'chauffeur-hailing',
    description: 'On-demand chauffeur services with instant booking and real-time tracking.',
    longDescription: 'Experience the convenience of on-demand chauffeur services with our Chauffeur Hailing platform. Book instantly through our mobile app, track your vehicle in real-time, and enjoy professional transportation at your fingertips.',
    image: '/imgs/page/homepage1/service2.png',
    bannerImage: '/imgs/page/services/chauffeur-banner.png',
    features: [
      'Instant booking through mobile app',
      'Real-time vehicle tracking',
      'Professional licensed chauffeurs',
      'Multiple vehicle options',
      'Secure payment processing'
    ],
    details: [
      {
        title: 'How It Works',
        content: 'Simply download our mobile app, enter your destination, choose your preferred vehicle type, and book instantly. Your chauffeur will arrive at your location within minutes.'
      },
      {
        title: 'Vehicle Options',
        content: 'Choose from our diverse fleet including economy, business, and luxury vehicles. All vehicles are regularly maintained and equipped with modern amenities.'
      },
      {
        title: 'Safety & Security',
        content: 'All our chauffeurs are licensed, insured, and background-checked. Your safety and security are our top priorities.'
      }
    ],
    pricing: {
      base: '$25',
      perKm: '$2.50',
      minimum: '$15'
    }
  },
  'airport-transfers': {
    id: 'airport-transfers',
    title: 'Airport Transfers',
    slug: 'airport-transfers',
    description: 'Reliable airport transportation with flight monitoring and meet & greet services.',
    longDescription: 'Make your airport journey stress-free with our comprehensive airport transfer service. We provide reliable transportation to and from all major airports with flight monitoring, meet & greet services, and professional chauffeurs.',
    image: '/imgs/page/homepage1/service3.png',
    bannerImage: '/imgs/page/services/airport-banner.png',
    features: [
      'Flight monitoring and tracking',
      'Meet & greet service',
      'Luggage assistance',
      'Fixed pricing with no hidden fees',
      'Professional chauffeurs'
    ],
    details: [
      {
        title: 'Service Coverage',
        content: 'We serve all major airports including Heathrow, Gatwick, Stansted, Luton, and London City Airport. Our service is available 24/7 to accommodate all flight schedules.'
      },
      {
        title: 'Flight Monitoring',
        content: 'We monitor your flight in real-time to ensure punctual pickup, even if your flight is delayed. Our chauffeurs will wait for you with a personalized meet & greet sign.'
      },
      {
        title: 'Luggage Handling',
        content: 'Our chauffeurs are trained to assist with luggage handling and will ensure your belongings are safely transported to your destination.'
      }
    ],
    pricing: {
      heathrow: '$120',
      gatwick: '$140',
      stansted: '$160',
      luton: '$150'
    }
  },
  'sprinter-class': {
    id: 'sprinter-class',
    title: 'Sprinter Class',
    slug: 'sprinter-class',
    description: 'Luxury van transportation for groups with spacious and comfortable interiors.',
    longDescription: 'Perfect for group travel, our Sprinter Class service offers spacious luxury vans that can accommodate up to 14 passengers. Ideal for corporate events, airport transfers, and group outings.',
    image: '/imgs/page/homepage1/service5.png',
    bannerImage: '/imgs/page/services/sprinter-banner.png',
    features: [
      'Spacious luxury vans for up to 14 passengers',
      'Premium amenities and comfortable seating',
      'Professional chauffeur service',
      'Ideal for group travel',
      'Corporate and event transportation'
    ],
    details: [
      {
        title: 'Vehicle Specifications',
        content: 'Our Sprinter vans are equipped with premium leather seating, climate control, entertainment systems, and ample luggage space. Perfect for comfortable group travel.'
      },
      {
        title: 'Group Travel Solutions',
        content: 'Whether you\'re traveling with colleagues, family, or friends, our Sprinter service ensures everyone travels together in comfort and style.'
      },
      {
        title: 'Corporate Events',
        content: 'Perfect for corporate events, airport transfers for groups, and special occasions where you need to transport multiple passengers.'
      }
    ],
    pricing: {
      hourly: '$120/hour',
      airport: '$180',
      city: '$95'
    }
  },
  'wedding-class': {
    id: 'wedding-class',
    title: 'Wedding Class',
    slug: 'wedding-class',
    description: 'Elegant transportation for your special day with luxury vehicles and professional service.',
    longDescription: 'Make your wedding day truly special with our Wedding Class service. We provide elegant transportation with luxury vehicles, professional chauffeurs, and attention to every detail to ensure your special day is perfect.',
    image: '/imgs/page/services/wedding.png',
    bannerImage: '/imgs/page/services/wedding-banner.png',
    features: [
      'Luxury wedding vehicles',
      'Professional wedding chauffeurs',
      'Decorated vehicles for special occasions',
      'Flexible scheduling for wedding events',
      'Complimentary champagne service'
    ],
    details: [
      {
        title: 'Wedding Fleet',
        content: 'Choose from our elegant wedding fleet including luxury sedans, limousines, and vintage cars. All vehicles are meticulously maintained and decorated for your special day.'
      },
      {
        title: 'Professional Service',
        content: 'Our wedding chauffeurs are specially trained to provide discreet, professional service. They understand the importance of punctuality and attention to detail on your special day.'
      },
      {
        title: 'Wedding Packages',
        content: 'We offer comprehensive wedding packages including transportation for the bride, groom, wedding party, and guests. Customize your package to suit your needs.'
      }
    ],
    pricing: {
      basic: '$200',
      premium: '$350',
      luxury: '$500'
    }
  },
  'travel-transfer': {
    id: 'travel-transfer',
    title: 'Travel Transfer',
    slug: 'travel-transfer',
    description: 'Comprehensive travel transportation solutions for all your journey needs.',
    longDescription: 'From city tours to intercity travel, our Travel Transfer service provides comprehensive transportation solutions. Whether you\'re exploring the city or traveling between destinations, we ensure comfortable and reliable service.',
    image: '/imgs/page/services/travel.png',
    bannerImage: '/imgs/page/services/travel-banner.png',
    features: [
      'City tours and sightseeing',
      'Intercity travel services',
      'Custom travel itineraries',
      'Professional tour guides available',
      'Flexible booking options'
    ],
    details: [
      {
        title: 'City Tours',
        content: 'Explore the city in comfort with our guided tours. Our professional chauffeurs can also serve as knowledgeable guides to enhance your travel experience.'
      },
      {
        title: 'Intercity Travel',
        content: 'Travel between cities with our reliable intercity service. We provide comfortable transportation for business trips, leisure travel, and special occasions.'
      },
      {
        title: 'Custom Itineraries',
        content: 'We work with you to create custom travel itineraries that suit your schedule and preferences. From airport transfers to multi-day tours, we handle all your travel needs.'
      }
    ],
    pricing: {
      cityTour: '$80/hour',
      intercity: '$150',
      custom: 'Quote'
    }
  },
  'intercity-rides': {
    id: 'intercity-rides',
    title: 'Intercity Rides',
    slug: 'intercity-rides',
    description: 'Comfortable and reliable transportation between cities with premium vehicles.',
    longDescription: 'Travel between cities in comfort and style with our Intercity Rides service. We provide reliable transportation for business trips, leisure travel, and special occasions with our fleet of premium vehicles.',
    image: '/imgs/page/homepage1/service1.png',
    bannerImage: '/imgs/page/services/intercity-banner.png',
    features: [
      'Premium vehicles for long-distance travel',
      'Professional chauffeurs with route knowledge',
      'Comfortable seating and amenities',
      'Flexible scheduling and booking',
      'Competitive pricing for intercity travel'
    ],
    details: [
      {
        title: 'Vehicle Fleet',
        content: 'Our intercity fleet includes luxury sedans, SUVs, and vans equipped with comfortable seating, climate control, and entertainment systems for your journey.'
      },
      {
        title: 'Route Coverage',
        content: 'We serve major routes between cities with experienced chauffeurs who know the best routes and can ensure timely arrival at your destination.'
      },
      {
        title: 'Booking & Pricing',
        content: 'Book your intercity ride online, via phone, or through our mobile app. We offer transparent pricing with no hidden fees and flexible scheduling options.'
      }
    ],
    pricing: {
      perKm: '$2.50',
      minimum: '$50',
      hourly: '$75/hour'
    }
  }
}

const serviceData = computed(() => {
  return servicesData[slug] || {
    id: slug,
    title: 'Service Not Found',
    slug: slug,
    description: 'The requested service could not be found.',
    longDescription: 'We apologize, but the service you are looking for is not available.',
    image: '/imgs/page/homepage1/service1.png',
    bannerImage: '/imgs/page/services/default-banner.png',
    features: [],
    details: [],
    pricing: {}
  }
})

// Set page title and meta
useHead({
  title: `${serviceData.value.title} - UnionLimo`,
  meta: [
    { name: 'description', content: serviceData.value.description },
    { name: 'keywords', content: `${serviceData.value.title}, chauffeur service, luxury transportation, ${slug}` }
  ]
})
</script>

<style scoped>
/* Service detail page specific styles */
</style> 