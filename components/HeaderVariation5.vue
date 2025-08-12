<template>
  <header class="header header-black-2 sticky-bar">
    <div class="container">
      <div class="main-header">
        <div class="header-left">
          <div class="header-logo wow fadeInLeft">
            <NuxtLink to="/" class="d-flex">
              <img :alt="companyName" :src="logo.header || '/imgs/template/logo.svg'" />
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
              <a :href="`tel:${contact.phone_primary}`" class="text-14-medium call-phone color-white hover-up">
                {{ contact.phone_primary || '+1 (718) 514-9881' }}
              </a>
            </div>
            
            <div class="box-button-login d-inline-block mr-10 align-middle custom-style-bt">
              <NuxtLink to="/login-register" class="btn btn-default hover-up"> Login / Register</NuxtLink>
            </div>
            <div class="box-button-quote d-inline-block align-middle custom-style-bt">
              <NuxtLink to="/book-a-quote" class="btn btn-white hover-up">Schedule Ride Now</NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
  <div class="mobile-header-active mobile-header-wrapper-style perfect-scrollbar">
      <div class="mobile-header-wrapper-inner">
        <div class="mobile-header-content-area">
          <div class="perfect-scroll">
            <div class="mobile-menu-wrap mobile-header-border">
              <nav class="mt-15">
                <ul class="mobile-menu font-heading">
                  <li>
        <NuxtLink to="/" exact>Home</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/fleets">Our Fleets</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/services">Services</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/blogs">Blogs</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/about">About Us</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/contact">Contact</NuxtLink>
      </li> 
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script setup>
import MainMenu from '~/components/MainMenu.vue'
import useCompanyData from '~/composables/useCompanyData.js'

// Use company data composable
const { logo, contact, companyName, fetchCompanyData } = useCompanyData()

// Fetch company data on component mount
onMounted(() => {
  fetchCompanyData()
})
</script>

<style scoped>
/* HeaderVariation5 specific styles */
</style> 