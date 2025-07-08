export default {
  methods: {
    cardCities(img = '/assets/imgs/page/homepage3/city1.png', title = 'Business Class', description = 'Mercedes-Benz E-Class, BMW 5 Series, Cadillac XTS or similar', link = '#') {
      return {
        img,
        title,
        description,
        link
      }
    }
  }
} 