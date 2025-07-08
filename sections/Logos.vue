<template>
  <section class="section logos-section">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h3 class="text-center mb-4">Trusted Partners</h3>
          <div class="logos-grid">
            <!-- Logo placeholders -->
            <div class="logo-item">
              <img src="/imgs/template/logo.svg" alt="Partner Logo" />
            </div>
            <div class="logo-item">
              <img src="/imgs/template/logo.svg" alt="Partner Logo" />
            </div>
            <div class="logo-item">
              <img src="/imgs/template/logo.svg" alt="Partner Logo" />
            </div>
            <div class="logo-item">
              <img src="/imgs/template/logo.svg" alt="Partner Logo" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Logos section logic
</script>

<style scoped>
.logos-section {
  padding: 60px 0;
  background: #f8f9fa;
}

.logos-grid {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  gap: 30px;
}

.logo-item {
  max-width: 150px;
  opacity: 0.7;
  transition: opacity 0.3s ease;
}

.logo-item:hover {
  opacity: 1;
}

.logo-item img {
  max-width: 100%;
  height: auto;
}
</style> 