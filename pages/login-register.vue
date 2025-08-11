<template>
  <div class="container-sub">
    <h3>Login/Register</h3>
    <a href="https://book.mylimobiz.com/v4/UnionLimousine/widget/login" data-ores-widget="login" data-ores-alias="UnionLimousine" data-redirect-url="{redirect_url}">Login</a>
  </div>
</template>

<script setup>
definePageMeta({
  title: 'Login / Register',
  description: 'Login or create a new account'
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

  