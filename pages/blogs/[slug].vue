<template>
    <div>
        <HeaderVariation5 />
        <BreadCrumb />
        <BlogDetail :blog-data="currentBlog" />
        <FooterVariation7 />
    </div>
</template>

<script setup>
import BlogDetail from '@/components/BlogDetail.vue';
import HeaderVariation5 from '@/components/HeaderVariation5.vue';
import FooterVariation7 from '@/components/FooterVariation7.vue';
import BreadCrumb from '@/components/BreadCrumb.vue';

// Get route params
const route = useRoute();
const { slug } = route.params;

// Dynamic blog data based on slug
const blogData = ref({
    'hidden-gem-destinations': {
        title: "3 hidden-gem destinations for your wish list",
        date: "14.",
        monthYear: "Jun, 2022",
        featuredImage: "/imgs/page/homepage1/news1.png",
        content: [
            "Discover three extraordinary destinations that are often overlooked by mainstream travelers. These hidden gems offer unique experiences, rich cultural heritage, and breathtaking landscapes that will make your travel wish list complete.",
            "From secluded mountain retreats to pristine coastal paradises, these destinations provide the perfect escape from crowded tourist hotspots while offering authentic local experiences."
        ],
        quote: "The best journeys are those that lead you to places you never knew existed, but once discovered, become part of your soul forever.",
        additionalContent: [
            "Each of these destinations has been carefully selected for their unique characteristics, accessibility, and the unforgettable experiences they offer to discerning travelers.",
            "Whether you're seeking adventure, relaxation, or cultural immersion, these hidden gems provide the perfect backdrop for creating lasting memories."
        ],
        middleImage: "/imgs/page/blog2/img-single2.png",
        galleryImages: [
            "/imgs/page/blog2/img-single3.png",
            "/imgs/page/blog2/img-single4.png"
        ],
        finalContent: [
            "Planning your visit to these destinations requires careful consideration of the best times to visit, local customs, and practical travel arrangements."
        ],
        subtitle: "Planning Your Adventure",
        subtitleContent: [
            "To make the most of your journey to these hidden gems, consider working with local guides who can provide insider knowledge and access to experiences not available to regular tourists.",
            "Remember to respect local cultures and environments, ensuring that your visit contributes positively to the communities you encounter."
        ],
        tags: ["Travel", "Destinations", "Adventure", "Culture"],
        author: {
            name: "Sarah Johnson",
            position: "Travel Expert",
            bio: "With over 15 years of experience in travel writing and exploration, Sarah has visited over 50 countries and specializes in uncovering hidden destinations that offer authentic experiences.",
            image: "/imgs/page/blog2/author.png"
        },
        navigation: {
            prev: {
                title: "Explore the big things happening in Dallas",
                link: "/blogs/dallas-exploration"
            },
            next: {
                title: "LA's worst traffic areas and how to avoid them",
                link: "/blogs/la-traffic-guide"
            }
        },
        reviews: [
            {
                id: 1,
                name: "Michael Chen",
                avatar: "M.C",
                date: "June 2022",
                comment: "This article inspired me to visit one of these destinations last summer. The experience was absolutely incredible and exceeded all my expectations. Highly recommend!"
            },
            {
                id: 2,
                name: "Emma Rodriguez",
                avatar: "E.R",
                date: "May 2022",
                comment: "Great recommendations! I've been to two of these places and they truly are hidden gems. The local experiences mentioned in the article were spot on."
            }
        ]
    },
    'dallas-exploration': {
        title: "Explore the big things happening in Dallas",
        date: "18.",
        monthYear: "Jun, 2022",
        featuredImage: "/imgs/page/homepage1/news2.png",
        content: [
            "Dallas, Texas is experiencing a renaissance of culture, cuisine, and creativity that's transforming the city into one of the most exciting destinations in the United States.",
            "From world-class museums to innovative dining scenes, Dallas offers visitors a unique blend of southern charm and cosmopolitan sophistication."
        ],
        quote: "Dallas isn't just a city; it's a state of mind where tradition meets innovation in the most unexpected ways.",
        additionalContent: [
            "The city's arts district has become a cultural powerhouse, featuring some of the most impressive collections and performances in the country.",
            "Food lovers will find themselves in paradise with Dallas's burgeoning culinary scene, from traditional Texas barbecue to cutting-edge fusion cuisine."
        ],
        middleImage: "/imgs/page/blog2/img-single2.png",
        galleryImages: [
            "/imgs/page/blog2/img-single3.png",
            "/imgs/page/blog2/img-single4.png"
        ],
        finalContent: [
            "Whether you're interested in history, art, food, or simply experiencing the warm hospitality that Texas is famous for, Dallas has something to offer every type of traveler."
        ],
        subtitle: "The Dallas Experience",
        subtitleContent: [
            "Beyond the well-known attractions, Dallas offers countless opportunities to discover hidden gems that showcase the city's diverse character and rich heritage.",
            "From historic neighborhoods to modern developments, each area of Dallas tells a story of growth, innovation, and community."
        ],
        tags: ["Culture", "Dallas", "Texas", "Travel"],
        author: {
            name: "David Martinez",
            position: "Cultural Writer",
            bio: "A native Texan with a passion for uncovering the stories that make cities unique, David has spent years exploring Dallas's cultural landscape and sharing its hidden treasures.",
            image: "/imgs/page/blog2/author.png"
        },
        navigation: {
            prev: {
                title: "3 hidden-gem destinations for your wish list",
                link: "/blogs/hidden-gem-destinations"
            },
            next: {
                title: "LA's worst traffic areas and how to avoid them",
                link: "/blogs/la-traffic-guide"
            }
        },
        reviews: [
            {
                id: 1,
                name: "Jennifer Lee",
                avatar: "J.L",
                date: "June 2022",
                comment: "As a Dallas resident, I love how this article captures the city's transformation. The recommendations are spot-on and showcase the best of what Dallas has to offer."
            },
            {
                id: 2,
                name: "Robert Wilson",
                avatar: "R.W",
                date: "May 2022",
                comment: "Visited Dallas based on this article and was blown away by the cultural scene. The arts district is truly world-class and the food scene is incredible."
            }
        ]
    },
    'la-traffic-guide': {
        title: "LA's worst traffic areas and how to avoid them",
        date: "20.",
        monthYear: "Jun, 2022",
        featuredImage: "/imgs/page/homepage1/news3.png",
        content: [
            "Los Angeles is famous for many things, but perhaps most notorious is its traffic congestion. Understanding the city's traffic patterns can make the difference between a frustrating commute and a smooth journey.",
            "This comprehensive guide will help you navigate LA's most congested areas and discover alternative routes that can save you hours of travel time."
        ],
        quote: "In LA, time spent in traffic is time not spent enjoying the city. Smart navigation is the key to unlocking the full LA experience.",
        additionalContent: [
            "The key to mastering LA traffic is understanding the city's unique geography and the various transportation options available to residents and visitors alike.",
            "From the 405 freeway to downtown bottlenecks, we'll explore the most challenging areas and provide practical solutions for avoiding gridlock."
        ],
        middleImage: "/imgs/page/blog2/img-single2.png",
        galleryImages: [
            "/imgs/page/blog2/img-single3.png",
            "/imgs/page/blog2/img-single4.png"
        ],
        finalContent: [
            "With proper planning and the right tools, you can minimize your time in traffic and maximize your enjoyment of everything Los Angeles has to offer."
        ],
        subtitle: "Smart Navigation Strategies",
        subtitleContent: [
            "Technology has revolutionized how we navigate LA's complex road network. From real-time traffic apps to alternative transportation options, there are more ways than ever to beat the traffic.",
            "Consider combining different modes of transportation, from Metro rail to rideshare services, to create the most efficient route for your specific needs."
        ],
        tags: ["LA", "Traffic", "Navigation", "Transportation"],
        author: {
            name: "Lisa Thompson",
            position: "Urban Planning Expert",
            bio: "With a background in urban planning and years of experience studying LA's transportation systems, Lisa provides expert insights into navigating the city's complex road network.",
            image: "/imgs/page/blog2/author.png"
        },
        navigation: {
            prev: {
                title: "Explore the big things happening in Dallas",
                link: "/blogs/dallas-exploration"
            },
            next: {
                title: "How to avoid the impact of rising gas prices around the globe",
                link: "/blogs/gas-prices-impact"
            }
        },
        reviews: [
            {
                id: 1,
                name: "Carlos Mendez",
                avatar: "C.M",
                date: "June 2022",
                comment: "This guide saved me hours of commute time! The alternative routes mentioned are gold, especially during rush hour. Highly recommend for anyone driving in LA."
            },
            {
                id: 2,
                name: "Amanda Foster",
                avatar: "A.F",
                date: "May 2022",
                comment: "As a new LA resident, this article was incredibly helpful. The tips about timing and alternative transportation options have made my daily commute much more manageable."
            }
        ]
    }
});

// Get current blog data based on slug
const currentBlog = computed(() => {
    return blogData.value[slug] || blogData.value['hidden-gem-destinations'];
});
</script>

