<template>
 
    <div>
        <!-- Loading State -->
        <div v-if="loading" class="text-center py-60">
            <div class="spinner-border" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
            <p class="mt-3">Loading blog post...</p>
        </div>

        <!-- Error State -->
        <div v-else-if="error" class="text-center py-60">
            <div class="alert alert-warning" role="alert">
                <h4>Oops!</h4>
                <p>{{ error }}</p>
                <NuxtLink to="/blogs" class="btn btn-primary">Back to Blogs</NuxtLink>
            </div>
        </div>

        <!-- Blog Detail -->
  <template v-else-if="currentBlog">
    <BlogDetail  :blog-data="currentBlog" />
    <RelatedPost :post-id="currentBlog.id" />
  </template>
        <!-- Not Found State -->
        <div v-else class="text-center py-60">
            <h3>Blog post not found</h3>
            <p>The blog post you're looking for doesn't exist.</p>
            <NuxtLink to="/blogs" class="btn btn-primary">Back to Blogs</NuxtLink>
        </div> 
    </div>
 
</template>

<script setup>
import BlogDetail from '@/components/BlogDetail.vue'; 
import RelatedPost from '~/components/RelatedPost.vue';
import { computed } from 'vue';
// Get route params
const route = useRoute();
const { slug } = route.params;

// Use the blog API composable
const { loading, error, fetchBlogBySlug } = useBlogApi();

// Current blog data
const currentBlog = ref(null);

// Fetch blog data on page load
onMounted(async () => {
    if (slug) {
        currentBlog.value = await fetchBlogBySlug(slug);
        // Debug: Log SEO data
        if (currentBlog.value) {
          console.log('SEO DATA:', currentBlog.value.seo);
        }
    }
});

// Watch for route changes
watch(() => route.params.slug, async (newSlug) => {
    if (newSlug) {
        currentBlog.value = await fetchBlogBySlug(newSlug);
        // Debug: Log SEO data
        if (currentBlog.value) {
          console.log('SEO DATA:', currentBlog.value.seo);
        }
    }
});

// Define static layout props
definePageMeta({
  layout: 'default',
  layoutProps: {
    breadcrumbTitle: 'Blog Post',
    breadcrumbItems: [
      { text: 'Blog', link: '/blogs' },
      { text: 'Blog Post', link: null }
    ]
    // Removed static SEO fields
  }
})

// Computed SEO fields for reactivity
const seoTitle = computed(() => currentBlog.value?.seo?.title || (currentBlog.value ? `${currentBlog.value.title} - UnionLimo Blog` : 'Blog Post - UnionLimo'));
const seoDescription = computed(() => currentBlog.value?.seo?.description || currentBlog.value?.shortDescription || 'Read our latest blog post about luxury transportation and travel services.');
const seoKeywords = computed(() => currentBlog.value?.seo?.keywords || (currentBlog.value ? `${currentBlog.value.title.toLowerCase()}, luxury transportation, travel blog, unionlimo` : 'luxury transportation, travel blog, unionlimo'));
const seoCanonical = computed(() => currentBlog.value?.seo?.canonical_url || (currentBlog.value ? `https://unionlimo.com/blogs/${currentBlog.value.slug}` : 'https://unionlimo.com/blogs'));
const ogImage = computed(() => currentBlog.value?.featuredImage || '/imgs/page/blog2/img-single.png');
const publishedTime = computed(() => currentBlog.value?.created_at || new Date().toISOString());
const modifiedTime = computed(() => currentBlog.value?.updated_at || new Date().toISOString());

// Set SEO meta tags reactively
useHead(() => ({
  title: seoTitle.value,
  meta: [
    { name: 'description', content: seoDescription.value },
    { name: 'keywords', content: seoKeywords.value },
    { property: 'og:title', content: seoTitle.value },
    { property: 'og:description', content: seoDescription.value },
    { property: 'og:image', content: ogImage.value },
    { property: 'og:type', content: 'article' },
    { property: 'article:published_time', content: publishedTime.value },
    { property: 'article:modified_time', content: modifiedTime.value }
  ],
  link: [
    { rel: 'canonical', href: seoCanonical.value }
  ]
}));

// Dynamic SEO and breadcrumb handling
watch(currentBlog, (newBlog) => {
  if (newBlog) {
    // Update route meta for breadcrumb
    const route = useRoute();
    if (route.meta.layoutProps) {
      route.meta.layoutProps.breadcrumbTitle = newBlog.title || 'Blog Post';
      route.meta.layoutProps.breadcrumbItems = [
        { text: 'Blog', link: '/blogs' },
        { text: newBlog.title || 'Blog Post', link: null }
      ];
      
      // Use SEO data from API if available, otherwise fallback to defaults
      // const seoTitle = newBlog.seo?.title || `${newBlog.title} - UnionLimo Blog`;
      // const seoDescription = newBlog.seo?.description || newBlog.shortDescription || 'Read our latest blog post about luxury transportation and travel services.';
      // const seoKeywords = newBlog.seo?.keywords || `${newBlog.title.toLowerCase()}, luxury transportation, travel blog, unionlimo`;
      
      // route.meta.layoutProps.seoTitle = seoTitle;
      // route.meta.layoutProps.seoDescription = seoDescription;
      // route.meta.layoutProps.seoKeywords = seoKeywords;
    }

    // Update SEO
    // useHead({
    //   title: newBlog.seo?.title || `${newBlog.title} - UnionLimo Blog`,
    //   meta: [
    //     { name: 'description', content: newBlog.seo?.description || newBlog.shortDescription || 'Read our latest blog post about luxury transportation and travel services.' },
    //     { name: 'keywords', content: newBlog.seo?.keywords || `${newBlog.title.toLowerCase()}, luxury transportation, travel blog, unionlimo` },
    //     { property: 'og:title', content: newBlog.seo?.title || `${newBlog.title} - UnionLimo Blog` },
    //     { property: 'og:description', content: newBlog.seo?.description || newBlog.shortDescription || 'Read our latest blog post about luxury transportation and travel services.' },
    //     { property: 'og:image', content: newBlog.featuredImage || '/imgs/page/blog2/img-single.png' },
    //     { property: 'og:type', content: 'article' },
    //     { property: 'article:published_time', content: newBlog.created_at || new Date().toISOString() },
    //     { property: 'article:modified_time', content: newBlog.updated_at || new Date().toISOString() }
    //   ],
    //   link: [
    //     { rel: 'canonical', href: newBlog.seo?.canonical_url || `https://unionlimo.com/blogs/${newBlog.slug}` }
    //   ]
    // });
  }
}, { immediate: true });
</script>

