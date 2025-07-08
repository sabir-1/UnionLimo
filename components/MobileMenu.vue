<template>
  <div class="mobile-header-active mobile-header-wrapper-style perfect-scrollbar">
    <div class="mobile-header-wrapper-inner">
      <div class="mobile-header-top">
        <div class="mobile-header-logo">
          <NuxtLink to="/">
            <img src="/imgs/template/logo.svg" alt="Luxride" />
          </NuxtLink>
        </div>
        <div class="mobile-menu-close">
          <button class="mobile-menu-close-btn">
            <i class="icon-close"></i>
          </button>
        </div>
      </div>
      <div class="mobile-header-content-area">
        <div class="mobile-menu-wrap mobile-header-padding-border">
          <div class="mobile-menu">
            <ul>
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
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Mobile menu component logic
</script>

<style scoped>
/* Mobile menu styles */
</style> 