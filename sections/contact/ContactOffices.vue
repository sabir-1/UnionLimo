<template>
  <section class="section pt-60 pb-60">
    <div class="container-sub">
      <div class="row">
        <div class="col-lg-4 col-sm-6 mb-30">
          <CardContact 
            img="/imgs/page/contact/new-york.png" 
            title="Phone Number" 
            phone="+1 (718) 514-9881" 
          />
        </div>
        <div class="col-lg-4 col-sm-6 mb-30">
          <CardContact 
            img="/imgs/page/contact/istabul.png"
            title="Email Address" 
            email="info@unionlimo.com"
          />
        </div>
        <div class="col-lg-4 col-sm-6 mb-30">
          <CardContact 
            img="/imgs/page/contact/paris.png"
            title="Office Address"
            address="PO Box 16122 Collins Street West Victoria 8007 Australia" 
          />
        </div>
         
      </div>
    </div>
  </section>
</template>

<script setup>
// Import the CardContact component
import CardContact from '~/components/CardContact.vue';
</script>

<style scoped>
/* Component styles here if needed */
</style> 