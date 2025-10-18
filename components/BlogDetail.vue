<template>
  <section class="section pt-60 bg-white latest-new-white">
    <div class="container-sub">
      <h2 class="heading-44-medium mb-30 wow fadeInUp">{{ blogData.title }}</h2>
      <div class="box-frature-image mb-60 wow fadeInDown">
        <div class="cardImage">
          <div class="datePost">
            <div class="heading-52-medium color-white">{{ blogData.date }}</div>
            <p class="text-14 color-white">{{ blogData.monthYear }}</p>
          </div>
          <img :src="blogData.featuredImage" :alt="blogData.title">
        </div>
      </div>

      <!-- Blog Slider Section -->
      <div class="box-slide-blog mt-60 wow fadeInUp" v-if="sliderImages && sliderImages.length > 0">
        <div class="box-swiper">
          <div class="swiper-container swiper-group-2-single-blog pb-0">
            <div class="swiper-wrapper">
              <div class="swiper-slide" v-for="(image, index) in sliderImages" :key="index">
                <img :src="image" :alt="`${blogData.title} - Image ${index + 1}`" />
              </div>
            </div>
            <div class="box-pagination-blog">
              <div class="swiper-button-prev swiper-button-prev-blog">
                <svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                </svg>
              </div>
              <div class="swiper-button-next swiper-button-next-blog">
                <svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      
      
      <div class="content-single wow fadeInLeft"> 
        <!-- Main blog content -->
        <div v-if="blogData.description" v-html="blogData.description" class="blog-content description-wrapper-blog-detail"></div>
        
        <!-- Fallback content if no description -->
        <div v-else-if="blogData.content && blogData.content.length > 0">
          <p v-for="(paragraph, index) in blogData.content" :key="'content-' + index">{{ paragraph }}</p>
        </div>
        
        <!-- Quote section if available -->
        <blockquote v-if="blogData.quote" class="mt-30 mb-30">
          "{{ blogData.quote }}"
        </blockquote>
        
        <!-- Additional content -->
        <div v-if="blogData.additionalContent && blogData.additionalContent.length > 0">
          <p v-for="(paragraph, index) in blogData.additionalContent" :key="'additional-' + index">{{ paragraph }}</p>
        </div>
        
        <!-- Middle image -->
        <div v-if="blogData.middleImage" class="mt-30 mb-30">
          <img :src="blogData.middleImage" :alt="blogData.title" class="img-fluid">
        </div>
        
        <!-- Gallery images -->
        <div class="row mt-30 mb-30" v-if="blogData.galleryImages && blogData.galleryImages.length > 0">
          <div class="col-lg-6 mb-30" v-for="(image, index) in blogData.galleryImages" :key="index">
            <img :src="image" :alt="blogData.title" class="img-fluid">
          </div>
        </div>
        
        <!-- Final content -->
        <div v-if="blogData.finalContent && blogData.finalContent.length > 0">
          <p v-for="(paragraph, index) in blogData.finalContent" :key="'final-' + index">{{ paragraph }}</p>
        </div>
        
        <!-- Subtitle and subtitle content -->
        <div v-if="blogData.subtitle">
          <h2 class="heading-44-medium mt-30 mb-20">{{ blogData.subtitle }}</h2>
          <div v-if="blogData.subtitleContent && blogData.subtitleContent.length > 0">
            <p v-for="(paragraph, index) in blogData.subtitleContent" :key="'subtitle-' + index">{{ paragraph }}</p>
          </div>
        </div>
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
      id: 1,
      title: "Sample Blog Post",
      date: "14.",
      monthYear: "Jun, 2022",
      featuredImage: "/imgs/page/blog2/img-single.png",
      description: "<p>This is a sample blog post description with HTML content.</p>",
      shortDescription: "Sample short description",
      content: [],
      quote: null,
      additionalContent: [],
      middleImage: "/imgs/page/blog2/img-single2.png",
      galleryImages: [
        "/imgs/page/blog2/img-single3.png",
        "/imgs/page/blog2/img-single4.png"
      ],
      finalContent: [],
      subtitle: null,
      subtitleContent: [],
      tags: ["Sample", "Blog", "Post"],
      author: {
        name: "UnionLimo Team",
        position: "Content Team",
        bio: "Our dedicated team of writers and industry experts work together to provide you with the most relevant and up-to-date information about luxury transportation and travel.",
        image: "/imgs/page/blog2/author.png"
      },
      navigation: {
        prev: null,
        next: null
      },
      reviews: [],
      seo: {}
    })
  }
});

// Computed property to extract slider images from blogData
const sliderImages = computed(() => {
  if (!props.blogData) return [];
  
  const images = [];
  
  // Check for slider_image_1, slider_image_2, etc.
  for (let i = 1; i <= 10; i++) {
    const imageKey = `slider_image_${i}`;
    if (props.blogData[imageKey]) {
      images.push(props.blogData[imageKey]);
    }
  }
  
  return images;
});
</script>

<style scoped>
.blog-content {
  line-height: 1.8;
}

.blog-content :deep(h1),
.blog-content :deep(h2),
.blog-content :deep(h3),
.blog-content :deep(h4),
.blog-content :deep(h5),
.blog-content :deep(h6) { 
  font-weight: 600; 
  margin-bottom: 2px;
}

 

.blog-content :deep(ul),
.blog-content :deep(ol) {
  margin-bottom: 1.5rem;
  padding-left: 2rem;
}

.blog-content :deep(li) {
  margin-bottom: 0.5rem;
  line-height: 1.6;
}

.blog-content :deep(strong) {
  font-weight: 600;
  color: #1a1a1a;
}

.blog-content :deep(em) {
  font-style: italic;
}

.blog-content :deep(a) {
  color: #007bff;
  text-decoration: none;
  transition: color 0.3s ease;
}

.blog-content :deep(a:hover) {
  color: #0056b3;
  text-decoration: underline;
}

.blog-content :deep(blockquote) {
  border-left: 4px solid #007bff;
  padding-left: 1rem;
  margin: 2rem 0;
  font-style: italic;
  color: #666;
}

.blog-content :deep(img) {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  margin: 1.5rem 0;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
</style>
