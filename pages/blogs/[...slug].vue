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
        <template v-else-if="currentBlog && currentBlog.title">
            <BlogDetail :blog-data="currentBlog" />
            <RelatedPost :post-id="currentBlog.id" />
        </template>

        <!-- Category Posts List -->
        <template v-else-if="categoryPosts && categoryPosts.length > 0 && categoryName">
            <section class="section pt-60 bg-white latest-new-white">
                <div class="container-sub">
                    <div class="row">
                        <div class="col-12">
                            <h1 class="mb-4">{{ categoryName }} Posts</h1>
                            <div class="row">
                                <div v-for="post in categoryPosts" :key="post.id || post.slug" class="col-lg-4 col-md-6 mb-4">
                                    <div class="card h-100">
                                        <img v-if="post.featuredImage || post.img" :src="post.featuredImage || post.img" class="card-img-top" :alt="post.title">
                                        <div class="card-body">
                                            <h5 class="card-title">{{ post.title }}</h5>
                                            <p class="card-text">{{ post.shortDescription || post.description || 'No description available.' }}</p>
                                            <NuxtLink :to="`/blogs/${post.slug}`" class="btn btn-primary">Read More</NuxtLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
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

// Use the category API composable
const { fetchCategoryPosts } = useCategoryApi();

// Current blog data
const currentBlog = ref(null);
const categoryPosts = ref([]);
const categoryName = ref('');

// Parse slug to determine if it's a category or post
const parseSlug = computed(() => {
    if (!slug) return { type: 'invalid' };
    
    if (Array.isArray(slug)) {
        if (slug.length === 1) {
            // Single slug - could be post or category
            return { type: 'single', value: slug[0] };
        } else if (slug.length === 2) {
            // Two slugs - category/post format
            return { type: 'category-post', category: slug[0], post: slug[1] };
        }
    }
    return { type: 'invalid' };
});

// Fetch blog data on page load
onMounted(async () => {
    try {
        const parsed = parseSlug.value;
        
        if (parsed.type === 'category-post') {
            // Format: /blogs/category/post-slug
            currentBlog.value = await fetchBlogBySlug(parsed.post);
        } else if (parsed.type === 'single') {
            // Format: /blogs/post-slug or /blogs/category
            // First try to fetch as a blog post
            currentBlog.value = await fetchBlogBySlug(parsed.value);
            
            // If no blog found, try as category
            if (!currentBlog.value) {
                const categoryData = await fetchCategoryPosts(parsed.value);
                if (categoryData && categoryData.posts) {
                    categoryPosts.value = categoryData.posts || [];
                    categoryName.value = categoryData.category?.name || parsed.value;
                } else {
                    // Neither blog nor category found
                    error.value = 'Blog post or category not found';
                }
            }
        } else {
            error.value = 'Invalid URL format';
        }
        
        // Debug: Log SEO data
        if (currentBlog.value) {
            console.log('SEO DATA:', currentBlog.value.seo);
        }
    } catch (err) {
        console.error('Error in onMounted:', err);
        error.value = 'An error occurred while loading the content';
    }
});

// Watch for route changes
watch(() => route.params.slug, async (newSlug) => {
    try {
        // Reset states
        currentBlog.value = null;
        categoryPosts.value = [];
        categoryName.value = '';
        error.value = null;
        
        if (newSlug) {
            const parsed = parseSlug.value;
            
            if (parsed.type === 'category-post') {
                currentBlog.value = await fetchBlogBySlug(parsed.post);
            } else if (parsed.type === 'single') {
                currentBlog.value = await fetchBlogBySlug(parsed.value);
                
                if (!currentBlog.value) {
                    const categoryData = await fetchCategoryPosts(parsed.value);
                    if (categoryData && categoryData.posts) {
                        categoryPosts.value = categoryData.posts || [];
                        categoryName.value = categoryData.category?.name || parsed.value;
                    } else {
                        error.value = 'Blog post or category not found';
                    }
                }
            }
            
            // Debug: Log SEO data
            if (currentBlog.value) {
                console.log('SEO DATA:', currentBlog.value.seo);
            }
        }
    } catch (err) {
        console.error('Error in route watch:', err);
        error.value = 'An error occurred while loading the content';
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
    }
});

// Computed SEO fields for reactivity
const seoTitle = computed(() => {
    if (currentBlog.value) {
        return currentBlog.value.seo?.title || `${currentBlog.value.title} - UnionLimo Blog`;
    } else if (categoryName.value) {
        return `${categoryName.value} - UnionLimo Blog`;
    }
    return 'Blog Post - UnionLimo';
});

const seoDescription = computed(() => {
    if (currentBlog.value) {
        return currentBlog.value.seo?.description || currentBlog.value.shortDescription || 'Read our latest blog post about luxury transportation and travel services.';
    } else if (categoryName.value) {
        return `Explore ${categoryName.value} articles and insights about luxury transportation and travel services.`;
    }
    return 'Read our latest blog post about luxury transportation and travel services.';
});

const seoKeywords = computed(() => {
    if (currentBlog.value) {
        return currentBlog.value.seo?.keywords || `${currentBlog.value.title.toLowerCase()}, luxury transportation, travel blog, unionlimo`;
    } else if (categoryName.value) {
        return `${categoryName.value.toLowerCase()}, luxury transportation, travel blog, unionlimo`;
    }
    return 'luxury transportation, travel blog, unionlimo';
});

const seoCanonical = computed(() => {
    if (currentBlog.value) {
        return currentBlog.value.seo?.canonical_url || `https://unionlimo.com/blogs/${currentBlog.value.slug}`;
    } else if (categoryName.value) {
        return `https://unionlimo.com/blogs/${categoryName.value.toLowerCase().replace(/\s+/g, '-')}`;
    }
    return 'https://unionlimo.com/blogs';
});

const ogImage = computed(() => {
    if (currentBlog.value) {
        return currentBlog.value.featuredImage || '/imgs/page/blog2/img-single.png';
    }
    return '/imgs/page/blog2/img-single.png';
});

const publishedTime = computed(() => {
    if (currentBlog.value) {
        return currentBlog.value.created_at || new Date().toISOString();
    }
    return new Date().toISOString();
});

const modifiedTime = computed(() => {
    if (currentBlog.value) {
        return currentBlog.value.updated_at || new Date().toISOString();
    }
    return new Date().toISOString();
});

// Set SEO meta tags reactively
useHead(() => ({
    title: seoTitle.value,
    meta: [
        { name: 'description', content: seoDescription.value },
        { name: 'keywords', content: seoKeywords.value },
        { property: 'og:title', content: seoTitle.value },
        { property: 'og:description', content: seoDescription.value },
        { property: 'og:image', content: ogImage.value },
        { property: 'og:type', content: currentBlog.value ? 'article' : 'website' },
        ...(currentBlog.value ? [
            { property: 'article:published_time', content: publishedTime.value },
            { property: 'article:modified_time', content: modifiedTime.value }
        ] : [])
    ],
    link: [
        { rel: 'canonical', href: seoCanonical.value }
    ]
}));

// Dynamic SEO and breadcrumb handling
watch([currentBlog, categoryName], ([newBlog, newCategoryName]) => {
    if (newBlog || newCategoryName) {
        // Update route meta for breadcrumb
        const route = useRoute();
        if (route.meta.layoutProps) {
            if (newBlog) {
                route.meta.layoutProps.breadcrumbTitle = newBlog.title || 'Blog Post';
                route.meta.layoutProps.breadcrumbItems = [
                    { text: 'Blog', link: '/blogs' },
                    { text: newBlog.title || 'Blog Post', link: null }
                ];
            } else if (newCategoryName) {
                route.meta.layoutProps.breadcrumbTitle = newCategoryName;
                route.meta.layoutProps.breadcrumbItems = [
                    { text: 'Blog', link: '/blogs' },
                    { text: newCategoryName, link: null }
                ];
            }
        }
    }
}, { immediate: true });
</script> 