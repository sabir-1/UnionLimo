<template>
    <div>
        <HeaderVariation3 />
        <BreadCrumb/>
        <ContactOffices/>
        <ContactMap/>
        <ContactForm/> 
        <FooterVariation7/>
    </div>
</template>

<script setup>
import HeaderVariation3 from '~/components/HeaderVariation3.vue'
import FooterVariation7 from '~/components/FooterVariation7.vue'
import BreadCrumb from '~/sections/contact/Breadcrumb.vue'
import ContactOffices from '~/sections/contact/ContactOffices.vue'
import ContactForm from '~/sections/contact/ContactForm.vue'
import ContactMap from '~/sections/contact/ContactMap.vue'
</script>