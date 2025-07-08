export default {
  methods: {
    cardService(img = '/assets/imgs/page/homepage1/service1.png', title = 'Business Class', description = 'Mercedes-Benz E-Class, BMW 5 Series, Cadillac XTS or similar', link = '/service-single') {
      return {
        img,
        title,
        description,
        link
      }
    },
    
    cardServiceStyle2(img = '/assets/imgs/page/homepage1/service1.png', title = 'Business Class', description = 'Mercedes-Benz E-Class, BMW 5 Series, Cadillac XTS or similar', link = '/service-single') {
      return {
        img,
        title,
        description,
        link
      }
    },
    
    cardServiceStyle3(img = '/assets/imgs/page/homepage1/service1.png', title = 'Business Class', link = '/service-single') {
      return {
        img,
        title,
        link
      }
    },
    
    cardServiceStyle4(img = '/assets/imgs/page/homepage1/service1.png', title = 'Business Class', link = '/service-single') {
      return {
        img,
        title,
        link
      }
    },
    
    cardServiceStyle5(img = '/assets/imgs/page/homepage1/service1.png', title = 'Intercity Rides', desc = 'The price of tickets for low-cost airlines for a specific route has a much larger spread than that of regular airlines. It depends on the time to departure, demand and competition on the route. Unlike regular airlines, low-cost airlines rarely offer cheap tickets more than 3 months before departure.', link = '/service-single') {
      return {
        img,
        title,
        desc,
        link
      }
    }
  }
} 