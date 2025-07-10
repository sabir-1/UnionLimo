<template>
  <div>
    <h1>Test Page</h1>
    <p>This is a test page to verify that the header and footer are working correctly.</p>
    <p>If you can see this content between the header and footer, then the layout is working properly.</p>
  </div>
</template>

<script setup>
// Define layout props for SEO and breadcrumb
definePageMeta({
  layout: 'default',
  layoutProps: {
    breadcrumbTitle: 'Test Page',
    breadcrumbItems: [
      { text: 'Home', link: '/' },
      { text: 'Test', link: null }
    ],
    seoTitle: 'Test Page - UnionLimo',
    seoDescription: 'Test page to verify layout functionality',
    seoKeywords: 'test, layout, header, footer'
  }
})
</script>

<style scoped>
h1 {
  color: #333;
  text-align: center;
  margin: 50px 0;
}

p {
  text-align: center;
  color: #666;
  line-height: 1.6;
  margin: 20px 0;
}
</style> 