export default function useCompanyData() {
  const companyData = ref(null)
  const loading = ref(true) // Start with loading true to show skeleton immediately
  const error = ref(null)

  const fetchCompanyData = async () => {
    loading.value = true
    error.value = null
    
    try {
      const response = await $fetch('https://cms.unionlimousine.com/api/company/data')
      companyData.value = response.data[0] // Get first company data
    } catch (err) {
      error.value = err.message || 'Failed to fetch company data'
      console.error('Error fetching company data:', err)
    } finally {
      loading.value = false
    }
  }

  // Computed properties for easy access to specific data
  const logo = computed(() => companyData.value?.logo || {})
  const contact = computed(() => companyData.value?.contact || {})
  const address = computed(() => companyData.value?.address || {})
  const social = computed(() => companyData.value?.social || {})
  const copyright = computed(() => companyData.value?.copyright || '')
  const companyName = computed(() => companyData.value?.name || 'UnionLimo')

  return {
    companyData,
    loading,
    error,
    fetchCompanyData,
    logo,
    contact,
    address,
    social,
    copyright,
    companyName
  }
} 