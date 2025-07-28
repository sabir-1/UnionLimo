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
    }
});

// Watch for route changes
watch(() => route.params.slug, async (newSlug) => {
    if (newSlug) {
        currentBlog.value = await fetchBlogBySlug(newSlug);
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
    ],
    seoTitle: 'Blog Post - UnionLimo',
    seoDescription: 'Read our latest blog post about luxury transportation and travel services.',
    seoKeywords: 'luxury transportation, travel blog, unionlimo'
  }
})

// Dynamic SEO and breadcrumb handling
watch(currentBlog, (newBlog) => {
  if (newBlog) {
    // Update SEO
    useHead({
      title: `${newBlog.title} - UnionLimo Blog`,
      meta: [
        { name: 'description', content: newBlog.shortDescription || 'Read our latest blog post about luxury transportation and travel services.' },
        { name: 'keywords', content: `${newBlog.title.toLowerCase()}, luxury transportation, travel blog, unionlimo` },
        { property: 'og:title', content: `${newBlog.title} - UnionLimo Blog` },
        { property: 'og:description', content: newBlog.shortDescription || 'Read our latest blog post about luxury transportation and travel services.' }
      ]
    });
  }
}, { immediate: true });
</script>

