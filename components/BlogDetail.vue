<template>
  <section class="section pt-60 bg-white latest-new-white">
    <div class="container-sub">
      <div class="box-frature-image mb-60 wow fadeInDown">
        <div class="cardImage">
          <div class="datePost">
            <div class="heading-52-medium color-white">{{ blogData.date }}</div>
            <p class="text-14 color-white">{{ blogData.monthYear }}</p>
          </div>
          <img :src="blogData.featuredImage" :alt="blogData.title">
        </div>
      </div>
      
      <h2 class="heading-44-medium mb-30 wow fadeInUp">{{ blogData.title }}</h2>
      
      <div class="content-single wow fadeInLeft">
        <p v-for="(paragraph, index) in blogData.content" :key="index">{{ paragraph }}</p>
        
        <blockquote v-if="blogData.quote">
          "{{ blogData.quote }}"
        </blockquote>
        
        <p v-for="(paragraph, index) in blogData.additionalContent" :key="'additional-' + index">{{ paragraph }}</p>
        
        <p v-if="blogData.middleImage">
          <img :src="blogData.middleImage" alt="luxride">
        </p>
        
        <div class="row" v-if="blogData.galleryImages && blogData.galleryImages.length > 0">
          <div class="col-lg-6 mb-30" v-for="(image, index) in blogData.galleryImages" :key="index">
            <img :src="image" alt="luxride">
          </div>
        </div>
        
        <p v-for="(paragraph, index) in blogData.finalContent" :key="'final-' + index">{{ paragraph }}</p>
        
        <h2 class="heading-44-medium" v-if="blogData.subtitle">{{ blogData.subtitle }}</h2>
        
        <p v-for="(paragraph, index) in blogData.subtitleContent" :key="'subtitle-' + index">{{ paragraph }}</p>
      </div>
      
      <div class="box-share-tags mt-50 wow fadeInRight">
        <div class="row align-items-center">
          <div class="col-lg-6 mb-30 text-lg-start text-center">
            <span class="text-16-medium color-text mr-15">Share</span>
            <div class="d-inline-block social-single">
              <a class="icon-socials icon-facebook" href="#"></a>
              <a class="icon-socials icon-twitter" href="#"></a>
              <a class="icon-socials icon-instagram" href="#"></a>
              <a class="icon-socials icon-linkedin" href="#"></a>
            </div>
          </div>
          <div class="col-lg-6 text-lg-end mb-30 text-center">
            <a class="btn btn-tag mr-10 mb-10" href="#" v-for="tag in blogData.tags" :key="tag">{{ tag }}</a>
          </div>
        </div>
      </div>
      
      <div class="border-bottom mb-30 mt-60"></div>
      
      <div class="author-box wow fadeInLeft" v-if="blogData.author">
        <div class="item-author">
          <div class="item-author-image">
            <img :src="blogData.author.image" :alt="blogData.author.name">
          </div>
          <div class="item-author-info">
            <h6 class="text-18-medium">{{ blogData.author.name }}</h6>
            <p class="text-14 color-grey">{{ blogData.author.position }}</p>
            <p class="text-16 color-text">{{ blogData.author.bio }}</p>
          </div>
        </div>
      </div>
      
      <div class="border-bottom mb-30 mt-60"></div>
      
      <!-- <div class="box-pagination-single wow fadeInLeft" v-if="blogData.navigation">
        <div class="row align-items-center">
          <div class="col-lg-5 col-sm-5 col-5" v-if="blogData.navigation.prev">
            <div class="box-pager-inner">
              <a class="prev-page text-18-medium" :href="blogData.navigation.prev.link">
                Prev
                <svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"></path>
                </svg>
              </a>
              <p class="pl-40 text-16 color-text d-none d-sm-block">{{ blogData.navigation.prev.title }}</p>
            </div>
          </div>
          <div class="col-lg-2 text-center col-sm-2 col-2">
            <a href="/blogs">
              <img src="/imgs/page/blog2/grid.png" alt="luxride">
            </a>
          </div>
          <div class="col-lg-5 col-sm-5 col-5" v-if="blogData.navigation.next">
            <div class="box-pager-inner text-end">
              <a class="next-page text-18-medium" :href="blogData.navigation.next.link">
                Next
                <svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"></path>
                </svg>
              </a>
              <p class="pr-40 text-16 color-text d-none d-sm-block">{{ blogData.navigation.next.title }}</p>
            </div>
          </div>
        </div>
      </div> -->
      
      <!-- <div class="border-bottom mb-50 mt-25"></div> -->
      
      <!-- <div class="box-reviews wow fadeInLeft" v-if="blogData.reviews && blogData.reviews.length > 0">
        <h5 class="text-20-medium color-text mb-30">Reviews</h5>
        <div class="item-reviews" v-for="review in blogData.reviews" :key="review.id">
          <div class="item-author-info">
            <div class="item-avatar">{{ review.avatar }}</div>
            <div class="item-info">
              <h6 class="text-16-medium">{{ review.name }}</h6>
              <p class="text-14 color-grey">{{ review.date }}</p>
            </div>
          </div>
          <div class="item-desc">
            <p class="color-text text-16">{{ review.comment }}</p>
          </div>
          <div class="buttons-like">
            <a class="btn btn-like mr-30" href="#">Helpful</a>
            <a class="btn btn-dislike" href="#">Not helpful</a>
          </div>
        </div>
      </div> -->
      
      <!-- <div class="border-bottom mb-50 mt-60"></div> -->
      
      <div class="box-form-comment wow fadeInLeft">
        <!-- <h5 class="text-20-medium mb-30">Leave a Comment</h5>
        <p class="text-14 color-text mb-30">Your email address will not be published.</p> -->
        <!-- <div class="form-comment">
          <form action="#">
            <div class="row">
              <div class="col-lg-6">
                <div class="form-group">
                  <label class="form-label" for="fullname">Your Name</label>
                  <input id="fullname" class="form-control" type="text" value="Test">
                </div>
              </div>
              <div class="col-lg-6">
                <div class="form-group">
                  <label class="form-label" for="email">Email</label>
                  <input id="email" class="form-control" type="text" placeholder="">
                </div>
              </div>
              <div class="col-lg-12">
                <div class="form-group">
                  <label class="form-label" for="comment">Write Your Comment</label>
                  <textarea id="comment" class="form-control"></textarea>
                </div>
              </div>
              <div class="col-lg-12">
                <button class="btn btn-primary" type="submit">
                  Post Review
                  <svg class="icon-16 ml-5" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"></path>
                  </svg>
                </button>
              </div>
            </div>
          </form>
        </div> -->
      </div>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  blogData: {
    type: Object,
    default: () => ({
      title: "6 of the best sustainable travel companies",
      date: "14.",
      monthYear: "Jun, 2022",
      featuredImage: "/imgs/page/blog2/img-single.png",
      content: [
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy. Eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
      ],
      quote: "Sed viverra ipsum nunc aliquet bibendum enim facilisis gravida. Diam phasellus vestibulum lorem sed risus ultricies. Magna sit amet purus gravida quis blandit. Arcu cursus vitae congue mauris.",
      additionalContent: [
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy. Eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.",
        "Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy. Eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
      ],
      middleImage: "/imgs/page/blog2/img-single2.png",
      galleryImages: [
        "/imgs/page/blog2/img-single3.png",
        "/imgs/page/blog2/img-single4.png"
      ],
      finalContent: [
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy. Eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
      ],
      subtitle: "Natural Habitat Adventures",
      subtitleContent: [
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy. Eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.",
        "Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy. Eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
      ],
      tags: ["Chauffeur", "Car", "Rent", "Limousine"],
      author: {
        name: "Esther Howard",
        position: "Marketing Coordinator",
        bio: "Etiam vitae leo et diam pellentesque porta. Sed eleifend ultricies risus, vel rutrum erat commodo ut. Praesent finibus congue euismod. Nullam scelerisque massa vel augue placerat, a tempor sem egestas. Curabitur placerat finibus lacus.",
        image: "/imgs/page/blog2/author.png"
      },
      navigation: {
        prev: {
          title: "The most efficient airlines and airports globally",
          link: "/blogs/airlines-airports"
        },
        next: {
          title: "The most efficient airlines and airports globally",
          link: "/blogs/airlines-airports"
        }
      },
      reviews: [
        {
          id: 1,
          name: "Bessie Cooper",
          avatar: "B.C",
          date: "March 2022",
          comment: "Nice two level apartment in great London location. Located in quiet small street, but just 50 meters from main street and bus stop. Tube station is short walk, just like two grocery stores."
        },
        {
          id: 2,
          name: "Wade Warren",
          avatar: "W.W",
          date: "March 2022",
          comment: "Nice two level apartment in great London location. Located in quiet small street, but just 50 meters from main street and bus stop. Tube station is short walk, just like two grocery stores."
        }
      ]
    })
  }
});
</script>
