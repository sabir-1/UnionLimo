export const useServicesApi = () => {
  const config = useRuntimeConfig();
  
  // State
  const services = ref([]);
  const loading = ref(true); // Start with true for initial page load
  const error = ref(null);
  const searchQuery = ref('');
  const currentPage = ref(1);
  const itemsPerPage = ref(9);
  const selectedServiceCategory = ref('');
  
  // Computed properties
  const filteredServices = computed(() => {
    let filtered = services.value;
    
    // Filter by search query
    if (searchQuery.value) {
      filtered = filtered.filter(service => 
        service.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
        (service.short_description && service.short_description.toLowerCase().includes(searchQuery.value.toLowerCase()))
      );
    }
    
    // Filter by service category
    if (selectedServiceCategory.value) {
      filtered = filtered.filter(service => 
        service.title.toLowerCase().includes(selectedServiceCategory.value.toLowerCase()) ||
        (service.short_description && service.short_description.toLowerCase().includes(selectedServiceCategory.value.toLowerCase()))
      );
    }
    
    return filtered;
  });
  
  const paginatedServices = computed(() => {
    const start = (currentPage.value - 1) * itemsPerPage.value;
    const end = start + itemsPerPage.value;
    return filteredServices.value.slice(start, end);
  });
  
  const totalPages = computed(() => {
    return Math.ceil(filteredServices.value.length / itemsPerPage.value);
  });
  
  // Fetch all services
  const fetchServices = async () => {
    loading.value = true;
    error.value = null;
    
    try {
      const response = await $fetch('https://edgeranking.com/api/services/all');
      
      if (response && response.data) {
        // Transform API data to match our component structure
        services.value = response.data
          .filter(service => service.status === 'Published' || service.status === 'Active' || service.status === '') // Only show published services
          .map(service => ({
            id: service.id,
            title: service.title,
            slug: service.slug,
            src: service.feature_image || getDefaultServiceImage(service.title),
            desc: service.short_description ,
            link: `/services/${service.slug}`,
            short_description: service.short_description,
            description: service.description,
            seo: service.seo,
            created_at: service.created_at,
            updated_at: service.updated_at,
            sliderImages: [
              service.slider_image_1,
              service.slider_image_2,
              service.slider_image_3,
              service.slider_image_4
            ].filter(img => img && img !== 'https://dummyimage.com/120x120/000/ffffff.png&text=NO+IMAGE')
          }));
      }
    } catch (err) {
      console.error('Error fetching services:', err);
      error.value = 'Failed to load services. Please try again later.';
      // Fallback to static data if API fails
      services.value = getFallbackServices();
    } finally {
      loading.value = false;
    }
  };
  
  // Fetch featured services (no status filtering, use curated list as-is)
  const fetchFeaturedServices = async () => {
    loading.value = true;
    error.value = null;
    
    try {
      const response = await $fetch('https://edgeranking.com/api/services/featured');
      
      if (response && response.data) {
        services.value = response.data.map(service => ({
          id: service.id,
          title: service.title,
          slug: service.slug,
          src: service.feature_image || getDefaultServiceImage(service.title),
          desc: service.short_description || generateServiceDescription(service.title),
          link: `/services/${service.slug}`,
          short_description: service.short_description,
          description: service.description,
          seo: service.seo,
          created_at: service.created_at,
          updated_at: service.updated_at,
          sliderImages: [
            service.slider_image_1,
            service.slider_image_2,
            service.slider_image_3,
            service.slider_image_4
          ].filter(img => img && img !== 'https://dummyimage.com/120x120/000/ffffff.png&text=NO+IMAGE')
        }));
      }
    } catch (err) {
      console.error('Error fetching featured services:', err);
      error.value = 'Failed to load featured services. Please try again later.';
    } finally {
      loading.value = false;
    }
  };
  
  // Fetch single service by slug
  const fetchServiceBySlug = async (slug) => {
    loading.value = true;
    error.value = null;
    
    try {
      const response = await $fetch(`https://edgeranking.com/api/services/slug/${slug}`);
      console.log('Raw API response for service:', response);
      console.log('Response data:', response?.data);
      console.log('First item in data:', response?.data?.[0]);
      console.log('FAQs in first item:', response?.data?.[0]?.faqs);
      
      if (response && response.data && response.data.length > 0) {
        const transformedService = transformServiceForDetail(response.data[0]);
        console.log('Transformed service with FAQs:', transformedService);
        return transformedService;
      } else {
        error.value = 'Service not found';
        return null;
      }
    } catch (err) {
      console.error('Error fetching service:', err);
      error.value = 'Failed to load service details. Please try again later.';
      return null;
    } finally {
      loading.value = false;
    }
  };
  
  // Search services
  const searchServices = (query) => {
    searchQuery.value = query;
    currentPage.value = 1; // Reset to first page when searching
  };
  
  // Filter by service category
  const filterByServiceCategory = (category) => {
    selectedServiceCategory.value = category;
    currentPage.value = 1; // Reset to first page when filtering
  };
  
  // Change page
  const changePage = (page) => {
    if (page >= 1 && page <= totalPages.value) {
      currentPage.value = page;
    }
  };
  
  // Clear filters
  const clearFilters = () => {
    searchQuery.value = '';
    selectedServiceCategory.value = '';
    currentPage.value = 1;
  };
  
  // Helper function to get default service image based on title
  const getDefaultServiceImage = (title) => {
    const lowerTitle = title.toLowerCase();
    
    if (lowerTitle.includes('chauffeur') || lowerTitle.includes('car')) {
      return '/imgs/page/homepage1/service1.png';
    } else if (lowerTitle.includes('airport') || lowerTitle.includes('transfer')) {
      return '/imgs/page/homepage1/service2.png';
    } else if (lowerTitle.includes('business') || lowerTitle.includes('corporate')) {
      return '/imgs/page/homepage1/service3.png';
    } else if (lowerTitle.includes('wedding') || lowerTitle.includes('event')) {
      return '/imgs/page/services/wedding.png';
    } else if (lowerTitle.includes('travel') || lowerTitle.includes('tour')) {
      return '/imgs/page/services/travel.png';
    } else if (lowerTitle.includes('sprinter') || lowerTitle.includes('van')) {
      return '/imgs/page/homepage1/service5.png';
    } else {
      return '/imgs/page/homepage1/service1.png';
    }
  };
  
  // Helper function to generate service description based on title
  const generateServiceDescription = (title) => {
    const lowerTitle = title.toLowerCase();
    
    if (lowerTitle.includes('chauffeur') || lowerTitle.includes('car')) {
      return 'Professional chauffeur services with luxury vehicles and experienced drivers.';
    } else if (lowerTitle.includes('airport') || lowerTitle.includes('transfer')) {
      return 'Reliable airport transportation with flight monitoring and meet & greet services.';
    } else if (lowerTitle.includes('business') || lowerTitle.includes('corporate')) {
      return 'Premium business transportation with luxury vehicles and professional chauffeurs.';
    } else if (lowerTitle.includes('wedding') || lowerTitle.includes('event')) {
      return 'Elegant transportation for your special day with luxury vehicles and professional service.';
    } else if (lowerTitle.includes('travel') || lowerTitle.includes('tour')) {
      return 'Comprehensive travel transportation solutions for all your journey needs.';
    } else if (lowerTitle.includes('sprinter') || lowerTitle.includes('van')) {
      return 'Luxury van transportation for groups with spacious and comfortable interiors.';
    } else if (lowerTitle.includes('point') || lowerTitle.includes('transfer')) {
      return 'Direct point-to-point transportation service with professional drivers and luxury vehicles.';
    } else {
      return 'Premium transportation service with luxury vehicles and professional chauffeurs.';
    }
  };
  
  // Transform service data for detail view
  const transformServiceForDetail = (service) => {
    console.log('transformServiceForDetail called with:', service);
    console.log('FAQs in service data:', service?.faqs);
    
    const transformedService = {
      id: service.id,
      title: service.title,
      slug: service.slug,
      src: service.feature_image || getDefaultServiceImage(service.title),
      desc: service.short_description || generateServiceDescription(service.title),
      link: `/services/${service.slug}`,
      description: service.description || generateServiceDescription(service.title),
      longDescription: service.description || '',
      features: service.features && service.features.length > 0 ? service.features : generateServiceFeatures(service.title),
      benefits: generateServiceBenefits(service.title),
      pricing: generateServicePricing(service.title),
      seo: service.seo,
      created_at: service.created_at,
      updated_at: service.updated_at,
      faqs: service.faqs || [],
      why_choose: Array.isArray(service.why_choose) ? service.why_choose : [],
      sliderImages: [
        service.slider_image_1,
        service.slider_image_2,
        service.slider_image_3,
        service.slider_image_4
      ].filter(img => img && img !== 'https://dummyimage.com/120x120/000/ffffff.png&text=NO+IMAGE'),
      // Banner fields for dynamic banner content
      banner_title: service.banner_title || service.title,
      banner_description: service.banner_description || service.short_description || ''
    };
    
    console.log('Transformed service with FAQs:', transformedService);
    return transformedService;
  };
  
  // Generate service features based on title
  const generateServiceFeatures = (title) => {
    const lowerTitle = title.toLowerCase();
    
    if (lowerTitle.includes('chauffeur') || lowerTitle.includes('car')) {
      return [
        'Professional licensed chauffeurs',
        'Luxury vehicle fleet',
        '24/7 availability',
        'Real-time tracking',
        'Meet & greet service',
        'Flight monitoring'
      ];
    } else if (lowerTitle.includes('airport') || lowerTitle.includes('transfer')) {
      return [
        'Flight monitoring',
        'Meet & greet service',
        'Luggage assistance',
        'Professional drivers',
        'Luxury vehicles',
        'Fixed pricing'
      ];
    } else if (lowerTitle.includes('business') || lowerTitle.includes('corporate')) {
      return [
        'Corporate account management',
        'Professional chauffeurs',
        'Luxury business vehicles',
        'On-time guarantee',
        'Receipt management',
        'Dedicated account manager'
      ];
    } else if (lowerTitle.includes('wedding') || lowerTitle.includes('event')) {
      return [
        'Elegant wedding transportation',
        'Professional chauffeurs',
        'Luxury wedding vehicles',
        'On-time service guarantee',
        'Special event coordination',
        'Beautiful vehicle presentation'
      ];
    } else {
      return [
        'Professional service',
        'Luxury vehicles',
        'Experienced drivers',
        '24/7 availability',
        'On-time guarantee',
        'Premium experience'
      ];
    }
  };
  
  // Generate service benefits based on title
  const generateServiceBenefits = (title) => {
    const lowerTitle = title.toLowerCase();
    
    if (lowerTitle.includes('chauffeur') || lowerTitle.includes('car')) {
      return [
        'Stress-free travel experience',
        'Professional and courteous service',
        'Luxury and comfort',
        'Reliable transportation',
        'Time-saving convenience',
        'Premium vehicle fleet'
      ];
    } else if (lowerTitle.includes('airport') || lowerTitle.includes('transfer')) {
      return [
        'No waiting in taxi lines',
        'Flight delay protection',
        'Professional meet & greet',
        'Luggage handling assistance',
        'Fixed pricing - no surprises',
        'Reliable airport transportation'
      ];
    } else if (lowerTitle.includes('business') || lowerTitle.includes('corporate')) {
      return [
        'Professional business image',
        'Productive travel time',
        'Corporate account benefits',
        'Reliable transportation',
        'Professional chauffeurs',
        'Luxury business vehicles'
      ];
    } else if (lowerTitle.includes('wedding') || lowerTitle.includes('event')) {
      return [
        'Elegant wedding transportation',
        'Stress-free special day',
        'Professional coordination',
        'Beautiful vehicle presentation',
        'Reliable service',
        'Memorable experience'
      ];
    } else {
      return [
        'Premium service quality',
        'Professional experience',
        'Reliable transportation',
        'Luxury and comfort',
        'Convenient booking',
        'Excellent customer service'
      ];
    }
  };
  
  // Generate service pricing based on title
  const generateServicePricing = (title) => {
    const lowerTitle = title.toLowerCase();
    
    if (lowerTitle.includes('chauffeur') || lowerTitle.includes('car')) {
      return {
        hourly: '$120/hour',
        airport: '$80',
        city: '$60'
      };
    } else if (lowerTitle.includes('airport') || lowerTitle.includes('transfer')) {
      return {
        jfk: '$120',
        lga: '$80',
        ewr: '$100',
        hourly: '$100/hour'
      };
    } else if (lowerTitle.includes('business') || lowerTitle.includes('corporate')) {
      return {
        hourly: '$140/hour',
        airport: '$100',
        city: '$80'
      };
    } else if (lowerTitle.includes('wedding') || lowerTitle.includes('event')) {
      return {
        hourly: '$160/hour',
        package: '$800/day',
        custom: 'Contact for quote'
      };
    } else if (lowerTitle.includes('sprinter') || lowerTitle.includes('van')) {
      return {
        hourly: '$180/hour',
        airport: '$140',
        city: '$100'
      };
    } else {
      return {
        hourly: '$100/hour',
        airport: '$80',
        city: '$60'
      };
    }
  };
  
  // Fallback data if API fails
  const getFallbackServices = () => [
    {
      id: 1,
      src: '/imgs/page/homepage1/service1.png',
      title: 'Car & Chauffeur Service',
      desc: 'Professional chauffeur services with luxury vehicles and experienced drivers.',
      link: '/services/car-chauffeur-service',
      type: 'style3',
    },
    {
      id: 2,
      src: '/imgs/page/homepage1/service2.png',
      title: 'Point to Point Transfer Service',
      desc: 'Direct point-to-point transportation service with professional drivers and luxury vehicles.',
      link: '/services/point-to-point-transfer-service',
      type: 'style3',
    },
    {
      id: 3,
      src: '/imgs/page/homepage1/service3.png',
      title: 'Airport Transfers',
      desc: 'Reliable airport transportation with flight monitoring and meet & greet services.',
      link: '/services/airport-transfers',
      type: 'style3',
    },
    {
      id: 4,
      src: '/imgs/page/homepage1/service5.png',
      title: 'Business Class',
      desc: 'Premium business transportation with luxury vehicles and professional chauffeurs.',
      link: '/services/business-class',
      type: 'style3',
    },
    {
      id: 5,
      src: '/imgs/page/services/wedding.png',
      title: 'Wedding Transportation',
      desc: 'Elegant transportation for your special day with luxury vehicles and professional service.',
      link: '/services/wedding-transportation',
      type: 'style3',
    },
    {
      id: 6,
      src: '/imgs/page/services/travel.png',
      title: 'Travel Transfer',
      desc: 'Comprehensive travel transportation solutions for all your journey needs.',
      link: '/services/travel-transfer',
      type: 'style3',
    },
  ];
  
  return {
    // State
    services: readonly(services),
    loading: readonly(loading),
    error: readonly(error),
    searchQuery: readonly(searchQuery),
    currentPage: readonly(currentPage),
    itemsPerPage: readonly(itemsPerPage),
    selectedServiceCategory: readonly(selectedServiceCategory),
    
    // Computed
    filteredServices: readonly(filteredServices),
    paginatedServices: readonly(paginatedServices),
    totalPages: readonly(totalPages),
    
    // Methods
    fetchServices,
    fetchFeaturedServices,
    fetchServiceBySlug,
    searchServices,
    filterByServiceCategory,
    changePage,
    clearFilters
  };
}; 