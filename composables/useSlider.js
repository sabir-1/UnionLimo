export const useSlider = () => {
  // Function to check if required libraries are loaded
  const checkLibraries = () => {
    if (typeof window === 'undefined') return false;
    return typeof window['$'] !== 'undefined' && typeof window['Swiper'] !== 'undefined';
  };

  // Function to check if DOM element exists and has slides
  const checkSliderElement = (selector) => {
    if (typeof document === 'undefined') return false;
    
    const element = document.querySelector(selector);
    if (!element) return false;
    
    const slides = element.querySelectorAll('.swiper-slide');
    return slides.length > 0;
  };

  // Function to initialize slider with retry mechanism
  const initializeSlider = (selector, maxAttempts = 10) => {
    if (typeof window === 'undefined') return;
    
    let attempts = 0;
    
    const attemptInitialization = () => {
      attempts++;
      
      if (attempts > maxAttempts) {
        console.error(`Failed to initialize slider ${selector} after ${maxAttempts} attempts`);
        return;
      }
      
      // Check if required libraries are loaded
      if (!checkLibraries()) {
        console.warn(`Required libraries not loaded, retrying... (attempt ${attempts})`);
        setTimeout(attemptInitialization, 100);
        return;
      }
      
      // Check if DOM elements exist
      if (!checkSliderElement(selector)) {
        console.warn(`Slider element not found or no slides, retrying... (attempt ${attempts})`);
        setTimeout(attemptInitialization, 100);
        return;
      }
      
      // Initialize the slider
      try {
        // Try global function first
        if (typeof window.initializeAllSliders === 'function') {
          window.initializeAllSliders();
          console.log(`Slider ${selector} initialized successfully via global function`);
        } else {
          // Fallback to direct initialization based on selector
          const fallbackFunction = getFallbackFunction(selector);
          if (fallbackFunction && typeof window[fallbackFunction] === 'function') {
            window[fallbackFunction]();
            console.log(`Slider ${selector} initialized with fallback method`);
          } else {
            // Direct Swiper initialization as last resort
            directSwiperInitialization(selector);
          }
        }
      } catch (error) {
        console.error(`Error initializing slider ${selector}:`, error);
        setTimeout(attemptInitialization, 200);
      }
    };
    
    attemptInitialization();
  };

  // Direct Swiper initialization as fallback
  const directSwiperInitialization = (selector) => {
    try {
      const element = document.querySelector(selector);
      if (!element) return;

      // Destroy existing instance if it exists
      if (element.swiper) {
        element.swiper.destroy(true, true);
      }

      // Initialize based on selector type
      if (selector.includes('swiper-group-4-fleet')) {
        const swiper = new window.Swiper(selector, {
          spaceBetween: 30,
          slidesPerView: 4,
          slidesPerGroup: 1,
          initialSlide: 1,
          navigation: {
            nextEl: ".swiper-button-next-fleet",
            prevEl: ".swiper-button-prev-fleet"
          },
          pagination: {
            el: ".swiper-pagination-fleet",
            clickable: true
          },
          autoplay: {
            delay: 10000
          },
          breakpoints: {
            1399: { slidesPerView: 3 },
            1100: { slidesPerView: 3 },
            670: { slidesPerView: 2 },
            575: { slidesPerView: 1 },
            400: { slidesPerView: 1 },
            350: { slidesPerView: 1 },
            150: { slidesPerView: 1 }
          }
        });
        
        // Store the instance globally
        window.swiper_4_fleet = swiper;
        console.log(`Direct Swiper initialization successful for ${selector}`);
      }
    } catch (error) {
      console.error(`Direct Swiper initialization failed for ${selector}:`, error);
    }
  };

  // Function to get fallback function name based on selector
  const getFallbackFunction = (selector) => {
    if (selector.includes('swiper-group-4-fleet')) return 'initSwiperFleet';
    if (selector.includes('swiper-group-4-service')) return 'initSwiperService';
    if (selector.includes('swiper-group-5-cities')) return 'initSwiperCities';
    if (selector.includes('swiper-group-2-single-fleet')) return 'initSwiper2IemSingle';
    if (selector.includes('swiper-group-3-fleet')) return 'initSwiperFleet3Item';
    return null;
  };

  // Function to initialize slider with multiple timing strategies
  const initializeSliderWithTiming = (selector) => {
    // Immediate attempt
    setTimeout(() => {
      initializeSlider(selector);
    }, 50);
    
    // After DOM update
    setTimeout(() => {
      initializeSlider(selector);
    }, 100);
    
    // After longer delay
    setTimeout(() => {
      initializeSlider(selector);
    }, 300);
    
    // After window load
    if (typeof window !== 'undefined') {
      window.addEventListener('load', () => {
        setTimeout(() => {
          initializeSlider(selector);
        }, 100);
      });
    }
  };

  // Function to handle visibility change (when dev tools are opened/closed)
  const handleVisibilityChange = (selector) => {
    if (typeof document === 'undefined') return;
    
    document.addEventListener('visibilitychange', () => {
      if (!document.hidden) {
        setTimeout(() => {
          initializeSlider(selector);
        }, 100);
      }
    });
  };

  // Function to handle window resize
  const handleResize = (selector) => {
    if (typeof window === 'undefined') return;
    
    let resizeTimer;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        initializeSlider(selector);
      }, 250);
    });
  };

  return {
    initializeSlider,
    initializeSliderWithTiming,
    handleVisibilityChange,
    handleResize,
    checkLibraries,
    checkSliderElement,
    directSwiperInitialization
  };
}; 