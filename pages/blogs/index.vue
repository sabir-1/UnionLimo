<template>
    <div>
        <HeaderVariation5 />
        <BreadCrumb />
        <section class="section pt-60 bg-white latest-new-white">
            <div class="container-sub">
                <div class="row mt-50">
                    <div class="col-lg-4" v-for="blog in blogs" :key="blog.id">
                        <CardNews 
                            :img="blog.img"
                            :title="blog.title" 
                            :tag="blog.category" 
                            :date="blog.day" 
                            :monthYear="blog.month"
                            :link="blog.link" />
                    </div>
                </div>

                <div class="text-center mt-40 mb-120 wow fadeInDown">
                    <Pagination />
                </div>
            </div>
        </section>
        <FooterVariation7 />
    </div>
</template>

<script setup>
import CardNews from '@/components/CardNews.vue';
import Pagination from '~/elements/Pagination.vue';
import HeaderVariation5 from '~/components/HeaderVariation5.vue';
import FooterVariation7 from '~/components/FooterVariation7.vue';
import BreadCrumb from '~/components/BreadCrumb.vue';

// Dynamic blog data
const blogs = ref([
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
    },
    {
        id: 4,
        img: "/imgs/page/blog/news1.png",
        title: "How to avoid the impact of rising gas prices around the globe",
        category: "Travel",
        day: "14.",
        month: "Jun, 2022",
        link: "/blogs/gas-prices-impact"
    },
    {
        id: 5,
        img: "/imgs/page/blog/news2.png",
        title: "Travel around the UK like royalty",
        category: "Culture",
        day: "18.",
        month: "Jun, 2022",
        link: "/blogs/uk-royal-travel"
    },
    {
        id: 6,
        img: "/imgs/page/blog/news3.png",
        title: "The next eco-friendly frontier: Boston",
        category: "News",
        day: "20.",
        month: "Jun, 2022",
        link: "/blogs/boston-eco-friendly"
    },
    {
        id: 7,
        img: "/imgs/page/blog/news1.png",
        title: "3 reasons to swap your short-haul flight for a road trip",
        category: "Travel",
        day: "14.",
        month: "Jun, 2022",
        link: "/blogs/road-trip-vs-flight"
    },
    {
        id: 8,
        img: "/imgs/page/blog/news2.png",
        title: "Plan the perfect NYC Memorial Day weekend",
        category: "Culture",
        day: "18.",
        month: "Jun, 2022",
        link: "/blogs/nyc-memorial-day"
    },
    {
        id: 9,
        img: "/imgs/page/blog/news3.png",
        title: "Escaping London for a relaxing long weekend",
        category: "News",
        day: "20.",
        month: "Jun, 2022",
        link: "/blogs/london-escape"
    },
    {
        id: 10,
        img: "/imgs/page/homepage1/news1.png",
        title: "Luxury car rental trends in 2024",
        category: "Luxury",
        day: "25.",
        month: "Dec, 2023",
        link: "/blogs/luxury-car-trends"
    },
    {
        id: 11,
        img: "/imgs/page/homepage1/news2.png",
        title: "Best chauffeur services in major cities",
        category: "Service",
        day: "28.",
        month: "Dec, 2023",
        link: "/blogs/best-chauffeur-services"
    },
    {
        id: 12,
        img: "/imgs/page/homepage1/news3.png",
        title: "Corporate transportation solutions",
        category: "Business",
        day: "30.",
        month: "Dec, 2023",
        link: "/blogs/corporate-transportation"
    }
]);
</script>
