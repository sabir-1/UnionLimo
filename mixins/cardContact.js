export default {
  methods: {
    cardContact(img = '/assets/imgs/page/contact/new-york.png', title = 'New York Office', address = 'PO Box 16122 Collins Street West Victoria 8007 Australia', phone = '+32 2 512 08 15', email = 'newyork@luxride.com') {
      return {
        img,
        title,
        address,
        phone,
        email
      }
    }
  }
} 