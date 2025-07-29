export default defineNuxtPlugin(() => {
  // This plugin runs only on the client side
  if (process.client) {
    // Function to initialize sliders
    const initializeSliders = () => {
      // Check if the global function exists
      if (typeof window !== 'undefined' && window.initializeAllSliders) {
        window.initializeAllSliders();
      }
    };

    // Initialize on mount
    onMounted(() => {
      setTimeout(() => {
        initializeSliders();
      }, 300);
    });

    // Watch for route changes
    const route = useRoute();
    watch(() => route.path, () => {
      setTimeout(() => {
        initializeSliders();
      }, 300);
    });

    // Watch for route completion
    watch(() => route.fullPath, () => {
      setTimeout(() => {
        initializeSliders();
      }, 400);
    });

    // Provide a method to manually initialize sliders
    return {
      provide: {
        initializeSliders
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