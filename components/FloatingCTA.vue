<template>
  <div class="floating-cta">
    <!-- Phone CTA Button -->
    <a 
      :href="`tel:${contact?.phone || '+1234567890'}`" 
      class="cta-button phone-cta" 
      title="Call Us Now"
    >
      <div class="cta-icon">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" fill="currentColor"/>
        </svg>
      </div>
      <!-- <span class="cta-text">Call Now</span> -->
    </a>

    <!-- Email CTA Button -->
    <a 
      :href="`mailto:${contact?.email || 'info@unionlimo.com'}`" 
      class="cta-button email-cta" 
      title="Email Us"
    >
      <div class="cta-icon">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
  <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
  <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
</svg>

      </div>
      <!-- <span class="cta-text">Email</span> -->
    </a>
  </div>
</template>

<script setup>
// Import company data composable
import useCompanyData from '~/composables/useCompanyData.js'

// Get contact information
const { contact } = useCompanyData()
</script>

<style scoped>
.floating-cta {
  position: fixed;
  right: 20px;
  bottom: 4%;
  transform: translateY(-50%);
  z-index: 1000;
  display: flex;
  flex-direction: column;
  gap: 15px;
  animation: slideInRight 0.6s ease-out;
}

@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateY(-50%) translateX(100px);
  }
  to {
    opacity: 1;
    transform: translateY(-50%) translateX(0);
  }
}

.cta-button {
  display: flex;
  align-items: center;
  gap: 12px;
  background: #007bff;
  color: white;
  text-decoration: none;
  padding: 15px 15px;
  border-radius: 50px;
  box-shadow: 0 4px 20px rgba(0, 123, 255, 0.3);
  transition: all 0.3s ease; 
  font-weight: 500;
  font-size: 14px;
}

.cta-button:hover {
  background: #0056b3;
  transform: translateX(-5px);
  box-shadow: 0 6px 25px rgba(0, 123, 255, 0.4);
}

.cta-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  flex-shrink: 0;
}

.cta-text {
  white-space: nowrap;
}

/* Phone button specific styles */
.phone-cta {
  background: #28a745;
  box-shadow: 0 4px 20px rgba(40, 167, 69, 0.3);
  animation: pulse 2s infinite;
}

.phone-cta:hover {
  background: #1e7e34;
  box-shadow: 0 6px 25px rgba(40, 167, 69, 0.4);
  animation: none;
}

@keyframes pulse {
  0% {
    box-shadow: 0 4px 20px rgba(40, 167, 69, 0.3);
  }
  50% {
    box-shadow: 0 4px 20px rgba(40, 167, 69, 0.6);
  }
  100% {
    box-shadow: 0 4px 20px rgba(40, 167, 69, 0.3);
  }
}

/* Email button specific styles */
.email-cta {
  background: #6f42c1;
  box-shadow: 0 4px 20px rgba(111, 66, 193, 0.3);
}

.email-cta:hover {
  background: #5a2d91;
  box-shadow: 0 6px 25px rgba(111, 66, 193, 0.4);
}

/* Responsive design */
@media (max-width: 768px) {
  .floating-cta {
    right: 15px;
    gap: 10px;
  }
  
  .cta-button {
    padding: 12px 15px;
    min-width: 120px;
    font-size: 13px;
  }
  
  .cta-text {
    display: none;
  }
  
  .cta-button {
    min-width: auto;
    padding: 15px;
  }
}

@media (max-width: 480px) {
  .floating-cta {
    right: 10px;
  }
  
  .cta-button {
    padding: 12px;
  }
}
</style>
