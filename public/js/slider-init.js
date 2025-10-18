// Slider initialization script for Nuxt.js
// This script handles slider reinitialization when navigating between pages

(function($) {
    "use strict";
    
    // Global function to initialize all sliders
    window.initializeAllSliders = function() {
        // Check if jQuery and Swiper are available
        if (typeof $ === 'undefined' || typeof Swiper === 'undefined') {
            console.warn('jQuery or Swiper not available for slider initialization');
            return;
        }

        // Function to safely initialize a slider
        const safeInitSlider = (selector, initFunction) => {
            try {
                const element = document.querySelector(selector);
                if (element) {
                    // Destroy existing instance if it exists
                    if (element.swiper) {
                        element.swiper.destroy(true, true);
                    }
                    initFunction();
                }
            } catch (error) {
                console.error(`Error initializing slider ${selector}:`, error);
            }
        };

        // Initialize banner slider
        $(".swiper-banner-1").each(function () {
            safeInitSlider(this, () => {
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
        });

        // Initialize banner slider 2
        $(".swiper-banner-2").each(function () {
            safeInitSlider(this, () => {
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
        });

        // Initialize group sliders
        $(".swiper-group-1").each(function () {
            safeInitSlider(this, () => {
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
        });

        // Initialize auto group sliders
        $(".swiper-group-auto").each(function () {
            safeInitSlider(this, () => {
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

        console.log('All sliders initialized successfully');
    };

    // Helper functions
    function initSwiper1Iem(id_class, button_next_class, button_prev_class, pagination, type = "bullets") {
        var element = document.querySelector(id_class);
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
    }

    function initSwiperTestimonials(id_class, button_next_class, button_prev_class, pagination, type = "bullets") {
        var element = document.querySelector(id_class);
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
                onAny: function(eventName, ...args) {
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
    }

    // Global variables for swiper instances
    var swiper_4_fleet = null;
    var swiper_4_service = null;
    var swiper_5_cities = null;

    function initSwiperFleet() {
        try {
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
        } catch (error) {
            console.error('Error initializing fleet slider:', error);
        }
    }

    function initSwiperService() {
        try {
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
        } catch (error) {
            console.error('Error initializing service slider:', error);
        }
    }

    function initSwiperCities() {
        try {
            if (swiper_5_cities && typeof swiper_5_cities.destroy === 'function') {
                swiper_5_cities.destroy();
            }
            swiper_5_cities = new Swiper(".swiper-group-5-cities", {
                spaceBetween: 30,
                slidesPerView: 5,
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
                    1399: { slidesPerView: 5 },
                    1100: { slidesPerView: 4 },
                    600: { slidesPerView: 3 },
                    450: { slidesPerView: 2 },
                    350: { slidesPerView: 1 },
                    150: { slidesPerView: 1 }
                }
            });
        } catch (error) {
            console.error('Error initializing cities slider:', error);
        }
    }

    function initSwiper2IemSingle() {
        $(".swiper-group-2-single-fleet").each(function () {
            try {
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
            } catch (error) {
                console.error('Error initializing single fleet slider:', error);
            }
        });
    }

    function initSwiper2IemSingleBlog() {
        $(".swiper-group-2-single-blog").each(function () {
            try {
                if (this.swiper) {
                    this.swiper.destroy(true, true);
                }
                this.swiper = new Swiper(this, {
                    spaceBetween: 30,
                    slidesPerView: 2,
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
            } catch (error) {
                console.error('Error initializing single blog slider:', error);
            }
        });
    }

    function initSwiperFleet3Item() {
        $(".swiper-group-3-fleet").each(function () {
            try {
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
            } catch (error) {
                console.error('Error initializing fleet 3 item slider:', error);
            }
        });
    }

    // Initialize sliders when DOM is ready with better timing
    $(document).ready(function() {
        // Multiple timing strategies for better reliability
        setTimeout(function() {
            if (typeof window.initializeAllSliders === 'function') {
                window.initializeAllSliders();
            }
        }, 100);
        
        setTimeout(function() {
            if (typeof window.initializeAllSliders === 'function') {
                window.initializeAllSliders();
            }
        }, 500);
        
        setTimeout(function() {
            if (typeof window.initializeAllSliders === 'function') {
                window.initializeAllSliders();
            }
        }, 1000);
    });

    // Handle visibility change (when dev tools are opened/closed)
    document.addEventListener('visibilitychange', function() {
        if (!document.hidden) {
            setTimeout(function() {
                if (typeof window.initializeAllSliders === 'function') {
                    window.initializeAllSliders();
                }
            }, 100);
        }
    });

})(jQuery); 