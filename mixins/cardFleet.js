export default {
  methods: {
    cardFleet(img = '/assets/imgs/page/homepage1/e-class.png', title = 'Business Class', description = 'Mercedes-Benz E-Class, BMW 5 Series, Cadillac XTS or similar', passenger = '4', luggage = '2', link = '/fleet-single') {
      return {
        img,
        title,
        description,
        passenger,
        luggage,
        link
      }
    },
    
    cardFleetStyle2(img = '/assets/imgs/page/homepage1/e-class.png', title = 'Business Class', description = 'Mercedes-Benz E-Class, BMW 5 Series, Cadillac XTS or similar', passenger = '4', luggage = '2', link = '#') {
      return {
        img,
        title,
        description,
        passenger,
        luggage,
        link
      }
    },
    
    cardFleetStyle3(img = '/assets/imgs/page/homepage1/e-class.png', title = 'Business Class', description = 'Mercedes-Benz E-Class, BMW 5 Series, Cadillac XTS or similar', passenger = '4', luggage = '2', link = '#') {
      return {
        img,
        title,
        description,
        passenger,
        luggage,
        link
      }
    }
  }
} 