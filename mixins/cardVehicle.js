export default {
  methods: {
    cardVehicle(img = '/assets/imgs/page/booking/img-vehicle.png', title = 'Business Class', desc = 'Mercedes-Benz E-Class, BMW 5 Series, Cadillac XTS or similar', price = '$125.25', include = 'All prices include VAT, fees & tip.', link = '/booking-extra') {
      return {
        img,
        title,
        desc,
        price,
        include,
        link,
        facilities: [
          'Meet & Greet included',
          'Free cancellation',
          'Free Waiting time',
          'Safe and secure travel'
        ]
      }
    }
  }
} 