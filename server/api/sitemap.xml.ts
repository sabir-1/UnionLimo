export default defineSitemapEventHandler(async (e) => {
  const baseUrl = process.env.NUXT_PUBLIC_SITE_URL || 'https://www.unionlimousine.com'
  
  // Static routes with proper priorities
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
  
  // Dynamic routes for services (replace with your actual service slugs)
  const servicesRoutes = [
    '/services/airport-transfers',
    '/services/corporate-transport',
    '/services/wedding-cars',
    '/services/executive-cars',
    '/services/luxury-cars',
    '/services/group-transport'
  ].map(route => ({
    url: route,
    priority: 0.8,
    changefreq: 'weekly'
  }))
  
  // Dynamic routes for fleets (replace with your actual fleet slugs)
  const fleetRoutes = [
    '/fleets/mercedes-s-class',
    '/fleets/bmw-7-series',
    '/fleets/audi-a8',
    '/fleets/rolls-royce-phantom',
    '/fleets/bentley-flying-spur',
    '/fleets/tesla-model-s'
  ].map(route => ({
    url: route,
    priority: 0.8,
    changefreq: 'weekly'
  }))
  
  // Dynamic routes for blogs (replace with your actual blog slugs)
  const blogRoutes = [
    '/blogs/luxury-travel-tips',
    '/blogs/airport-transport-guide',
    '/blogs/corporate-transport-benefits',
    '/blogs/wedding-car-selection',
    '/blogs/executive-transport-etiquette'
  ].map(route => ({
    url: route,
    priority: 0.7,
    changefreq: 'weekly'
  }))
  
  // Combine all routes
  const allRoutes = [
    ...staticRoutes,
    ...servicesRoutes,
    ...fleetRoutes,
    ...blogRoutes
  ]
  
  // Generate sitemap entries
  const sitemapEntries = allRoutes.map(route => ({
    loc: `${baseUrl}${route.url}`,
    lastmod: new Date().toISOString(),
    changefreq: route.changefreq,
    priority: route.priority
  }))
  
  return sitemapEntries
})
