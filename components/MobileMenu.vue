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
              <li>
                <NuxtLink to="/" exact>Home</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/our-fleet">Our Fleet</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/services">Services</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/blogs">Blog</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/contact">Contact</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/test">Test</NuxtLink>
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