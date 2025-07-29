<template>
  <!-- This component doesn't render anything visible -->
</template>

<script setup>
// Component to handle slider reinitialization on route changes

onMounted(() => {
  // Initialize sliders when component mounts
  nextTick(() => {
    setTimeout(() => {
      if (typeof window !== 'undefined' && window.initializeAllSliders) {
        window.initializeAllSliders();
      }
    }, 200);
  });
});

// Watch for route changes
const route = useRoute();
watch(() => route.path, () => {
  // Reinitialize sliders when route changes
  nextTick(() => {
    setTimeout(() => {
      if (typeof window !== 'undefined' && window.initializeAllSliders) {
        window.initializeAllSliders();
      }
    }, 200);
  });
});

// Watch for route completion
watch(() => route.fullPath, () => {
  // Reinitialize sliders when route fully changes
  nextTick(() => {
    setTimeout(() => {
      if (typeof window !== 'undefined' && window.initializeAllSliders) {
        window.initializeAllSliders();
      }
    }, 300);
  });
});
</script> 