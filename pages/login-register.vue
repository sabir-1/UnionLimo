<template>
  <div class="container-sub">
    <h3>Client Login & Register</h3>
    <a href="https://book.mylimobiz.com/v4/UnionLimousine/widget/login" data-ores-widget="login" data-ores-alias="UnionLimousine" data-redirect-url="{redirect_url}">Login</a>
  </div>
</template>

<script setup>
 
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

useHead({
  script: [
    {
      src: 'https://book.mylimobiz.com/v4/widgets/widget-loader.js',
      type: 'text/javascript'
    }
  ]
})
</script>

<style scoped>
h3 {
  text-align: center;
  margin: 2rem;
  color: #333;
}
</style>

  