<template>
  <section class="section pt-60 pb-60">
    <div class="container-sub">
      <div class="row">
        <div class="col-lg-3 col-sm-6 mb-30">
          <CardContact 
            img="/imgs/page/contact/new-york.png"
            title="New York Office"
            address="PO Box 16122 Collins Street West Victoria 8007 Australia"
            phone="+32 2 512 08 15"
            email="newyork@luxride.com"
          />
        </div>
        <div class="col-lg-3 col-sm-6 mb-30">
          <CardContact 
            img="/imgs/page/contact/istabul.png"
            title="Istanbul Office"
            address="PO Box 16122 Collins Street West Victoria 8007 Australia"
            phone="+32 2 512 08 15"
            email="istanbul@luxride.com"
          />
        </div>
        <div class="col-lg-3 col-sm-6 mb-30">
          <CardContact 
            img="/imgs/page/contact/paris.png"
            title="Paris Office"
            address="PO Box 16122 Collins Street West Victoria 8007 Australia"
            phone="+32 2 512 08 15"
            email="paris@luxride.com"
          />
        </div>
        <div class="col-lg-3 col-sm-6 mb-30">
          <CardContact 
            img="/imgs/page/contact/london.png"
            title="London Office"
            address="PO Box 16122 Collins Street West Victoria 8007 Australia"
            phone="+32 2 512 08 15"
            email="london@luxride.com"
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