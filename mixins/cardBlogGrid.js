export default {
  methods: {
    cardBlogGrid(img = '/assets/imgs/page/homepage1/safe.svg', title = 'Safety First', description = 'Both you and your shipments will travel with professional drivers. Always with the highest quality standards.') {
      return {
        img,
        title,
        description
      }
    }
  }
} 