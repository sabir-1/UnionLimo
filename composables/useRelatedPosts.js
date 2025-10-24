export const useRelatedPosts = () => {
  const relatedPosts = ref([]);
  const loading = ref(false);
  const error = ref(null);

  const fetchRelatedPosts = async (postId) => {
    loading.value = true;
    error.value = null;
    
    try {
      // Fetch related posts from the API
      const response = await $fetch(`https://cms.unionlimousine.com/api/posts/related/${postId}`);
      
      if (response && response.data) {
        // Transform the API data to match CardNews component expectations
        relatedPosts.value = response.data.map(post => ({
          id: post.id,
          img: post.feature_image || "/imgs/page/homepage1/news1.png",
          title: post.title || "Untitled Post",
          tag: post.categories || "Blog",
          date: formatDate(post.created_at, "day"),
          monthYear: formatDate(post.created_at, "monthYear"),
          link: `/blogs/${post.slug}`,
          shortDescription: post.short_description,
          description: post.description
        }));
      } else {
        relatedPosts.value = [];
      }
    } catch (err) {
      console.error("Error fetching related posts:", err);
      error.value = "Failed to load related posts. Please try again later.";
      relatedPosts.value = [];
    } finally {
      loading.value = false;
    }
  };

  // Helper function to format dates
  const formatDate = (dateString, format) => {
    if (!dateString) return format === "day" ? "01" : "Jan, 2024";
    
    try {
      const date = new Date(dateString);
      
      if (format === "day") {
        return date.getDate().toString().padStart(2, "0");
      } else if (format === "monthYear") {
        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", 
                       "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        const month = months[date.getMonth()];
        const year = date.getFullYear();
        return `${month}, ${year}`;
      }
    } catch (err) {
      console.error("Error formatting date:", err);
    }
    
    return format === "day" ? "01" : "Jan, 2024";
  };

  return {
    relatedPosts: readonly(relatedPosts),
    loading: readonly(loading),
    error: readonly(error),
    fetchRelatedPosts
  };
};
