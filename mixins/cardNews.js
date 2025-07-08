export default {
  methods: {
    cardNews(img = '/assets/imgs/page/homepage1/news1.png', title = '3 hidden-gem destinations for your wish list', tag = 'Travel', date = '14.', monthYear = 'Jun, 2023', link = '/blog-single') {
      return {
        img,
        title,
        tag,
        date,
        monthYear,
        link
      }
    }
  }
} 