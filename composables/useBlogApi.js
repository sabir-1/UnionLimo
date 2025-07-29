export const useBlogApi = () => {
  const config = useRuntimeConfig();
  
  // State
  const blogs = ref([]);
  const loading = ref(false);
  const error = ref(null);
  const searchQuery = ref('');
  const currentPage = ref(1);
  const itemsPerPage = ref(9);
  
  // Computed properties
  const filteredBlogs = computed(() => {
    if (!searchQuery.value) {
      return blogs.value;
    }
    
    return blogs.value.filter(blog => 
      blog.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      blog.category.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      (blog.shortDescription && blog.shortDescription.toLowerCase().includes(searchQuery.value.toLowerCase()))
    );
  });
  
  const paginatedBlogs = computed(() => {
    const start = (currentPage.value - 1) * itemsPerPage.value;
    const end = start + itemsPerPage.value;
    return filteredBlogs.value.slice(start, end);
  });
  
  const totalPages = computed(() => {
    return Math.ceil(filteredBlogs.value.length / itemsPerPage.value);
  });
  
  // Fetch all blogs
  const fetchBlogs = async () => {
    loading.value = true;
    error.value = null;
    
    try {
      const response = await $fetch('https://edgeranking.com/api/posts/all');
      
      if (response && response.data) {
        // Transform API data to match our component structure
        blogs.value = response.data
          .filter(blog => blog.status === 'Active' || blog.status === '') // Only show active posts
          .map(blog => ({
            id: blog.id,
            title: blog.title,
            slug: blog.slug,
            img: blog.feature_image || '/imgs/page/homepage1/news1.png',
            category: blog.categories || 'General',
            day: new Date(blog.created_at).getDate() + '.',
            month: new Date(blog.created_at).toLocaleDateString('en-US', { 
              month: 'short', 
              year: 'numeric' 
            }),
            link: `/blogs/${blog.slug}`,
            shortDescription: blog.short_description,
            seo: blog.seo,
            created_at: blog.created_at,
            updated_at: blog.updated_at,
            sliderImages: [
              blog.slider_image_1,
              blog.slider_image_2,
              blog.slider_image_3,
              blog.slider_image_4
            ].filter(img => img && img !== 'https://dummyimage.com/120x120/000/ffffff.png&text=NO+IMAGE')
          }));
      }
    } catch (err) {
      console.error('Error fetching blogs:', err);
      error.value = 'Failed to load blogs. Please try again later.';
      // Fallback to static data if API fails
      blogs.value = getFallbackBlogs();
    } finally {
      loading.value = false;
    }
  };
  
  // Fetch single blog by slug
  const fetchBlogBySlug = async (slug) => {
    loading.value = true;
    error.value = null;
    
    try {
      const response = await $fetch(`https://edgeranking.com/api/posts/slug/${slug}`);
      
      if (response && response.data && response.data.length > 0) {
        return transformBlogForDetail(response.data[0]);
      } else {
        error.value = 'Blog post not found';
        return null;
      }
    } catch (err) {
      console.error('Error fetching blog:', err);
      error.value = 'Failed to load blog post. Please try again later.';
      return null;
    } finally {
      loading.value = false;
    }
  };
  
  // Search blogs
  const searchBlogs = (query) => {
    searchQuery.value = query;
    currentPage.value = 1; // Reset to first page when searching
  };
  
  // Change page
  const changePage = (page) => {
    if (page >= 1 && page <= totalPages.value) {
      currentPage.value = page;
    }
  };
  
  // Clear search
  const clearSearch = () => {
    searchQuery.value = '';
    currentPage.value = 1;
  };
  
  // Transform blog data for detail view
  const transformBlogForDetail = (blog) => {
    const createdDate = new Date(blog.created_at);
    const day = createdDate.getDate();
    const monthYear = createdDate.toLocaleDateString('en-US', { 
      month: 'short', 
      year: 'numeric' 
    });
    
    // Generate dynamic content based on blog title if short_description is null
    const generateContent = () => {
      if (blog.short_description) {
        return [blog.short_description];
      }
      
      // Generate content based on title
      const title = blog.title.toLowerCase();
      let content = [];
      
      if (title.includes('slider') || title.includes('image')) {
        content = [
          "This blog post showcases our premium collection of images and visual content.",
          "We believe in providing high-quality visual experiences that complement our luxury transportation services.",
          "Each image has been carefully selected to represent the excellence and professionalism that UnionLimo stands for."
        ];
      } else if (title.includes('travel') || title.includes('destination')) {
        content = [
          "Discover amazing destinations and travel experiences with our premium transportation services.",
          "We provide luxury transportation solutions for all your travel needs, ensuring comfort and style throughout your journey.",
          "Our experienced chauffeurs and premium vehicles make every trip memorable and enjoyable."
        ];
      } else if (title.includes('service') || title.includes('transport')) {
        content = [
          "Experience the highest level of luxury transportation services with UnionLimo.",
          "Our fleet of premium vehicles and professional chauffeurs ensure your comfort and safety.",
          "We specialize in providing exceptional transportation solutions for all occasions."
        ];
      } else {
        content = [
          "Welcome to our latest blog post about luxury transportation and premium services.",
          "At UnionLimo, we are committed to providing exceptional experiences and valuable insights to our customers.",
          "Stay tuned for more updates and information about our services and industry trends."
        ];
      }
      
      return content;
    };
    
    return {
      id: blog.id, // Include the blog ID
      title: blog.title,
      date: day + '.',
      monthYear: monthYear,
      featuredImage: blog.feature_image || '/imgs/page/homepage1/news1.png',
      content: generateContent(),
      quote: "Quality and excellence are at the heart of everything we do at UnionLimo.",
      additionalContent: [
        "Our team of professionals works tirelessly to ensure every detail of your experience is perfect.",
        "We continuously strive to improve our services and provide the best possible experience for our valued customers."
      ],
      middleImage: blog.slider_image_1 || '/imgs/page/blog2/img-single2.png',
      galleryImages: [
        blog.slider_image_2,
        blog.slider_image_3,
        blog.slider_image_4
      ].filter(img => img && img !== 'https://dummyimage.com/120x120/000/ffffff.png&text=NO+IMAGE'),
      finalContent: [
        "Thank you for reading our blog. We hope this information has been helpful and informative."
      ],
      subtitle: "About This Post",
      subtitleContent: [
        "This post was created to provide valuable information to our readers and customers.",
        "We continuously update our content to ensure accuracy and relevance."
      ],
      tags: blog.categories ? blog.categories.split(',').map(cat => cat.trim()).filter(cat => cat) : ['General'],
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
      reviews: []
    };
  };
  
  // Fallback data if API fails
  const getFallbackBlogs = () => [
    {
      id: 1,
      img: "/imgs/page/homepage1/news1.png",
      title: "3 hidden-gem destinations for your wish list",
      category: "Travel",
      day: "14.",
      month: "Jun, 2022",
      link: "/blogs/hidden-gem-destinations"
    },
    {
      id: 2,
      img: "/imgs/page/homepage1/news2.png",
      title: "Explore the big things happening in Dallas",
      category: "Culture",
      day: "18.",
      month: "Jun, 2022",
      link: "/blogs/dallas-exploration"
    },
    {
      id: 3,
      img: "/imgs/page/homepage1/news3.png",
      title: "LA's worst traffic areas and how to avoid them",
      category: "News",
      day: "20.",
      month: "Jun, 2022",
      link: "/blogs/la-traffic-guide"
    }
  ];
  
  return {
    // State
    blogs: readonly(blogs),
    loading: readonly(loading),
    error: readonly(error),
    searchQuery: readonly(searchQuery),
    currentPage: readonly(currentPage),
    itemsPerPage: readonly(itemsPerPage),
    
    // Computed
    filteredBlogs: readonly(filteredBlogs),
    paginatedBlogs: readonly(paginatedBlogs),
    totalPages: readonly(totalPages),
    
    // Methods
    fetchBlogs,
    fetchBlogBySlug,
    searchBlogs,
    changePage,
    clearSearch
  };
}; 