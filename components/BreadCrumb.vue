<template>
  <section class="section pt-60 pb-60 bg-primary">
    <div class="container-sub">
      <h1 class="heading-44-medium color-white mb-5 wow fadeInDown">
        <slot name="title">Services</slot>
      </h1>
      <div class="box-breadcrumb wow fadeInUp">
        <ul>
          <li>
            <NuxtLink to="/">Home</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/services">Services</NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup>
// No script logic needed for static breadcrumb
</script>

<style scoped>
/* Add any custom styles if needed */
</style>
