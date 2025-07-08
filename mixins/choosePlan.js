export default {
  methods: {
    choosePlan(img = '/assets/imgs/page/pricing/free.png', title = 'Basic', desc = 'Standard listing submission, active for 30 dayss', price1 = 'Free', price2 = 'Free') {
      return {
        img,
        title,
        desc,
        price1,
        price2,
        features: [
          'All Operating Supported',
          'Great Interface',
          'Allows encryption',
          'Face recognized system',
          '24/7 Full support'
        ]
      }
    }
  }
} 