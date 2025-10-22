# SEO Setup Guide for UnionLimo

## ✅ Completed Setup

### 1. Robots.txt
- ✅ Created `/public/robots.txt` with proper configuration
- ✅ Configured to allow all search engines
- ✅ Added sitemap reference
- ✅ Disallowed private/admin areas

### 2. Dynamic Sitemap
- ✅ Created `/server/api/sitemap.xml.ts` for dynamic sitemap generation
- ✅ Configured `@nuxtjs/sitemap` module in nuxt.config.ts
- ✅ Added static and dynamic routes
- ✅ Set proper priorities and change frequencies

### 3. SEO Configuration
- ✅ Created `composables/useSEO.js` for reusable SEO functions
- ✅ Added structured data support
- ✅ Created SEO plugin for client-side structured data
- ✅ Environment variable support for domain configuration

## 🔧 Configuration Files

### robots.txt
Located at `/public/robots.txt`
```
User-agent: *
Allow: /

# Sitemap
Sitemap: https://www.unionlimousine.com/sitemap.xml

# Disallow admin and private areas
Disallow: /admin/
Disallow: /private/
Disallow: /api/
Disallow: /_nuxt/
Disallow: /login-register
```

### Sitemap Configuration
The sitemap is automatically generated at `/sitemap.xml` and includes:
- Static pages with proper priorities
- Dynamic service pages
- Dynamic fleet pages  
- Dynamic blog pages
- Proper lastmod, changefreq, and priority values

### SEO Composable
Use `useSEO()` composable in your pages for consistent SEO:

```javascript
const { generateSEOMeta, generateStructuredData } = useSEO()

// Generate meta tags
const seoMeta = generateSEOMeta({
  title: 'Custom Page Title',
  description: 'Custom description',
  keywords: 'custom, keywords'
})

// Generate structured data
const structuredData = generateStructuredData('service', {
  name: 'Airport Transfers',
  description: 'Professional airport transfer service'
})
```

## 🌐 Environment Variables

Create a `.env` file with your domain:

```env
NUXT_PUBLIC_SITE_URL=https://www.unionlimousine.com
```

## 📊 SEO Features

### Meta Tags
- Dynamic title and description
- Open Graph tags for social sharing
- Twitter Card support
- Canonical URLs
- Viewport and theme color

### Structured Data
- Organization schema
- Service schema for services
- Product schema for vehicles
- Article schema for blogs
- Breadcrumb schema

### Performance
- Optimized sitemap generation
- Gzip compression
- Proper caching headers
- Mobile-first responsive design

## 🚀 Usage

### For Static Pages
```javascript
definePageMeta({
  layout: 'default',
  layoutProps: {
    seoTitle: 'Page Title - UnionLimo',
    seoDescription: 'Page description for SEO',
    seoKeywords: 'relevant, keywords, for, seo'
  }
})
```

### For Dynamic Pages
```javascript
const { generateSEOMeta } = useSEO()

const seoMeta = generateSEOMeta({
  title: `${service.name} - UnionLimo`,
  description: service.description,
  keywords: service.keywords
})

useHead(seoMeta)
```

## 🔍 Testing

### Check robots.txt
Visit: `https://www.unionlimousine.com/robots.txt`

### Check sitemap
Visit: `https://www.unionlimousine.com/sitemap.xml`

### SEO Testing Tools
- Google Search Console
- Google PageSpeed Insights
- GTmetrix
- Screaming Frog SEO Spider

## 📈 Next Steps

1. **Update Domain**: Replace `https://www.unionlimousine.com` with your actual domain
2. **Add Analytics**: Configure Google Analytics and Search Console
3. **Content Optimization**: Ensure all pages have unique, descriptive content
4. **Image Optimization**: Add alt tags and optimize image sizes
5. **Performance**: Monitor Core Web Vitals and optimize accordingly

## 🛠️ Maintenance
 
- Update sitemap when adding new pages
- Monitor search console for crawl errors
- Keep meta descriptions under 160 characters
- Ensure all images have alt attributes
- Regular content updates for better rankings
