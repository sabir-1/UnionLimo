// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  css: ['~/public/css/style.css'],
  modules: [],
  vite: {
    optimizeDeps: {
      include: ['swiper']
    }
  },
  app: {
    head: {
      script: [
        // jQuery and its dependencies first
        { src: '/js/vendors/jquery-3.6.0.min.js' },
        { src: '/js/vendors/jquery-migrate-3.3.0.min.js' },
        
        // Other vendor JavaScript files
        { src: '/js/vendors/bootstrap.bundle.min.js' },
        { src: '/js/vendors/modernizr-3.6.0.min.js' },
        { src: '/js/vendors/jquery-ui.js' },
        { src: '/js/vendors/jquery.theia.sticky.js' },
        { src: '/js/vendors/jquery.vticker-min.js' },
        { src: '/js/vendors/jquery.syotimer.min.js' },
        { src: '/js/vendors/jquery.countdown.min.js' },
        { src: '/js/vendors/jquery.elevatezoom.js' },
        { src: '/js/vendors/jquery.timepicker.min.js' },
        { src: '/js/vendors/TweenMax.min.js' },
        { src: '/js/vendors/counterup.js' },
        { src: '/js/vendors/isotope.js' },
        { src: '/js/vendors/noUISlider.js' },
        { src: '/js/vendors/noUISlider2.js' },
        { src: '/js/vendors/perfect-scrollbar.js' },
        { src: '/js/vendors/perfect-scrollbar.min.js' },
        { src: '/js/vendors/scrollup.js' },
        { src: '/js/vendors/slick1.js' },
        { src: '/js/vendors/slick.js' },
        { src: '/js/vendors/slider.js' },
        { src: '/js/vendors/swiper-bundle.min.js' },
        { src: '/js/vendors/custom-parallax.js' },
        { src: '/js/vendors/images-loaded.js' },
        { src: '/js/vendors/leaflet.js' },
        { src: '/js/vendors/magnific-popup.js' },
        { src: '/js/vendors/select2.min.js' },
        { src: '/js/vendors/waypoints.js' },
        { src: '/js/vendors/wow.js' },
        
        // Main JavaScript file should be loaded last
        { src: '/js/main.js', defer: true }
      ]
    }
  }
})
