# UnionLimo - Premium Chauffeur & Limousine Services

A modern, responsive website for UnionLimo's premium transportation services built with Nuxt 3.

## 🚀 Features

### Shared Layout Structure
- **Unified Header & Footer**: All pages now use the same header and footer components
- **Dynamic Breadcrumbs**: Automatic breadcrumb generation with customizable navigation
- **SEO Optimization**: Built-in SEO meta tags for all pages
- **Responsive Design**: Mobile-first approach with modern UI/UX

### Key Components

#### Layout System
- `layouts/default.vue` - Main layout with shared header, footer, and breadcrumbs
- `components/Header.vue` - Unified header component
- `components/Footer.vue` - Unified footer component
- `components/BreadCrumb.vue` - Dynamic breadcrumb component

#### Page Structure
All pages now use the `default` layout with automatic SEO and breadcrumb generation:

```javascript
definePageMeta({
  layout: 'default',
  layoutProps: {
    breadcrumbTitle: 'Page Title',
    breadcrumbItems: [
      { text: 'Parent Page', link: '/parent' },
      { text: 'Current Page', link: null }
    ],
    seoTitle: 'Page Title - UnionLimo',
    seoDescription: 'Page description for SEO',
    seoKeywords: 'relevant, keywords, for, seo'
  }
})
```

### Pages

#### Home Page (`/`)
- Welcome banner and hero section
- Fleet showcase
- Service highlights
- Testimonials and latest news

#### Our Fleet (`/our-fleet`)
- Complete vehicle catalog
- Filter by vehicle type and make
- Detailed specifications
- Booking integration

#### Services (`/services`)
- Service listing page
- Individual service pages with dynamic routing
- Detailed service information
- Pricing and features

#### Contact (`/contact`)
- Contact form
- Office locations
- Interactive map
- Support information

#### Blog (`/blogs`)
- Blog listing with pagination
- Individual blog posts
- Category filtering
- SEO optimized content

## 🛠️ Technical Stack

- **Framework**: Nuxt 3
- **Styling**: CSS with responsive design
- **SEO**: Built-in meta tag management
- **Routing**: File-based routing with dynamic routes
- **Components**: Vue 3 Composition API

## 📁 Project Structure

```
UnionLimo/
├── components/          # Shared components
│   ├── Header.vue      # Main header
│   ├── Footer.vue      # Main footer
│   ├── BreadCrumb.vue  # Dynamic breadcrumbs
│   └── ...
├── layouts/            # Layout templates
│   └── default.vue     # Main layout with header/footer
├── pages/              # Page components
│   ├── home.vue        # Homepage
│   ├── our-fleet.vue   # Fleet page
│   ├── contact.vue     # Contact page
│   ├── services/       # Service pages
│   └── blogs/          # Blog pages
├── sections/           # Page sections
├── assets/             # Static assets
└── public/             # Public files
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd UnionLimo
```

2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

## 📝 Usage

### Adding New Pages

1. Create a new `.vue` file in the `pages/` directory
2. Use the default layout with SEO and breadcrumb props:

```vue
<template>
  <div>
    <!-- Your page content -->
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'default',
  layoutProps: {
    breadcrumbTitle: 'Your Page Title',
    breadcrumbItems: [
      { text: 'Parent', link: '/parent' },
      { text: 'Current', link: null }
    ],
    seoTitle: 'Your Page - UnionLimo',
    seoDescription: 'Page description',
    seoKeywords: 'relevant, keywords'
  }
})
</script>
```

### Customizing Header/Footer

Edit the shared components:
- `components/Header.vue` - Modify navigation, logo, contact info
- `components/Footer.vue` - Update footer links, social media, company info

### SEO Optimization

Each page automatically includes:
- Meta title and description
- Open Graph tags
- Twitter Card tags
- Structured data (when applicable)

## 🎨 Customization

### Styling
- Main styles are in component-specific `<style>` blocks
- Global styles can be added to `assets/` directory
- Responsive breakpoints follow Bootstrap grid system

### Content Management
- Page content is managed through Vue components
- Dynamic content can be loaded from APIs or CMS
- Images and assets are stored in `public/` directory

## 📱 Responsive Design

The website is fully responsive with:
- Mobile-first approach
- Tablet and desktop optimizations
- Touch-friendly navigation
- Optimized images for all devices

## 🔧 Development

### Code Style
- Vue 3 Composition API
- TypeScript support (optional)
- ESLint configuration
- Prettier formatting

### Performance
- Lazy loading of components
- Optimized images
- Minified CSS/JS in production
- CDN-ready static assets

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

For support and questions:
- Email: support@unionlimo.com
- Phone: +41 22 715 7000
- Website: www.unionlimo.com

---

**UnionLimo** - Premium Chauffeur & Limousine Services
