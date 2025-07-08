<template>
  <header class="header header-black-2 sticky-bar">
    <div class="container">
      <div class="main-header">
        <div class="header-left">
          <div class="header-logo wow fadeInLeft">
            <NuxtLink to="/" class="d-flex">
              <img alt="luxride" src="/imgs/template/logo.svg" />
            </NuxtLink>
          </div>
          <div class="header-nav wow fadeInDown">
            <MainMenu />
            <div class="burger-icon burger-icon-white">
              <span class="burger-icon-mid"></span>
              <span class="burger-icon-bottom"></span>
            </div>
          </div>
          <div class="header-right wow fadeInRight">
            <div class="d-none d-xxl-inline-block align-middle mr-10">
              <a href="tel:+41227157000" class="text-14-medium call-phone color-white hover-up">
                +41 22 715 7000
              </a>
            </div>
            <div class="d-none d-xxl-inline-block box-dropdown-cart align-middle mr-10">
              <span class="text-14-medium icon-list icon-account">
                <span class="text-14-medium color-white arrow-down">EN</span>
              </span>
              <div class="dropdown-account">
                <ul>
                  <li>
                    <a href="#" class="font-md">
                      <img src="/imgs/template/icons/en.png" alt="luxride" />
                      English
                    </a>
                  </li>
                  <li>
                    <a href="#" class="font-md">
                      <img src="/imgs/template/icons/fr.png" alt="luxride" />
                      French
                    </a>
                  </li>
                  <li>
                    <a href="#" class="font-md">
                      <img src="/imgs/template/icons/cn.png" alt="luxride" />
                      Chiness
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="box-button-login d-inline-block mr-10 align-middle">
              <NuxtLink to="/login" class="btn btn-default hover-up">Log In</NuxtLink>
            </div>
            <div class="box-button-login d-none2 d-inline-block align-middle">
              <NuxtLink to="/register" class="btn btn-white hover-up">Sign Up</NuxtLink>
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
/* HeaderVariation5 specific styles */
</style> 