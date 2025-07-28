<template>
  <nav class="box-pagination" v-show="props.totalPages > 1">
    <ul class="pagination">
      <!-- Previous Page -->
      <li class="page-item" :class="{ disabled: props.currentPage === 1 }">
        <a class="page-link page-prev" href="#" @click.prevent="goToPage(props.currentPage - 1)">
          <svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
          </svg>
        </a>
      </li>
      
      <!-- First Page -->
      <li class="page-item" v-if="showFirstPage">
        <a class="page-link" href="#" @click.prevent="goToPage(1)">1</a>
      </li>
      
      <!-- Ellipsis after first page -->
      <li class="page-item" v-if="showFirstEllipsis">
        <a class="page-link" href="#">...</a>
      </li>
      
      <!-- Page Numbers -->
      <li class="page-item" v-for="page in visiblePages" :key="page">
        <a class="page-link" :class="{ active: page === props.currentPage }" href="#" @click.prevent="goToPage(page)">
          {{ page }}
        </a>
      </li>
      
      <!-- Ellipsis before last page -->
      <li class="page-item" v-if="showLastEllipsis">
        <a class="page-link" href="#">...</a>
      </li>
      
      <!-- Last Page -->
      <li class="page-item" v-if="showLastPage">
        <a class="page-link" href="#" @click.prevent="goToPage(props.totalPages)">{{ props.totalPages }}</a>
      </li>
      
      <!-- Next Page -->
      <li class="page-item" :class="{ disabled: props.currentPage === props.totalPages }">
        <a class="page-link page-next" href="#" @click.prevent="goToPage(props.currentPage + 1)">
          <svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script setup>
const props = defineProps({
  currentPage: {
    type: Number,
    required: true
  },
  totalPages: {
    type: Number,
    required: true
  },
  maxVisiblePages: {
    type: Number,
    default: 5
  }
});

const emit = defineEmits(['change']);

// Computed properties for pagination logic
const showFirstPage = computed(() => {
  return props.currentPage > 3;
});

const showFirstEllipsis = computed(() => {
  return props.currentPage > 4;
});

const showLastPage = computed(() => {
  return props.currentPage < props.totalPages - 2;
});

const showLastEllipsis = computed(() => {
  return props.currentPage < props.totalPages - 3;
});

const visiblePages = computed(() => {
  const pages = [];
  const halfVisible = Math.floor(props.maxVisiblePages / 2);
  
  let start = Math.max(1, props.currentPage - halfVisible);
  let end = Math.min(props.totalPages, props.currentPage + halfVisible);
  
  // Adjust if we're near the beginning
  if (props.currentPage <= halfVisible + 1) {
    end = Math.min(props.totalPages, props.maxVisiblePages);
  }
  
  // Adjust if we're near the end
  if (props.currentPage >= props.totalPages - halfVisible) {
    start = Math.max(1, props.totalPages - props.maxVisiblePages + 1);
  }
  
  for (let i = start; i <= end; i++) {
    pages.push(i);
  }
  
  return pages;
});

// Methods
const goToPage = (page) => {
  if (page >= 1 && page <= props.totalPages && page !== props.currentPage) {
    emit('change', page);
  }
};
</script>

<style scoped>
.page-item.disabled .page-link {
  opacity: 0.5;
  pointer-events: none;
}

.page-link {
  cursor: pointer;
  transition: all 0.3s ease;
}

.page-link:hover {
  background-color: #f8f9fa;
}

.page-link.active {
  background-color: #007bff;
  border-color: #007bff;
  color: white;
}
</style>
