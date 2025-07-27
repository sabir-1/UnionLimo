<template>
  <div>
    <!-- Service Detail Section -->
    <ServiceSingleBanner :service-data="serviceData" />
    <ServiceSingleFeature :service-data="serviceData" /> 
    
    <ServiceSingleDetail :service-data="serviceData" />

    <!-- FAQs Section -->
    <Faqs />
  </div>
</template>

<script setup>
// Import components
import ServiceSingleBanner from '~/sections/service-single/Banner.vue'
import ServiceSingleDetail from '~/sections/service-single/Detail.vue'
import ServiceSingleFeature from '~/sections/service-single/Feature.vue'
import Faqs from '~/sections/homepage5/Faqs.vue'

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
        content: 'We offer comprehensive wedding packages that include transportation for the bride, groom, wedding party, and guests. All packages include decoration and professional service.'
      }
    ],
    pricing: {
      hourly: '$150/hour',
      wedding: '$800',
      reception: '$400'
    }
  }
}

// Get service data based on slug
const serviceData = computed(() => {
  return servicesData[slug] || {
    title: 'Service Not Found',
    description: 'The requested service could not be found.',
    features: [],
    details: []
  }
})

// Define layout props for SEO and breadcrumb
definePageMeta({
  layout: 'default',
  layoutProps: computed(() => ({
    breadcrumbTitle: serviceData.value.title,
    breadcrumbItems: [
      { text: 'Services', link: '/services' },
      { text: serviceData.value.title, link: null }
    ],
    seoTitle: `${serviceData.value.title} - UnionLimo`,
    seoDescription: serviceData.value.description,
    seoKeywords: `${serviceData.value.title.toLowerCase()}, luxury transportation, chauffeur service, unionlimo`
  }))
})
</script>

<style scoped>
/* Service detail page specific styles */
</style> 