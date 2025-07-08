# LuxRide Nuxt.js Mixins

This folder contains Vue.js mixins converted from the original Pug mixins. These mixins provide reusable data structures for various card components used throughout the LuxRide application.

## Available Mixins

### 1. cardBlogGrid
- **Purpose**: Blog grid card data structure
- **Parameters**: `img`, `title`, `description`
- **Usage**: `this.cardBlogGrid(img, title, description)`

### 2. cardService
- **Purpose**: Service card data structures (5 different styles)
- **Methods**: 
  - `cardService(img, title, description, link)`
  - `cardServiceStyle2(img, title, description, link)`
  - `cardServiceStyle3(img, title, link)`
  - `cardServiceStyle4(img, title, link)`
  - `cardServiceStyle5(img, title, desc, link)`

### 3. cardNews
- **Purpose**: News/Blog card data structure
- **Parameters**: `img`, `title`, `tag`, `date`, `monthYear`, `link`
- **Usage**: `this.cardNews(img, title, tag, date, monthYear, link)`

### 4. cardFleet
- **Purpose**: Fleet card data structures (3 different styles)
- **Methods**:
  - `cardFleet(img, title, description, passenger, luggage, link)`
  - `cardFleetStyle2(img, title, description, passenger, luggage, link)`
  - `cardFleetStyle3(img, title, description, passenger, luggage, link)`

### 5. cardCities
- **Purpose**: Cities card data structure
- **Parameters**: `img`, `title`, `description`, `link`
- **Usage**: `this.cardCities(img, title, description, link)`

### 6. cardContact
- **Purpose**: Contact card data structure
- **Parameters**: `img`, `title`, `address`, `phone`, `email`
- **Usage**: `this.cardContact(img, title, address, phone, email)`

### 7. cardTeam
- **Purpose**: Team member card data structure
- **Parameters**: `img`, `title`, `dept`, `link`
- **Usage**: `this.cardTeam(img, title, dept, link)`

### 8. choosePlan
- **Purpose**: Pricing plan card data structure
- **Parameters**: `img`, `title`, `desc`, `price1`, `price2`
- **Usage**: `this.choosePlan(img, title, desc, price1, price2)`

### 9. cardVehicle
- **Purpose**: Vehicle booking card data structure
- **Parameters**: `img`, `title`, `desc`, `price`, `include`, `link`
- **Usage**: `this.cardVehicle(img, title, desc, price, include, link)`

### 10. cardHowWork
- **Purpose**: How it works card data structures (2 styles)
- **Methods**:
  - `cardHowWork(number, title, description)`
  - `cardHowWorkStyle2(number, title, description)`

## How to Use

### Method 1: Import specific mixin
```javascript
import { cardBlogGrid } from '@/mixins/cardBlogGrid'

export default {
  mixins: [cardBlogGrid],
  data() {
    return {
      blogData: this.cardBlogGrid(
        '/assets/imgs/page/homepage1/safe.svg',
        'Safety First',
        'Both you and your shipments will travel with professional drivers.'
      )
    }
  }
}
```

### Method 2: Import all mixins
```javascript
import mixins from '@/mixins'

export default {
  mixins: [mixins.cardBlogGrid, mixins.cardService],
  data() {
    return {
      blogData: this.cardBlogGrid(),
      serviceData: this.cardService()
    }
  }
}
```

### Method 3: Global mixin registration
In your `nuxt.config.ts`:
```typescript
export default defineNuxtConfig({
  // ... other config
  plugins: [
    '~/mixins/index.js'
  ]
})
```

## Example Component Usage

```vue
<template>
  <div class="cardIconTitleDesc wow fadeInRight">
    <div class="cardIcon">
      <img :src="blogData.img" alt="luxride">
    </div>
    <div class="cardTitle">
      <h5 class="text-20-medium color-text">{{ blogData.title }}</h5>
    </div>
    <div class="cardDesc">
      <p class="text-16 color-text">{{ blogData.description }}</p>
    </div>
  </div>
</template>

<script>
import { cardBlogGrid } from '@/mixins/cardBlogGrid'

export default {
  mixins: [cardBlogGrid],
  data() {
    return {
      blogData: this.cardBlogGrid()
    }
  }
}
</script>
```

## Notes

- All image paths have been updated to use `/assets/` prefix for Nuxt.js compatibility
- Link paths have been updated to use Vue Router format (e.g., `/service-single` instead of `service-single.html`)
- The mixins return data objects that can be used directly in your Vue components
- All default values are preserved from the original Pug mixins 