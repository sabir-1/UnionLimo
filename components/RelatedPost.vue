<template>
  <section class="section pt-80 bg-white latest-new-white mb-20">
    <div class="container-sub">
      <h2 class="heading-44-medium color-text mb-60 wow fadeInDown">Related Posts</h2>
      
      <!-- Loading State -->
      <div v-if="loading" class="text-center py-40">
        <div class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
        <p class="mt-3">Loading related posts...</p>
      </div>

      <!-- Error State -->
      <div v-else-if="error" class="text-center py-40">
        <div class="alert alert-warning" role="alert">
          <p>{{ error }}</p>
        </div>
      </div>

      <!-- Related Posts -->
      <div v-else-if="relatedPosts.length > 0" class="row">
        <div class="col-lg-4" v-for="(post, idx) in relatedPosts" :key="post.id || idx">
          <CardNews
            :img="post.img"
            :title="post.title"
            :tag="post.tag"
            :date="post.date"
            :monthYear="post.monthYear"
            :link="post.link"
          />
        </div>
      </div>

      <!-- No Related Posts -->
      <div v-else class="text-center py-40">
        <p class="text-muted">No related posts found.</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import CardNews from './CardNews.vue'

// Props
const props = defineProps({
  postId: {
    type: [String, Number],
    required: true
  }
});

// Use the related posts composable
const { relatedPosts, loading, error, fetchRelatedPosts } = useRelatedPosts();

// Fetch related posts when component mounts
onMounted(async () => {
  if (props.postId) {
    await fetchRelatedPosts(props.postId);
  }
});

// Watch for postId changes
watch(() => props.postId, async (newPostId) => {
  if (newPostId) {
    await fetchRelatedPosts(newPostId);
  }
});
</script>
