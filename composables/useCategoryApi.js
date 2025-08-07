export const useCategoryApi = () => {
    const loading = ref(false);
    const error = ref(null);

    // Fetch all categories
    const fetchAllCategories = async () => {
        loading.value = true;
        error.value = null;
        
        try {
            const response = await $fetch('https://edgeranking.com/api/categories/all');
            return response;
        } catch (err) {
            error.value = 'Failed to fetch categories';
            console.error('Error fetching categories:', err);
            return null;
        } finally {
            loading.value = false;
        }
    };

    // Fetch category posts
    const fetchCategoryPosts = async (categorySlug) => {
        loading.value = true;
        error.value = null;
        
        try {
            const response = await $fetch(`https://edgeranking.com/api/categories/slug/${categorySlug}`);
            if (response && response.posts) {
                return {
                    category: response,
                    posts: response.posts
                };
            }
            return null;
        } catch (err) {
            error.value = 'Failed to fetch category posts';
            console.error('Error fetching category posts:', err);
            return null;
        } finally {
            loading.value = false;
        }
    };

    return {
        loading: readonly(loading),
        error: readonly(error),
        fetchAllCategories,
        fetchCategoryPosts
    };
}; 