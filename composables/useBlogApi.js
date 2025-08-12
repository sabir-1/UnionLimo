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
      blog.categories.some(cat => cat.cate_name.toLowerCase().includes(searchQuery.value.toLowerCase())) ||
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
            categories: Array.isArray(blog.categories)
              ? blog.categories.map(cat => ({
                  cate_name: cat.cate_name || cat.name || cat,
                  cate_slug: cat.cate_slug || cat.slug || (cat.name ? cat.name.toLowerCase().replace(/\s+/g, '-') : String(cat).toLowerCase().replace(/\s+/g, '-'))
                }))
              : [{
                  cate_name: blog.categories || 'General',
                  cate_slug: (blog.categories || 'General').toLowerCase().replace(/\s+/g, '-')
                }],
            day: new Date(blog.created_at).getDate() + '.',
            month: new Date(blog.created_at).toLocaleDateString('en-US', { 
              month: 'short', 
              year: 'numeric' 
            }),
            link: `${blog.slug}`,
            shortDescription: blog.short_description,
            seo: blog.seo,
            faqs: blog.faqs || [],
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
        console.log('Raw API response for blog:', response.data[0]);
        console.log('FAQs in raw response:', response.data[0].faqs);
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
    console.log('Transforming blog data:', blog);
    console.log('FAQs before transformation:', blog.faqs);
    
    const createdDate = new Date(blog.created_at);
    const day = createdDate.getDate();
    const monthYear = createdDate.toLocaleDateString('en-US', { 
      month: 'short', 
      year: 'numeric' 
    });
    
    // Process the description content
    const processDescription = (description) => {
      if (!description) return '';
      
      // Clean up the HTML content and handle special characters
      return description
        .replace(/\\n/g, '\n')
        .replace(/\\r/g, '\r')
        .replace(/\\t/g, '\t')
        .replace(/\\"/g, '"')
        .replace(/\\'/g, "'")
        .replace(/\\\\/g, '\\');
    };
    
    // Extract images from slider images
    const extractGalleryImages = () => {
      const images = [
        blog.slider_image_1,
        blog.slider_image_2,
        blog.slider_image_3,
        blog.slider_image_4
      ].filter(img => img && img !== 'https://dummyimage.com/120x120/000/ffffff.png&text=NO+IMAGE');
      
      return images.length > 0 ? images : ['/imgs/page/blog2/img-single2.png'];
    };
    
    // Extract categories/tags
    const extractTags = () => {
      // Handle categories as array of objects (from API)
      if (blog.categories && Array.isArray(blog.categories)) {
        return blog.categories.map(cat => cat.cate_name || cat.name || cat).filter(cat => cat);
      }
      
      // Handle categories as string
      if (blog.categories && typeof blog.categories === 'string' && blog.categories.trim()) {
        return blog.categories.split(',').map(cat => cat.trim()).filter(cat => cat);
      }
      
      // Generate tags based on title if no categories
      const title = blog.title.toLowerCase();
      const tags = [];
      
      if (title.includes('airport') || title.includes('jfk')) tags.push('Airport');
      if (title.includes('car') || title.includes('service')) tags.push('Car Service');
      if (title.includes('nyc') || title.includes('new york')) tags.push('NYC');
      if (title.includes('guide') || title.includes('complete')) tags.push('Guide');
      if (title.includes('transport') || title.includes('travel')) tags.push('Transportation');
      
      return tags.length > 0 ? tags : ['General'];
    };
    
    const result = {
      id: blog.id,
      title: blog.title,
      slug: blog.slug,
      date: day + '.',
      monthYear: monthYear,
      featuredImage: blog.feature_image || '/imgs/page/homepage1/news1.png',
      description: processDescription(blog.description), // Use the actual description from API
      shortDescription: blog.short_description,
      content: blog.short_description ? [blog.short_description] : [],
      quote: null, // Remove static quote
      additionalContent: [], // Remove static content
      middleImage: blog.slider_image_1 || '/imgs/page/blog2/img-single2.png',
      galleryImages: extractGalleryImages(),
      finalContent: [], // Remove static content
      subtitle: null, // Remove static subtitle
      subtitleContent: [], // Remove static content
      tags: extractTags(),
      faqs: blog.faqs || [], // Add FAQs field
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
      seo: blog.seo || {},
      created_at: blog.created_at,
      updated_at: blog.updated_at,
      status: blog.status
    };
    
    console.log('Final transformed blog data:', result);
    console.log('FAQs in final result:', result.faqs);
    
    return result;
  };
  
  // Fallback data if API fails
  const getFallbackBlogs = () => [
    {
      id: 1,
      img: "/imgs/page/homepage1/news1.png",
      title: "3 hidden-gem destinations for your wish list",
      categories: [
        { cate_name: "Travel", cate_slug: "travel" }
      ],
      day: "14.",
      month: "Jun, 2022",
      link: "/blogs/hidden-gem-destinations"
    },
    {
      id: 2,
      img: "/imgs/page/homepage1/news2.png",
      title: "Explore the big things happening in Dallas",
      categories: [
        { cate_name: "Culture", cate_slug: "culture" }
      ],
      day: "18.",
      month: "Jun, 2022",
      link: "/blogs/dallas-exploration"
    },
    {
      id: 3,
      img: "/imgs/page/homepage1/news3.png",
      title: "LA's worst traffic areas and how to avoid them",
      categories: [
        { cate_name: "News", cate_slug: "news" }
      ],
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