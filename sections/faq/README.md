# FAQ Components

This directory contains the FAQ components extracted from the gulp project and converted to Nuxt.js Vue components.

## Components

### 1. FaqSection.vue
The main FAQ section component that displays FAQ items in an accordion format.

**Features:**
- Two FAQ categories: "Billing" and "Features"
- Bootstrap-style accordion functionality
- Responsive design
- Smooth animations
- Custom styling matching the original design

**Usage:**
```vue
<template>
  <FaqSection />
</template>

<script setup>
import FaqSection from '~/sections/faq/FaqSection.vue'
</script>
```

### 2. FaqBreadcrumb.vue
A breadcrumb component for the FAQ page with navigation links.

**Features:**
- Gradient background
- Animated entrance effects
- Responsive design
- Navigation links using NuxtLink

**Usage:**
```vue
<template>
  <FaqBreadcrumb />
</template>

<script setup>
import FaqBreadcrumb from '~/sections/faq/FaqBreadcrumb.vue'
</script>
```

## Complete FAQ Page

A complete FAQ page is available at `pages/faq.vue` that combines both components:

```vue
<template>
  <div>
    <FaqBreadcrumb />
    <FaqSection />
  </div>
</template>
```

## Customization

### Adding New FAQ Items
To add new FAQ items, modify the `billingFaqs` and `featuresFaqs` arrays in `FaqSection.vue`:

```javascript
const billingFaqs = ref([
  {
    question: 'Your question here?',
    answer: 'Your answer here.'
  }
  // Add more items...
])
```

### Styling
The components use scoped styles that match the original gulp project design. You can customize the colors, spacing, and animations by modifying the CSS in each component.

### Adding New Categories
To add new FAQ categories, you can:
1. Create a new array similar to `billingFaqs`
2. Add a new section in the template
3. Update the `toggleFaq` function to handle the new category

## Dependencies

These components are built for Nuxt.js and use:
- Vue 3 Composition API
- NuxtLink for navigation
- CSS animations and transitions
- Responsive design principles

## Original Source

These components were converted from the gulp project files:
- `src/views/sections/faq/detail.pug`
- `src/views/sections/faq/breadcrumb.pug` 