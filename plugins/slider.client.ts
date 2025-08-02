export default defineNuxtPlugin(() => {
  // This plugin runs only on the client side
  if (process.client) {
    // Function to initialize sliders with better timing
    const initializeSliders = () => {
      // Check if the global function exists
      if (typeof window !== 'undefined' && window.initializeAllSliders) {
        try {
          window.initializeAllSliders();
        } catch (error) {
          console.warn('Error initializing sliders:', error);
          // Retry after a delay
          setTimeout(() => {
            if (typeof window !== 'undefined' && window.initializeAllSliders) {
              window.initializeAllSliders();
            }
          }, 200);
        }
      }
    };

    // Function to initialize sliders with retry mechanism
    const initializeSlidersWithRetry = () => {
      let attempts = 0;
      const maxAttempts = 5;
      
      const attemptInitialization = () => {
        attempts++;
        
        if (attempts > maxAttempts) {
          console.warn('Failed to initialize sliders after maximum attempts');
          return;
        }
        
        // Check if required libraries are loaded
        const globalWindow = window as any;
        if (typeof globalWindow.$ === 'undefined' || typeof globalWindow.Swiper === 'undefined') {
          setTimeout(attemptInitialization, 100);
          return;
        }
        
        // Check if DOM is ready
        if (document.readyState !== 'complete') {
          setTimeout(attemptInitialization, 100);
          return;
        }
        
        initializeSliders();
      };
      
      attemptInitialization();
    };

    // Initialize on mount with better timing
    onMounted(() => {
      // Use multiple timing strategies
      setTimeout(() => {
        initializeSlidersWithRetry();
      }, 100);
      
      // Also try after a longer delay
      setTimeout(() => {
        initializeSlidersWithRetry();
      }, 500);
      
      // And after window load
      if (typeof window !== 'undefined') {
        window.addEventListener('load', () => {
          setTimeout(initializeSlidersWithRetry, 100);
        });
      }
    });

    // Watch for route changes with better timing
    const route = useRoute();
    watch(() => route.path, () => {
      setTimeout(() => {
        initializeSlidersWithRetry();
      }, 200);
    });

    // Watch for route completion with better timing
    watch(() => route.fullPath, () => {
      setTimeout(() => {
        initializeSlidersWithRetry();
      }, 300);
    });

    // Handle window resize events
    if (typeof window !== 'undefined') {
      let resizeTimer: NodeJS.Timeout;
      window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
          initializeSliders();
        }, 250);
      });
    }

    // Handle visibility change (when dev tools are opened/closed)
    if (typeof document !== 'undefined') {
      document.addEventListener('visibilitychange', () => {
        if (!document.hidden) {
          setTimeout(() => {
            initializeSlidersWithRetry();
          }, 100);
        }
      });
    }

    // Provide a method to manually initialize sliders
    return {
      provide: {
        initializeSliders: initializeSlidersWithRetry
      }
    };
  }
});

// Extend window interface
declare global {
  interface Window {
    initializeAllSliders?: () => void;
  }
} 