<template>
  <header class="header sticky-bar">
    <div class="container">
      <div class="main-header">
        <div class="header-left">
          <div class="header-logo wow fadeInLeft">
            <NuxtLink to="/" class="d-flex">
              <img alt="luxride" src="/imgs/template/logo.svg" />
            </NuxtLink>
          </div>
          <div class="header-nav wow fadeInDown">
            <nav class="nav-main-menu d-none d-xl-block">
              <ul class="main-menu">
                <li class="has-children">
                  <NuxtLink to="/" class="active">Home</NuxtLink>
                  <ul class="sub-menu">
                    <li><NuxtLink to="/">Homepage 1</NuxtLink></li>
                    <li><NuxtLink to="/index-2">Homepage 2</NuxtLink></li>
                    <li><NuxtLink to="/index-3">Homepage 3</NuxtLink></li>
                    <li><NuxtLink to="/index-4">Homepage 4</NuxtLink></li>
                    <li><NuxtLink to="/index-5">Homepage 5</NuxtLink></li>
                    <li><NuxtLink to="/index-6">Homepage 6</NuxtLink></li>
                    <li><NuxtLink to="/index-7">Homepage 7</NuxtLink></li>
                    <li><NuxtLink to="/index-8">Homepage 8</NuxtLink></li>
                    <li><NuxtLink to="/index-9">Homepage 9</NuxtLink></li>
                    <li><NuxtLink to="/index-10">Homepage 10</NuxtLink></li>
                  </ul>
                </li>
                <li class="has-children">
                  <a href="#">Pages</a>
                  <ul class="sub-menu">
                    <li><NuxtLink to="/about">About</NuxtLink></li>
                    <li><NuxtLink to="/about-2">About 2</NuxtLink></li>
                    <li><NuxtLink to="/our-team">Our team</NuxtLink></li>
                    <li><NuxtLink to="/team-single">Team single</NuxtLink></li>
                    <li><NuxtLink to="/login">Login</NuxtLink></li>
                    <li><NuxtLink to="/register">Register</NuxtLink></li>
                    <li><NuxtLink to="/pricing">Pricing</NuxtLink></li>
                    <li><NuxtLink to="/coming-soon">Coming soon</NuxtLink></li>
                    <li><NuxtLink to="/404">Error 404</NuxtLink></li>
                    <li><NuxtLink to="/booking-vehicle">Booking vehicle</NuxtLink></li>
                    <li><NuxtLink to="/booking-extra">Booking Extra</NuxtLink></li>
                    <li><NuxtLink to="/booking-passenger">Booking Passenger</NuxtLink></li>
                    <li><NuxtLink to="/booking-payment">Booking Payment</NuxtLink></li>
                    <li><NuxtLink to="/booking-receved">Booking Receieved</NuxtLink></li>
                    <li><NuxtLink to="/invoice">Invoice</NuxtLink></li>
                  </ul>
                </li>
                <li class="has-children">
                  <NuxtLink to="/fleet-list">Our Fleet</NuxtLink>
                  <ul class="sub-menu">
                    <li><NuxtLink to="/fleet-list">Our Fleet 1</NuxtLink></li>
                    <li><NuxtLink to="/fleet-list-2">Our Fleet 2</NuxtLink></li>
                    <li><NuxtLink to="/fleet-list-3">Our Fleet 3</NuxtLink></li>
                    <li><NuxtLink to="/fleet-list-4">Our Fleet 4</NuxtLink></li>
                    <li><NuxtLink to="/fleet-single">Fleet single</NuxtLink></li>
                  </ul>
                </li>
                <li class="has-children">
                  <NuxtLink to="/service-grid">Services</NuxtLink>
                  <ul class="sub-menu">
                    <li><NuxtLink to="/service-grid">Service Listing</NuxtLink></li>
                    <li><NuxtLink to="/service-grid-2">Service Listing 2</NuxtLink></li>
                    <li><NuxtLink to="/service-grid-3">Service Listing 3</NuxtLink></li>
                    <li><NuxtLink to="/service-single">Service Single</NuxtLink></li>
                  </ul>
                </li>
                <li class="has-children">
                  <NuxtLink to="/blog-list">Blog</NuxtLink>
                  <ul class="sub-menu">
                    <li><NuxtLink to="/blog-grid">Blog Grid</NuxtLink></li>
                    <li><NuxtLink to="/blog-grid-2">Blog Grid 2</NuxtLink></li>
                    <li><NuxtLink to="/blog-list">Blog List</NuxtLink></li>
                    <li><NuxtLink to="/blog-single">Blog Single</NuxtLink></li>
                  </ul>
                </li>
                <li>
                  <NuxtLink to="/contact">Contact</NuxtLink>
                </li>
              </ul>
            </nav>
            <div class="burger-icon burger-icon-white">
              <span class="burger-icon-mid"></span>
              <span class="burger-icon-bottom"></span>
            </div>
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
  </header>
</template>

<script setup>
// Component logic can be added here
</script>

<style scoped>
/* Header specific styles */
</style> 