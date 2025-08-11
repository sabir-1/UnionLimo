<template>
  <div class="container-sub">
    <h3>Book a Quote</h3>
    
    <!-- MyLimoBiz Online Reservation Widget -->
    <div class="reservation-widget">
      <a 
        href="https://book.mylimobiz.com/v4/UnionLimousine" 
        data-ores-widget="quickres" 
        data-ores-alias="UnionLimousine" 
        data-redirect-url="{redirect_url}"
        class="reservation-link"
      >
        Online Reservations
      </a>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  title: 'Book a Quote',
  description: 'Get a personalized quote for your transportation needs'
})

// Load MyLimoBiz widget script
onMounted(() => {
  const script = document.createElement('script')
  script.type = 'text/javascript'
  script.src = 'https://book.mylimobiz.com/v4/widgets/widget-loader.js'
  document.head.appendChild(script)
})
</script>

<style scoped>
.container-sub {
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

h3 {
  text-align: center;
  margin-bottom: 2rem;
  color: #333;
}

.reservation-widget {
  text-align: center;
  margin-top: 2rem;
}

.reservation-link {
  display: inline-block;
  padding: 1rem 2rem;
  background-color: #007bff;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  font-weight: bold;
  transition: background-color 0.3s ease;
}

.reservation-link:hover {
  background-color: #0056b3;
  color: white;
  text-decoration: none;
}
</style>

 