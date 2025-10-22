export default defineNuxtPlugin(() => {
  // Add structured data for organization
  const addStructuredData = () => {
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "UnionLimo",
      "description": "Premium Chauffeur and Limousine Services",
      "url": "https://www.unionlimousine.com",
      "logo": "https://www.unionlimousine.com/imgs/template/logo.svg",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+1-XXX-XXX-XXXX",
        "contactType": "customer service",
        "availableLanguage": "English"
      },
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Your Street Address",
        "addressLocality": "Your City",
        "addressRegion": "Your State",
        "postalCode": "Your ZIP",
        "addressCountry": "US"
      },
      "sameAs": [
        "https://facebook.com/unionlimo",
        "https://twitter.com/unionlimo",
        "https://instagram.com/unionlimo"
      ]
    }

    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.textContent = JSON.stringify(structuredData)
    document.head.appendChild(script)
  }

  // Add service structured data
  const addServiceStructuredData = () => {
    const services = [
      {
        "@type": "Service",
        "name": "Airport Transfers",
        "description": "Professional airport transfer services",
        "provider": {
          "@type": "Organization",
          "name": "UnionLimo"
        }
      },
      {
        "@type": "Service",
        "name": "Corporate Transport",
        "description": "Executive transportation for business",
        "provider": {
          "@type": "Organization",
          "name": "UnionLimo"
        }
      },
      {
        "@type": "Service",
        "name": "Wedding Cars",
        "description": "Luxury wedding transportation",
        "provider": {
          "@type": "Organization",
          "name": "UnionLimo"
        }
      }
    ]

    services.forEach(service => {
      const script = document.createElement('script')
      script.type = 'application/ld+json'
      script.textContent = JSON.stringify(service)
      document.head.appendChild(script)
    })
  }

  // Initialize structured data
  if (process.client) {
    addStructuredData()
    addServiceStructuredData()
  }
})
