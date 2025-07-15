<template>
    <div>
        <section class="section pt-60 bg-white latest-new-white">
            <div class="container-sub">
                <!-- Search Bar -->
                <div class="row mb-40">
                    <div class="col-lg-6 mx-auto">
                        <div class="search-box">
                            <input 
                                v-model="searchQuery" 
                                @input="searchBlogs(searchQuery)"
                                type="text" 
                                class="form-control" 
                                placeholder="Search blogs..."
                            />
                            <button 
                                v-if="searchQuery" 
                                @click="clearSearch" 
                                class="btn btn-sm btn-outline-secondary"
                                style="position: absolute; right: 10px; top: 50%; transform: translateY(-50%);"
                            >
                                ×
                            </button>
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
                            :tag="blog.category" 
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
                <div class="text-center mt-40 mb-120 wow fadeInDown" v-if="totalPages > 1">
                    <nav aria-label="Blog pagination">
                        <ul class="pagination">
                            <li class="page-item" :class="{ disabled: currentPage === 1 }">
                                <button @click="changePage(currentPage - 1)" class="page-link">Previous</button>
                            </li>
                            <li 
                                v-for="page in getPageNumbers()" 
                                :key="page" 
                                class="page-item"
                                :class="{ active: page === currentPage }"
                            >
                                <button @click="changePage(page)" class="page-link">{{ page }}</button>
                            </li>
                            <li class="page-item" :class="{ disabled: currentPage === totalPages }">
                                <button @click="changePage(currentPage + 1)" class="page-link">Next</button>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
import CardNews from '@/components/CardNews.vue';

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

// Fetch blogs on page load
onMounted(() => {
    fetchBlogs();
});

// Get page numbers for pagination
const getPageNumbers = () => {
    const pages = [];
    const maxPages = 5;
    let start = Math.max(1, currentPage.value - Math.floor(maxPages / 2));
    let end = Math.min(totalPages.value, start + maxPages - 1);
    
    if (end - start + 1 < maxPages) {
        start = Math.max(1, end - maxPages + 1);
    }
    
    for (let i = start; i <= end; i++) {
        pages.push(i);
    }
    
    return pages;
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
