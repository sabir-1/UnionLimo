export default {
  methods: {
    cardHowWork(number = '1', title = 'Safety First', description = 'Both you and your shipments will travel with professional drivers. Always with the highest quality standards.') {
      return {
        number,
        title,
        description
      }
    },
    
    cardHowWorkStyle2(number = '01', title = 'Create Your Route', description = 'Enter your pickup & dropoff locations or the number of hours you wish to book a car and driver for') {
      return {
        number,
        title,
        description
      }
    }
  }
} 