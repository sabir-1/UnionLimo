export const useSitemap = () => {
  const generateSitemap = async () => {
    const baseUrl = 'https://www.unionlimousine.com' // Replace with your actual domain

    // Static routes with priorities
    const staticRoutes = [
      { url: '/', priority: 1.0, changefreq: 'daily' },
      { url: '/about', priority: 0.8, changefreq: 'monthly' },
      { url: '/contact', priority: 0.8, changefreq: 'monthly' },
      { url: '/book-a-quote', priority: 0.9, changefreq: 'weekly' },
      { url: '/login-register', priority: 0.3, changefreq: 'monthly' },
      { url: '/services', priority: 0.9, changefreq: 'weekly' },
      { url: '/fleets', priority: 0.9, changefreq: 'weekly' },
      { url: '/blogs', priority: 0.8, changefreq: 'weekly' }
    ]

    // Try to fetch dynamic content (services, fleets, blogs)
    let dynamicRoutes = []

    try {
      // Fetch services
      const { data: services } = await $fetch('/api/services')
      if (services) {
        dynamicRoutes.push(...services.map(service => ({
          url: `/services/${service.slug}`,
          priority: 0.8,
          changefreq: 'weekly',
          lastmod: service.updated_at || new Date().toISOString()
        })))
      }
    } catch (error) {
      console.warn('Could not fetch services for sitemap:', error)
    }

    try {
      // Fetch fleets
      const { data: fleets } = await $fetch('/api/fleets')
      if (fleets) {
        dynamicRoutes.push(...fleets.map(fleet => ({
          url: `/fleets/${fleet.slug}`,
          priority: 0.8,
          changefreq: 'weekly',
          lastmod: fleet.updated_at || new Date().toISOString()
        })))
      }
    } catch (error) {
      console.warn('Could not fetch fleets for sitemap:', error)
    }

    try {
      // Fetch blogs
      const { data: blogs } = await $fetch('/api/blogs')
      if (blogs) {
        dynamicRoutes.push(...blogs.map(blog => ({
          url: `/blogs/${blog.slug}`,
          priority: 0.7,
          changefreq: 'weekly',
          lastmod: blog.updated_at || new Date().toISOString()
        })))
      }
    } catch (error) {
      console.warn('Could not fetch blogs for sitemap:', error)
    }

    // Combine all routes
    const allRoutes = [
      ...staticRoutes.map(route => ({
        ...route,
        lastmod: new Date().toISOString()
      })),
      ...dynamicRoutes
    ]

    return allRoutes
  }

  return {
    generateSitemap
  }
}
