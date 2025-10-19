<template>
  <!-- Main application scripts -->
</template>

<script setup>
// Main application scripts
onMounted(() => {
  // Wait for DOM to be ready
  nextTick(() => {
    // Initialize sliders after a short delay to ensure DOM is fully rendered
    setTimeout(() => {
      initializeSliders();
    }, 100);
  });
});

// Function to initialize all sliders
const initializeSliders = () => {
  // Check if jQuery and Swiper are available
  if (typeof $ === 'undefined' || typeof Swiper === 'undefined') {
    console.warn('jQuery or Swiper not available');
    return;
  }

  // Initialize banner slider
  $(".swiper-banner-1").each(function () {
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
  $(".swiper-banner-2").each(function () {
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
  $(".swiper-group-1").each(function () {
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
  $(".swiper-group-auto").each(function () {
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

  // Initialize testimonials sliders
  if ($(".swiper-group-testimonials").length > 0) {
    initSwiperTestimonials(".swiper-group-testimonials", ".swiper-button-next-testimonials", ".swiper-button-prev-testimonials", ".swiper-pagination-testimonials");
  }

  if ($(".swiper-group-testimonials-2").length > 0) {
    initSwiper1Iem(".swiper-group-testimonials-2", ".swiper-button-next-testimonials-2", ".swiper-button-prev-testimonials-2", ".swiper-pagination-testimonials-2", "fraction");
  }

  if ($(".swiper-group-testimonials-fraction").length > 0) {
    initSwiper1Iem(".swiper-group-testimonials-fraction", ".swiper-button-next-testimonials-fraction", ".swiper-button-prev-testimonials-fraction", ".swiper-pagination-testimonials-fraction", "fraction");
  }

  // Initialize fleet sliders
  if ($(".swiper-group-4-fleet").length > 0) {
    initSwiperFleet();
  }

  // Initialize service sliders
  if ($(".swiper-group-4-service").length > 0) {
    initSwiperService();
  }

  // Initialize cities sliders
  if ($(".swiper-group-5-cities").length > 0) {
    initSwiperCities();
  }

  // Initialize single fleet sliders
  if ($(".swiper-group-2-single-fleet").length > 0) {
    initSwiper2IemSingle();
  }

  // Initialize single blog sliders
  if ($(".swiper-group-2-single-blog").length > 0) {
    initSwiper2IemSingleBlog();
  }

  // Initialize fleet 3 item sliders
  initSwiperFleet3Item();
};

// Helper functions from main.js
const initSwiper1Iem = (id_class, button_next_class, button_prev_class, pagination, type = "bullets") => {
  const element = document.querySelector(id_class);
  if (element && element.swiper) {
    element.swiper.destroy(true, true);
  }
  
  if (element) {
    element.swiper = new Swiper(id_class, {
      slidesPerView: 1,
      loop: true,
      navigation: {
        nextEl: button_next_class,
        prevEl: button_prev_class
      },
      pagination: {
        el: pagination,
        clickable: true,
        type: type
      },
      autoplay: {
        delay: 10000
      }
    });
  }
};

const initSwiperTestimonials = (id_class, button_next_class, button_prev_class, pagination, type = "bullets") => {
  const element = document.querySelector(id_class);
  if (element && element.swiper) {
    element.swiper.destroy(true, true);
  }
  
  if (element) {
    element.swiper = new Swiper(id_class, {
      slidesPerView: 1,
      loop: true,
      navigation: {
        nextEl: button_next_class,
        prevEl: button_prev_class
      },
      pagination: {
        el: pagination,
        clickable: true,
        type: type
      },
      autoplay: {
        delay: 10000
      },
      on: {
        beforeInit: function (swiper) {
          var slides_count = $(id_class).find(".swiper-slide");
          var lastNumber = slides_count.length;
          if (lastNumber > 0) {
            $(".firstNumber").html("01");
          }
          if (lastNumber > 0) {
            if (lastNumber < 10) {
              lastNumber = "0" + lastNumber;
            }
            $(".lastNumber").html(lastNumber);
          }
        }
      },
      onAny(eventName, ...args) {
        if (eventName == "slidePrevTransitionEnd" || eventName == "slideNextTransitionEnd") {
          var activeNum = args[0].realIndex + 1;
          if (activeNum > 0) {
            if (activeNum < 10) {
              activeNum = "0" + activeNum;
            }
            $(id_class).find(".firstNumber").html(activeNum);
          }
        }
      }
    });
  }
};

// Global variables for swiper instances
let swiper_4_fleet = null;
let swiper_4_service = null;
let swiper_5_cities = null;

const initSwiperFleet = () => {
  if (swiper_4_fleet && typeof swiper_4_fleet.destroy === 'function') {
    swiper_4_fleet.destroy();
  }
  swiper_4_fleet = new Swiper(".swiper-group-4-fleet", {
    spaceBetween: 30,
    slidesPerView: 3,
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
    on: {
      beforeInit: function () {
        var leftTitle = 0;
        var titleFleet = $(".title-fleet");
        if (titleFleet.length > 0) {
          leftTitle = titleFleet.offset().left;
        }
        if ($(".box-slide-fleet").length > 0) {
          $(".box-slide-fleet").css("padding-left", leftTitle + "px");
        }
      }
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
};

const initSwiperService = () => {
  if (swiper_4_service && typeof swiper_4_service.destroy === 'function') {
    swiper_4_service.destroy();
  }
  swiper_4_service = new Swiper(".swiper-group-4-service", {
    spaceBetween: 30,
    slidesPerView: 3,
    slidesPerGroup: 1,
    loop: true,
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
    on: {
      beforeInit: function () {
        var titleFleet = $(".title-fleet");
        var leftTitle = titleFleet.offset().left;
        $(".box-slide-fleet").css("padding-left", leftTitle + "px");
      }
    },
    breakpoints: {
      1399: { slidesPerView: 3 },
      1100: { slidesPerView: 3 },
      600: { slidesPerView: 2 },
      500: { slidesPerView: 1 },
      350: { slidesPerView: 1 },
      150: { slidesPerView: 1 }
    }
  });
};

const initSwiperCities = () => {
  if (swiper_5_cities && typeof swiper_5_cities.destroy === 'function') {
    swiper_5_cities.destroy();
  }
  swiper_5_cities = new Swiper(".swiper-group-5-cities", {
    spaceBetween: 30,
    slidesPerView: 4,
    slidesPerGroup: 1,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next-cities",
      prevEl: ".swiper-button-prev-cities"
    },
    pagination: {
      el: ".swiper-pagination-cities",
      clickable: true
    },
    autoplay: {
      delay: 10000
    },
    breakpoints: {
      1399: { slidesPerView: 4 },
      1100: { slidesPerView: 3 },
      670: { slidesPerView: 2 },
      575: { slidesPerView: 1 },
      400: { slidesPerView: 1 },
      350: { slidesPerView: 1 },
      150: { slidesPerView: 1 }
    }
  });
};

const initSwiper2IemSingle = () => {
  $(".swiper-group-2-single-fleet").each(function () {
    if (this.swiper) {
      this.swiper.destroy(true, true);
    }
    this.swiper = new Swiper(this, {
      spaceBetween: 30,
      slidesPerView: 2,
      slidesPerGroup: 1,
      loop: true,
      navigation: {
        nextEl: ".swiper-button-next-single-fleet",
        prevEl: ".swiper-button-prev-single-fleet"
      },
      pagination: {
        el: ".swiper-pagination-single-fleet",
        clickable: true
      },
      autoplay: {
        delay: 10000
      },
      breakpoints: {
        1399: { slidesPerView: 2 },
        1100: { slidesPerView: 2 },
        670: { slidesPerView: 1 },
        575: { slidesPerView: 1 },
        400: { slidesPerView: 1 },
        350: { slidesPerView: 1 },
        150: { slidesPerView: 1 }
      }
    });
  });
};

const initSwiper2IemSingleBlog = () => {
  $(".swiper-group-2-single-blog").each(function () {
    if (this.swiper) {
      this.swiper.destroy(true, true);
    }
    this.swiper = new Swiper(this, {
      spaceBetween: 30,
      slidesPerView: 1,
      slidesPerGroup: 1,
      loop: true,
      navigation: {
        nextEl: ".swiper-button-next-blog",
        prevEl: ".swiper-button-prev-blog"
      },
      pagination: {
        el: ".swiper-pagination-blog",
        clickable: true
      },
      autoplay: {
        delay: 5000,
        disableOnInteraction: false
      }
    });
  });
};

const initSwiperFleet3Item = () => {
  $(".swiper-group-3-fleet").each(function () {
    if (this.swiper) {
      this.swiper.destroy(true, true);
    }
    this.swiper = new Swiper(this, {
      spaceBetween: 30,
      slidesPerView: 3,
      slidesPerGroup: 1,
      loop: true,
      navigation: {
        nextEl: ".swiper-button-next-fleet-3",
        prevEl: ".swiper-button-prev-fleet-3"
      },
      pagination: {
        el: ".swiper-pagination-fleet-3",
        clickable: true
      },
      autoplay: {
        delay: 10000
      },
      breakpoints: {
        1399: { slidesPerView: 3 },
        1100: { slidesPerView: 2 },
        670: { slidesPerView: 1 },
        575: { slidesPerView: 1 },
        400: { slidesPerView: 1 },
        350: { slidesPerView: 1 },
        150: { slidesPerView: 1 }
      }
    });
  });
};

// Watch for route changes to reinitialize sliders
const route = useRoute();
watch(() => route.path, () => {
  // Reinitialize sliders when route changes
  nextTick(() => {
    setTimeout(() => {
      initializeSliders();
    }, 100);
  });
});
</script> 