export const useSEO = () => {
  const baseUrl = 'https://www.unionlimousine.com' // Replace with your actual domain

  // Default SEO configuration
  const defaultSEO = {
    title: 'UnionLimo - Premium Chauffeur & Limousine Services',
    description: 'Professional chauffeur and limousine services for airport transfers, corporate transport, weddings, and special events. Luxury vehicles and experienced drivers.',
    keywords: 'chauffeur service, limousine, luxury transport, airport transfer, corporate transport, wedding cars, executive transport',
    image: '/imgs/template/logo.svg',
    type: 'website'
  }

  // Generate SEO meta tags
  const generateSEOMeta = (pageSEO = {}) => {
    const seo = { ...defaultSEO, ...pageSEO }

    return {
      title: seo.title,
      meta: [
        { name: 'description', content: seo.description },
        { name: 'keywords', content: seo.keywords },
        { name: 'author', content: 'UnionLimo' },
        { name: 'robots', content: 'index, follow' },
        { name: 'googlebot', content: 'index, follow' },

        // Open Graph
        { property: 'og:title', content: seo.title },
        { property: 'og:description', content: seo.description },
        { property: 'og:image', content: `${baseUrl}${seo.image}` },
        { property: 'og:url', content: `${baseUrl}${useRoute().path}` },
        { property: 'og:type', content: seo.type },
        { property: 'og:site_name', content: 'UnionLimo' },

        // Twitter Card
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: seo.title },
        { name: 'twitter:description', content: seo.description },
        { name: 'twitter:image', content: `${baseUrl}${seo.image}` },

        // Additional SEO
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
        { name: 'theme-color', content: '#1a1a1a' }
      ],
      link: [
        { rel: 'canonical', href: `${baseUrl}${useRoute().path}` },
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'apple-touch-icon', href: '/imgs/template/favicon.png' }
      ]
    }
  }

  // Generate structured data for different page types
  const generateStructuredData = (type, data = {}) => {
    const baseStructuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "UnionLimo",
      "url": baseUrl,
      "logo": `${baseUrl}/imgs/template/logo.svg`,
      "description": "Premium Chauffeur and Limousine Services"
    }

    switch (type) {
      case 'service':
        return {
          "@context": "https://schema.org",
          "@type": "Service",
          "name": data.name || "Luxury Transportation Service",
          "description": data.description || "Professional chauffeur service",
          "provider": {
            "@type": "Organization",
            "name": "UnionLimo",
            "url": baseUrl
          },
          "areaServed": data.areaServed || "United States",
          "serviceType": data.serviceType || "Transportation"
        }

      case 'vehicle':
        return {
          "@context": "https://schema.org",
          "@type": "Product",
          "name": data.name || "Luxury Vehicle",
          "description": data.description || "Premium transportation vehicle",
          "brand": {
            "@type": "Brand",
            "name": data.brand || "Luxury Brand"
          },
          "category": "Vehicle",
          "offers": {
            "@type": "Offer",
            "availability": "https://schema.org/InStock",
            "priceCurrency": "USD"
          }
        }

      case 'article':
        return {
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": data.title || "Blog Article",
          "description": data.description || "Blog article content",
          "author": {
            "@type": "Organization",
            "name": "UnionLimo"
          },
          "publisher": {
            "@type": "Organization",
            "name": "UnionLimo",
            "logo": {
              "@type": "ImageObject",
              "url": `${baseUrl}/imgs/template/logo.svg`
            }
          },
          "datePublished": data.publishedAt || new Date().toISOString(),
          "dateModified": data.updatedAt || new Date().toISOString()
        }

      default:
        return baseStructuredData
    }
  }

  // Generate breadcrumb structured data
  const generateBreadcrumbStructuredData = (items) => {
    return {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": items.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": item.text,
        "item": item.link ? `${baseUrl}${item.link}` : undefined
      }))
    }
  }

  return {
    generateSEOMeta,
    generateStructuredData,
    generateBreadcrumbStructuredData,
    defaultSEO
  }
}
