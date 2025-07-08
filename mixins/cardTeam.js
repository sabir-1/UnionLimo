export default {
  methods: {
    cardTeam(img = '/assets/imgs/page/our-team/team1.png', title = 'Alfonso Stanton', dept = 'Head of Experience, AU', link = '/team-single') {
      return {
        img,
        title,
        dept,
        link
      }
    }
  }
} 