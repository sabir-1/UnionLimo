<template>
  <div class="container-sub">
    <h3>Client Login & Register</h3>
    <!-- <div class="auth-links">
      <a href="https://book.mylimobiz.com/v4/UnionLimousine/widget/login" data-ores-widget="login" data-ores-alias="UnionLimousine" :data-redirect-url="redirectUrl">Login</a>
      <a href="https://book.mylimobiz.com/v4/UnionLimousine" data-ores-widget="website" data-ores-alias="UnionLimousine">Online Reservations</a>
    </div> -->

    <div class="reservation-widget mb-40">
      <a 
        href="https://book.mylimobiz.com/v4/UnionLimousine/widget/login" 
        data-ores-widget="login" 
        data-ores-alias="UnionLimousine"
        class="reservation-link"
      >
        Online Reservations
      </a>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'

onMounted(() => {
  const script = document.createElement('script')
  script.type = 'text/javascript'
  script.src = 'https://book.mylimobiz.com/v4/widgets/widget-loader.js'
  document.head.appendChild(script)
})
// Get current domain for redirect URL
const redirectUrl = process.client ? window.location.origin + '/login-register' : 'https://unionlimo.com/login-register'

// Define layout props for SEO and breadcrumb
definePageMeta({
  layout: 'default',
  layoutProps: {
    breadcrumbTitle: 'Login & Register',
    breadcrumbItems: [
      { text: 'Login & Register', link: null }
    ],
    seoTitle: 'Client Login & Register - UnionLimo',
    seoDescription: 'Get in touch with UnionLimo for premium chauffeur and limousine services. Contact our team for bookings, inquiries and support.',
    seoKeywords: 'contact unionlimo, chauffeur booking, limousine service contact, customer support'
  }
})

// useHead({
//   script: [
//     {
//       src: 'https://book.mylimobiz.com/v4/widgets/widget-loader.js',
//       type: 'text/javascript'
//     }
//   ]
// })
</script>

<style scoped>
h3 {
  text-align: center;
  margin: 2rem;
  color: #333;
}

.auth-links {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  margin: 2rem 0;
}

.auth-links a {
  display: inline-block;
  padding: 12px 24px;
  background-color: #007bff;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s ease;
  min-width: 200px;
  text-align: center;
}

.auth-links a:hover {
  background-color: #0056b3;
  color: white;
  text-decoration: none;
}
</style>

  