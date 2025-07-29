import useCompanyData from '~/composables/useCompanyData.js'

export default defineNuxtPlugin(() => {
  const { logo, fetchCompanyData } = useCompanyData()

  // Fetch company data and update favicon
  onMounted(async () => {
    await fetchCompanyData()
    
    // Update favicon if available from API
    if (logo.value?.favicon) {
      const faviconLink = document.querySelector('link[rel="icon"]') || document.createElement('link')
      faviconLink.setAttribute('rel', 'icon')
      faviconLink.setAttribute('href', logo.value.favicon)
      
      if (!document.querySelector('link[rel="icon"]')) {
        document.head.appendChild(faviconLink)
      }
    }
  })
}) 