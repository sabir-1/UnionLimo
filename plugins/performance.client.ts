export default defineNuxtPlugin(() => {
  // This plugin runs only on the client side
  if (process.client) {
    // Wait for DOM to be ready
    onMounted(() => {
      // Initialize sliders after a short delay
      setTimeout(() => {
        initializeSliders();
      }, 200);
    });

    // Watch for route changes
    const route = useRoute();
    watch(() => route.path, () => {
      // Reinitialize sliders when route changes
      nextTick(() => {
        setTimeout(() => {
          initializeSliders();
        }, 200);
      });
    });
  }
});

// Function to initialize all sliders
const initializeSliders = () => {
  // Check if jQuery and Swiper are available
  if (typeof window !== 'undefined' && window.$ && window.Swiper) {
    const $ = window.$;
    const Swiper = window.Swiper;

    // Initialize banner slider
    $(".swiper-banner-1").each(function (this: any) {
      // Destroy existing instance if it exists
      if (this.swiper) {
        this.swiper.destroy(true, true);
      }
      
      // Create new Swiper instance
      this.swiper = new Swiper(this, {
        slidesPerView: 1,
        loop: true,
        navigation: {
          nextEl: ".swiper-button-next-banner",
          prevEl: ".swiper-button-prev-banner"
        },
        pagination: {
          el: ".swiper-pagination",
          type: "fraction"
        },
        autoplay: {
          delay: 10000
        }
      });
    });

    // Initialize banner slider 2
    $(".swiper-banner-2").each(function (this: any) {
      // Destroy existing instance if it exists
      if (this.swiper) {
        this.swiper.destroy(true, true);
      }
      
      // Create new Swiper instance
      this.swiper = new Swiper(this, {
        slidesPerView: 1,
        loop: true,
        navigation: {
          nextEl: ".swiper-button-next-banner-2",
          prevEl: ".swiper-button-prev-banner-2"
        },
        pagination: {
          el: ".swiper-pagination-banner-2",
          clickable: true
        },
        autoplay: {
          delay: 10000
        }
      });
    });

    // Initialize group sliders
    $(".swiper-group-1").each(function (this: any) {
      // Destroy existing instance if it exists
      if (this.swiper) {
        this.swiper.destroy(true, true);
      }
      
      // Create new Swiper instance
      this.swiper = new Swiper(this, {
        slidesPerView: 1,
        loop: true,
        navigation: {
          nextEl: ".swiper-button-next-group-1",
          prevEl: ".swiper-button-prev-group-1"
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        autoplay: {
          delay: 10000
        }
      });
    });

    // Initialize auto group sliders
    $(".swiper-group-auto").each(function (this: any) {
      // Destroy existing instance if it exists
      if (this.swiper) {
        this.swiper.destroy(true, true);
      }
      
      // Create new Swiper instance
      this.swiper = new Swiper(this, {
        slidesPerView: "auto",
        spaceBetween: 70,
        loop: true,
        navigation: {
          nextEl: ".swiper-button-next-group-auto",
          prevEl: ".swiper-button-prev-group-auto"
        },
        pagination: {
          el: ".swiper-pagination-group-auto",
          clickable: true
        },
        autoplay: {
          delay: 1000000
        },
        on: {
          beforeInit: function () {
            // set padding left slide fleet
            var leftTitle = 0;
            var titleFleet = $(".title-fleet");
            if (titleFleet.length > 0) {
              leftTitle = titleFleet.offset().left;
            }
            if ($(".box-slide-fleet").length > 0) {
              $(".box-slide-fleet").css("padding-left", leftTitle + "px");
            }
          }
        }
      });
    });

    // Initialize other sliders as needed
    // Add more slider initializations here based on your needs
  }
};

// Extend window interface to include jQuery and Swiper
declare global {
  interface Window {
    $: any;
    Swiper: any;
  }
} 