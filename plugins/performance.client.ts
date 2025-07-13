export default defineNuxtPlugin(() => {
  // Lazy load images
  const lazyLoadImages = () => {
    const images = document.querySelectorAll('img[data-src]')
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement
          img.src = img.dataset.src!
          img.classList.remove('lazy')
          observer.unobserve(img)
        }
      })
    })

    images.forEach(img => imageObserver.observe(img))
  }

  // Defer non-critical CSS
  const deferCSS = () => {
    const links = document.querySelectorAll('link[rel="stylesheet"][data-defer]')
    links.forEach(link => {
      link.setAttribute('media', 'print')
      link.setAttribute('onload', "this.media='all'")
    })
  }

  // Optimize scroll performance
  const optimizeScroll = () => {
    let ticking = false
    const scrollHandler = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          // Handle scroll events here
          ticking = false
        })
        ticking = true
      }
    }
    window.addEventListener('scroll', scrollHandler, { passive: true })
  }

  // Initialize optimizations when DOM is ready
  if (process.client) {
    document.addEventListener('DOMContentLoaded', () => {
      lazyLoadImages()
      deferCSS()
      optimizeScroll()
    })
  }
}) 