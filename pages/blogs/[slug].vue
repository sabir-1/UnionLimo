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
        <BlogDetail v-else-if="currentBlog" :blog-data="currentBlog" />
        <RelatedPost/>
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

// Define layout props for SEO and breadcrumb
definePageMeta({
  layout: 'default',
  layoutProps: computed(() => ({
    breadcrumbTitle: currentBlog.value?.title || 'Blog Post',
    breadcrumbItems: [
      { text: 'Blog', link: '/blogs' },
      { text: currentBlog.value?.title || 'Blog Post', link: null }
    ],
    seoTitle: currentBlog.value?.title ? `${currentBlog.value.title} - UnionLimo Blog` : 'Blog Post - UnionLimo',
    seoDescription: currentBlog.value?.content?.[0] || 'Read our latest blog post about luxury transportation and travel services.',
    seoKeywords: currentBlog.value?.tags?.length ? `${currentBlog.value.tags.join(', ')}, luxury transportation, travel blog, unionlimo` : 'luxury transportation, travel blog, unionlimo'
  }))
})
</script>

