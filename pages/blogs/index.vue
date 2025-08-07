<template>
    <div>
        <section class="section pt-60 bg-white latest-new-white">
            <div class="container-sub">
                <!-- Categories Section -->
                <div v-if="categories.length > 0" class="mb-50">
                    <h3 class="mb-30">Categories</h3>
                    <div class="row">
                        <div class="col-lg-3 col-md-4 col-sm-6 mb-3" v-for="category in categories" :key="category.id">
                            <NuxtLink :to="`/blogs/${category.slug}`" class="btn btn-outline-primary w-100">
                                {{ category.name }}
                                <span class="badge bg-secondary ms-2">{{ category.posts?.length || 0 }}</span>
                            </NuxtLink>
                        </div>
                    </div>
                </div>

                <!-- Loading State -->
                <div v-if="loading" class="text-center py-60">
                    <div class="spinner-border" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                    <p class="mt-3">Loading blogs...</p>
                </div>

                <!-- Error State -->
                <div v-else-if="error" class="text-center py-60">
                    <div class="alert alert-warning" role="alert">
                        <h4>Oops!</h4>
                        <p>{{ error }}</p>
                        <button @click="fetchBlogs" class="btn btn-primary">Try Again</button>
                    </div>
                </div>

                <!-- Search Results Info -->
                <div v-else-if="searchQuery && filteredBlogs.length > 0" class="text-center mb-30">
                    <p>Found {{ filteredBlogs.length }} result(s) for "{{ searchQuery }}"</p>
                </div>

                <!-- Blog Grid -->
                <div v-if="!loading && !error" class="row mt-50">
                    <div class="col-lg-4" v-for="blog in paginatedBlogs" :key="blog.id">
                        <CardNews 
                            :img="blog.img"
                            :title="blog.title" 
                            :categories="blog.categories" 
                            :date="blog.day" 
                            :monthYear="blog.month"
                            :link="blog.link" />
                    </div>
                </div>

                <!-- Empty State -->
                <div v-if="!loading && !error && filteredBlogs.length === 0" class="text-center py-60">
                    <h3 v-if="searchQuery">No results found</h3>
                    <h3 v-else>No blogs found</h3>
                    <p v-if="searchQuery">Try adjusting your search terms.</p>
                    <p v-else>Check back later for new content!</p>
                    <button v-if="searchQuery" @click="clearSearch" class="btn btn-primary">Clear Search</button>
                </div>

                <!-- Pagination -->
                <div class="text-center mt-40 mb-120 wow fadeInDown"  >
                    <pagination :current-page="currentPage" :total-pages="totalPages" @change="changePage" />
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
import CardNews from '@/components/CardNews.vue';
import Pagination from '@/elements/Pagination.vue';

// Use the blog API composable
const { 
    blogs, 
    loading, 
    error, 
    searchQuery,
    currentPage,
    filteredBlogs,
    paginatedBlogs,
    totalPages,
    fetchBlogs, 
    searchBlogs,
    changePage,
    clearSearch
} = useBlogApi();

// Use the category API composable
const { fetchAllCategories } = useCategoryApi();

// Categories data
const categories = ref([]);

// Fetch blogs and categories on page load
onMounted(async () => {
    await Promise.all([
        fetchBlogs(),
        fetchCategories()
    ]);
});

// Fetch categories
const fetchCategories = async () => {
    try {
        const response = await fetchAllCategories();
        if (response) {
            categories.value = response;
        }
    } catch (error) {
        console.error('Error fetching categories:', error);
    }
};

// Define layout props for SEO and breadcrumb
definePageMeta({
  layout: 'default',
  layoutProps: {
    breadcrumbTitle: 'Blog & News',
    breadcrumbItems: [
      { text: 'Blog', link: null }
    ],
    seoTitle: 'Blog & News - UnionLimo',
    seoDescription: 'Stay updated with the latest news, travel tips, and insights about luxury transportation, chauffeur services, and premium travel experiences.',
    seoKeywords: 'travel blog, luxury transportation news, chauffeur service tips, travel insights, transportation blog'
  }
})
</script>

<style scoped>
.search-box {
    position: relative;
}

.search-box input {
    padding-right: 40px;
}

.pagination {
    display: flex;
    justify-content: center;
    list-style: none;
    padding: 0;
    margin: 0;
}

.page-item {
    margin: 0 2px;
}

.page-link {
    display: block;
    padding: 0.5rem 0.75rem;
    border: 1px solid #dee2e6;
    background-color: #fff;
    color: #007bff;
    text-decoration: none;
    border-radius: 0.25rem;
    cursor: pointer;
}

.page-link:hover {
    background-color: #e9ecef;
    border-color: #dee2e6;
    color: #0056b3;
}

.page-item.active .page-link {
    background-color: #007bff;
    border-color: #007bff;
    color: #fff;
}

.page-item.disabled .page-link {
    color: #6c757d;
    pointer-events: none;
    background-color: #fff;
    border-color: #dee2e6;
}

.btn-outline-secondary {
    color: #6c757d;
    border-color: #6c757d;
    background-color: transparent;
}

.btn-outline-secondary:hover {
    color: #fff;
    background-color: #6c757d;
    border-color: #6c757d;
}

.btn-sm {
    padding: 0.25rem 0.5rem;
    font-size: 0.875rem;
    border-radius: 0.2rem;
}
</style>
