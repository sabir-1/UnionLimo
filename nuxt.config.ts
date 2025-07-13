// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  css: ['~/public/css/style.css'],
  
  // Performance optimizations
  nitro: {
    compressPublicAssets: true,
    minify: true,
    prerender: {
      crawlLinks: true,
      routes: ['/']
    }
  },
  
  // Vite optimizations
  vite: {
    optimizeDeps: {
      include: ['swiper']
    },
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ['vue', 'vue-router'],
            jquery: ['jquery'],
            bootstrap: ['bootstrap']
          }
        }
      }
    },
    css: {
      devSourcemap: false
    }
  },
  
  // Performance modules
  modules: [
    '@nuxtjs/robots',
    '@nuxtjs/sitemap'
  ],
  
  // App configuration with optimized script loading
  app: {
    head: {
      // Preload critical resources
      link: [
        { rel: 'preload', href: '/css/style.css', as: 'style' },
        { rel: 'preload', href: '/js/vendors/jquery-3.6.0.min.js', as: 'script' },
        { rel: 'dns-prefetch', href: '//fonts.googleapis.com' },
        { rel: 'dns-prefetch', href: '//cdnjs.cloudflare.com' }
      ],
      
      script: [
        // Critical scripts loaded first
        { src: '/js/vendors/jquery-3.6.0.min.js', defer: true },
        { src: '/js/vendors/jquery-migrate-3.3.0.min.js', defer: true },
        
        // Non-critical scripts loaded with async/defer
        { src: '/js/vendors/bootstrap.bundle.min.js', defer: true },
        { src: '/js/vendors/modernizr-3.6.0.min.js', defer: true },
        { src: '/js/vendors/jquery-ui.js', defer: true },
        { src: '/js/vendors/jquery.theia.sticky.js', defer: true },
        { src: '/js/vendors/jquery.vticker-min.js', defer: true },
        { src: '/js/vendors/jquery.syotimer.min.js', defer: true },
        { src: '/js/vendors/jquery.countdown.min.js', defer: true },
        { src: '/js/vendors/jquery.elevatezoom.js', defer: true },
        { src: '/js/vendors/jquery.timepicker.min.js', defer: true },
        { src: '/js/vendors/TweenMax.min.js', defer: true },
        { src: '/js/vendors/counterup.js', defer: true },
        { src: '/js/vendors/isotope.js', defer: true },
        { src: '/js/vendors/noUISlider.js', defer: true },
        { src: '/js/vendors/noUISlider2.js', defer: true },
        { src: '/js/vendors/perfect-scrollbar.js', defer: true },
        { src: '/js/vendors/perfect-scrollbar.min.js', defer: true },
        { src: '/js/vendors/scrollup.js', defer: true },
        { src: '/js/vendors/slick1.js', defer: true },
        { src: '/js/vendors/slick.js', defer: true },
        { src: '/js/vendors/slider.js', defer: true },
        { src: '/js/vendors/swiper-bundle.min.js', defer: true },
        { src: '/js/vendors/custom-parallax.js', defer: true },
        { src: '/js/vendors/images-loaded.js', defer: true },
        { src: '/js/vendors/leaflet.js', defer: true },
        { src: '/js/vendors/magnific-popup.js', defer: true },
        { src: '/js/vendors/select2.min.js', defer: true },
        { src: '/js/vendors/waypoints.js', defer: true },
        { src: '/js/vendors/wow.js', defer: true },
        
        // Main JavaScript file loaded last
        { src: '/js/main.js', defer: true }
      ],
      
      // Performance meta tags
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' }
      ]
    }
  }
})
