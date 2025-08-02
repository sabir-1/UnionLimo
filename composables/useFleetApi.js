export const useFleetApi = () => {
  const config = useRuntimeConfig();
  
  // State
  const fleets = ref([]);
  const loading = ref(false);
  const error = ref(null);
  const searchQuery = ref('');
  const currentPage = ref(1);
  const itemsPerPage = ref(9);
  const selectedVehicleType = ref('');
  const selectedVehicleMake = ref('');
  
  // Computed properties
  const filteredFleets = computed(() => {
    let filtered = fleets.value;
    
    // Filter by search query
    if (searchQuery.value) {
      filtered = filtered.filter(fleet => 
        fleet.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
        (fleet.short_description && fleet.short_description.toLowerCase().includes(searchQuery.value.toLowerCase()))
      );
    }
    
    // Filter by vehicle type
    if (selectedVehicleType.value) {
      filtered = filtered.filter(fleet => 
        fleet.title.toLowerCase().includes(selectedVehicleType.value.toLowerCase()) ||
        (fleet.short_description && fleet.short_description.toLowerCase().includes(selectedVehicleType.value.toLowerCase()))
      );
    }
    
    // Filter by vehicle make
    if (selectedVehicleMake.value) {
      filtered = filtered.filter(fleet => 
        fleet.title.toLowerCase().includes(selectedVehicleMake.value.toLowerCase()) ||
        (fleet.short_description && fleet.short_description.toLowerCase().includes(selectedVehicleMake.value.toLowerCase()))
      );
    }
    
    return filtered;
  });
  
  const paginatedFleets = computed(() => {
    const start = (currentPage.value - 1) * itemsPerPage.value;
    const end = start + itemsPerPage.value;
    return filteredFleets.value.slice(start, end);
  });
  
  const totalPages = computed(() => {
    return Math.ceil(filteredFleets.value.length / itemsPerPage.value);
  });
  
  // Fetch all fleets
  const fetchFleets = async () => {
    loading.value = true;
    error.value = null;
    
    try {
      const response = await $fetch('https://edgeranking.com/api/fleets/all');
      
      if (response && response.data) {
        // Transform API data to match our component structure
        fleets.value = response.data
          .filter(fleet => fleet.status === 'Active' || fleet.status === '') // Only show active fleets
          .map(fleet => ({
            id: fleet.id,
            title: fleet.title,
            slug: fleet.slug,
            image: fleet.feature_image || '/imgs/page/homepage1/e-class.png',
            description: fleet.short_description || 'Luxury transportation with premium comfort and style.',
            passengers: fleet.passenger || getPassengerCount(fleet.title),
            luggage: fleet.luggage || getLuggageCount(fleet.title),
            short_description: fleet.short_description,
            pricing: generatePricing(fleet),
            seo: fleet.seo,
            created_at: fleet.created_at,
            updated_at: fleet.updated_at,
            sliderImages: [
              fleet.slider_image_1,
              fleet.slider_image_2,
              fleet.slider_image_3,
              fleet.slider_image_4
            ].filter(img => img && img !== 'https://dummyimage.com/120x120/000/ffffff.png&text=NO+IMAGE')
          }));
      }
    } catch (err) {
      console.error('Error fetching fleets:', err);
      error.value = 'Failed to load fleets. Please try again later.';
      // Fallback to static data if API fails
      fleets.value = getFallbackFleets();
    } finally {
      loading.value = false;
    }
  };
  
  // Fetch single fleet by slug
  const fetchFleetBySlug = async (slug) => {
    try {
      const response = await $fetch(`https://edgeranking.com/api/fleets/slug/${slug}`);
      
      if (response && response.data && response.data.length > 0) {
        return transformFleetForDetail(response.data[0]);
      } else {
        return null;
      }
    } catch (err) {
      console.error('Error fetching fleet:', err);
      throw new Error('Failed to load fleet details. Please try again later.');
    }
  };
  
  // Search fleets
  const searchFleets = (query) => {
    searchQuery.value = query;
    currentPage.value = 1; // Reset to first page when searching
  };
  
  // Filter by vehicle type
  const filterByVehicleType = (type) => {
    selectedVehicleType.value = type;
    currentPage.value = 1; // Reset to first page when filtering
  };
  
  // Filter by vehicle make
  const filterByVehicleMake = (make) => {
    selectedVehicleMake.value = make;
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
    selectedVehicleType.value = '';
    selectedVehicleMake.value = '';
    currentPage.value = 1;
  };
  
  // Helper function to safely get passenger count with null handling
  const getSafePassengerCount = (fleet) => {
    if (fleet.passenger !== null && fleet.passenger !== undefined) {
      return fleet.passenger.toString();
    }
    if (fleet.passengers !== null && fleet.passengers !== undefined) {
      return fleet.passengers.toString();
    }
    return getPassengerCount(fleet.title);
  };

  // Helper function to safely get luggage count with null handling
  const getSafeLuggageCount = (fleet) => {
    if (fleet.luggage !== null && fleet.luggage !== undefined) {
      return fleet.luggage.toString();
    }
    return getLuggageCount(fleet.title);
  };

  // Helper function to determine passenger count based on fleet title
  const getPassengerCount = (title) => {
    if (!title) {
      return '4';
    }
    
    const lowerTitle = title.toLowerCase();
    if (lowerTitle.includes('limousine') || lowerTitle.includes('stretch')) {
      return '10';
    } else if (lowerTitle.includes('suv') || lowerTitle.includes('van')) {
      return '6';
    } else if (lowerTitle.includes('town car') || lowerTitle.includes('sedan')) {
      return '4';
    } else {
      return '4';
    }
  };
  
  // Helper function to determine luggage count based on fleet title
  const getLuggageCount = (title) => {
    if (!title) {
      return '2';
    }
    
    const lowerTitle = title.toLowerCase();
    if (lowerTitle.includes('limousine') || lowerTitle.includes('stretch')) {
      return '6';
    } else if (lowerTitle.includes('suv') || lowerTitle.includes('van')) {
      return '4';
    } else if (lowerTitle.includes('town car') || lowerTitle.includes('sedan')) {
      return '2';
    } else {
      return '2';
    }
  };
  
  // Transform fleet data for detail view
  const transformFleetForDetail = (fleet) => {
    if (!fleet) {
      return {
        title: 'Luxury Vehicle',
        slug: '',
        image: '/imgs/page/homepage1/e-class.png',
        description: 'Luxury transportation with premium comfort and style.',
        longDescription: 'Experience the ultimate in luxury transportation with our premium fleet.',
        passengers: '4',
        luggage: '2',
        features: generateFeatures(null),
        specifications: generateSpecifications(null),
        pricing: generatePricing(null),
        seo: null,
        created_at: null,
        updated_at: null,
        sliderImages: []
      };
    }
    
    return {
      title: fleet.title,
      slug: fleet.slug,
      image: fleet.feature_image || '/imgs/page/homepage1/e-class.png',
      description: fleet.short_description || 'Luxury transportation with premium comfort and style.',
      longDescription: fleet.description || 'Experience the ultimate in luxury transportation with our premium fleet.',
      passengers: fleet.passenger || getPassengerCount(fleet.title),
      luggage: fleet.luggage || getLuggageCount(fleet.title),
      features: fleet.features && fleet.features.length > 0 ? fleet.features : generateFeatures(fleet.title),
      specifications: generateSpecifications(fleet),
      pricing: generatePricingFromApi(fleet) || generatePricing(fleet),
      seo: fleet.seo,
      created_at: fleet.created_at,
      updated_at: fleet.updated_at,
      sliderImages: [
        fleet.slider_image_1,
        fleet.slider_image_2,
        fleet.slider_image_3,
        fleet.slider_image_4
      ].filter(img => img && img !== 'https://dummyimage.com/120x120/000/ffffff.png&text=NO+IMAGE')
    };
  };

  // Generate pricing from API data
  const generatePricingFromApi = (fleet) => {
    if (fleet.hourly_rate) {
      return {
        hourly: `$${fleet.hourly_rate}/hour`,
        airport: `$${Math.round(fleet.hourly_rate * 0.7)}`,
        city: `$${Math.round(fleet.hourly_rate * 0.5)}`
      };
    }
    return null;
  };
  
  // Generate features based on fleet title
  const generateFeatures = (title) => {
    if (!title) {
      return [
        'Professional chauffeur service',
        'Flight monitoring',
        'Meet & greet service',
        'Complimentary WiFi',
        'Climate control'
      ];
    }
    
    const lowerTitle = title.toLowerCase();
    const features = [
      'Professional chauffeur service',
      'Flight monitoring',
      'Meet & greet service',
      'Complimentary WiFi',
      'Climate control'
    ];
    
    if (lowerTitle.includes('limousine') || lowerTitle.includes('stretch')) {
      features.push('Entertainment system', 'Bar service', 'Privacy partition');
    } else if (lowerTitle.includes('suv')) {
      features.push('Spacious interior', 'All-wheel drive', 'Premium audio system');
    } else if (lowerTitle.includes('electric') || lowerTitle.includes('eqs')) {
      features.push('Eco-friendly', 'Silent operation', 'Advanced technology');
    }
    
    return features;
  };
  
  // Generate specifications based on fleet title
  const generateSpecifications = (fleet) => {
    if (!fleet || !fleet.title) {
      return {
        'Passenger Capacity': '4',
        'Luggage Capacity': '2',
        'Vehicle Type': 'Luxury Sedan',
        'Transmission': 'Automatic',
        'Fuel Type': 'Premium Gasoline'
      };
    }
    
    const lowerTitle = fleet.title.toLowerCase();
    const specs = {
      'Passenger Capacity': getSafePassengerCount(fleet),
      'Luggage Capacity': getSafeLuggageCount(fleet),
      'Vehicle Type': 'Luxury Sedan',
      'Transmission': 'Automatic',
      'Fuel Type': 'Premium Gasoline'
    };
    
    if (lowerTitle.includes('electric') || lowerTitle.includes('eqs')) {
      specs['Fuel Type'] = 'Electric';
      specs['Range'] = '350+ miles';
    } else if (lowerTitle.includes('suv')) {
      specs['Vehicle Type'] = 'Luxury SUV';
      specs['Drivetrain'] = 'All-Wheel Drive';
    } else if (lowerTitle.includes('limousine')) {
      specs['Vehicle Type'] = 'Stretch Limousine';
      specs['Length'] = 'Extended';
    }
    
    return specs;
  };
  
  // Generate pricing based on fleet title
  const generatePricing = (fleet) => {
    if (!fleet) {
      return {
        hourly: '$140/hour',
        airport: '$100',
        city: '$70'
      };
    }
    
    // Check if fleet has dynamic pricing data from API
    if (fleet.hourly_rate && fleet.hourly_rate !== null && fleet.hourly_rate !== undefined) {
      return {
        hourly: `$${fleet.hourly_rate}/hour`,
        airport: fleet.airport_rate ? `$${fleet.airport_rate}` : '$100',
        city: fleet.city_rate ? `$${fleet.city_rate}` : '$70'
      };
    }
    
    // Fallback to static pricing based on title
    if (!fleet.title) {
      return {
        hourly: '$140/hour',
        airport: '$100',
        city: '$70'
      };
    }
    
    const lowerTitle = fleet.title.toLowerCase();
    
    if (lowerTitle.includes('limousine') || lowerTitle.includes('stretch')) {
      return {
        hourly: '$200/hour',
        airport: '$150',
        city: '$100'
      };
    } else if (lowerTitle.includes('suv')) {
      return {
        hourly: '$180/hour',
        airport: '$130',
        city: '$90'
      };
    } else if (lowerTitle.includes('electric') || lowerTitle.includes('eqs')) {
      return {
        hourly: '$160/hour',
        airport: '$120',
        city: '$80'
      };
    } else {
      return {
        hourly: '$140/hour',
        airport: '$100',
        city: '$70'
      };
    }
  };
  
  // Fallback data if API fails
  const getFallbackFleets = () => [
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
      passengers: '6',
      luggage: '4'
    }
  ];
  
  return {
    // State
    fleets: readonly(fleets),
    loading: readonly(loading),
    error: readonly(error),
    searchQuery: readonly(searchQuery),
    currentPage: readonly(currentPage),
    itemsPerPage: readonly(itemsPerPage),
    selectedVehicleType: readonly(selectedVehicleType),
    selectedVehicleMake: readonly(selectedVehicleMake),
    
    // Computed
    filteredFleets: readonly(filteredFleets),
    paginatedFleets: readonly(paginatedFleets),
    totalPages: readonly(totalPages),
    
    // Methods
    fetchFleets,
    fetchFleetBySlug,
    searchFleets,
    filterByVehicleType,
    filterByVehicleMake,
    changePage,
    clearFilters
  };
}; 