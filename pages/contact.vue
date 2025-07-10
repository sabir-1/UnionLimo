<template>
    <div>
        <ContactOffices/>
        <ContactMap/>
        <ContactForm/> 
    </div>
</template>

<script setup>
import ContactOffices from '~/sections/contact/ContactOffices.vue'
import ContactForm from '~/sections/contact/ContactForm.vue'
import ContactMap from '~/sections/contact/ContactMap.vue'

// Define layout props for SEO and breadcrumb
definePageMeta({
  layout: 'default',
  layoutProps: {
    breadcrumbTitle: 'Contact Us',
    breadcrumbItems: [
      { text: 'Contact', link: null }
    ],
    seoTitle: 'Contact Us - UnionLimo',
    seoDescription: 'Get in touch with UnionLimo for premium chauffeur and limousine services. Contact our team for bookings, inquiries and support.',
    seoKeywords: 'contact unionlimo, chauffeur booking, limousine service contact, customer support'
  }
})
</script>