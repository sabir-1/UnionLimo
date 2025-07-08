<template>
  <header class="header header-homepage5 sticky-bar">
    <div class="header-top-main">
      <div class="container-sub">
        <div class="header-top">
          <div class="header-top-1 wow fadeInLeft">
            <div class="d-inline-block align-middle">
              <a href="tel:+41227157000" class="text-14-medium call-phone color-white hover-up">
                +41 22 715 7000
              </a>
            </div>
          </div>
          <div class="header-top-2 wow fadeInDown">
            <NuxtLink to="/" class="d-flex">
              <img alt="Luxride" src="/imgs/template/logo.svg" />
            </NuxtLink>
          </div>
          <div class="header-top-3 wow fadeInRight">
            <div class="d-inline-block box-dropdown-cart align-middle mr-15">
              <span class="text-14-medium icon-list icon-account">
                <span class="text-14-medium color-white arrow-down">EN</span>
              </span>
              <div class="dropdown-account">
                <ul>
                  <li>
                    <a href="#" class="font-md">
                      <img src="/imgs/template/icons/en.png" alt="Luxride" />
                      English
                    </a>
                  </li>
                  <li>
                    <a href="#" class="font-md">
                      <img src="/imgs/template/icons/fr.png" alt="Luxride" />
                      French
                    </a>
                  </li>
                  <li>
                    <a href="#" class="font-md">
                      <img src="/imgs/template/icons/cn.png" alt="Luxride" />
                      Chiness
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="d-inline-block box-socials-header">
              <a href="#" class="icon-socials icon-facebook"></a>
              <a href="#" class="icon-socials icon-twitter"></a>
              <a href="#" class="icon-socials icon-instagram"></a>
              <a href="#" class="icon-socials icon-linkedin"></a>
            </div>
            <div class="burger-icon burger-icon-white">
              <span class="burger-icon-mid"></span>
              <span class="burger-icon-bottom"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="header-top-sub">
      <div class="container-sub">
        <div class="main-header">
          <div class="header-left">
            <div class="header-nav wow fadeInLeft">
              <MainMenu />
              <div class="burger-icon burger-icon-white">
                <span class="burger-icon-mid"></span>
                <span class="burger-icon-bottom"></span>
              </div>
            </div>
            <div class="header-right wow fadeInRight">
              <div class="box-button-login d-inline-block mr-10 align-middle">
                <NuxtLink to="/login" class="btn btn-default">Log In</NuxtLink>
              </div>
              <div class="box-button-login d-none2 d-inline-block align-middle">
                <NuxtLink to="/register" class="btn btn-white">Sign Up</NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import MainMenu from '~/components/MainMenu.vue'
</script>

<style scoped>
/* HeaderVariation7 specific styles */
</style> 