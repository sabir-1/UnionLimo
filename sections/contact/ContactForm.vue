<template>
  <section class="section mt-120 mb-120">
    <div class="container-sub">
      <div class="mw-770">
        <h2 class="heading-44-medium mb-60 text-center wow fadeInDown">Leave us your info</h2>
        <div class="form-contact form-comment wow fadeInUp">
          <form @submit.prevent="handleSubmit">
            <div class="row">
              <div class="col-lg-6 col-md-6">
                <div class="form-group">
                  <label class="form-label" for="fullname">Full Name</label>
                  <input 
                    id="fullname" 
                    v-model="formData.fullname" 
                    class="form-control" 
                    type="text" 
                    placeholder="Full Name"
                  />
                </div>
              </div>
              <div class="col-lg-6 col-md-6">
                <div class="form-group">
                  <label class="form-label" for="email">Email</label>
                  <input 
                    id="email" 
                    v-model="formData.email" 
                    class="form-control" 
                    type="email" 
                    placeholder=""
                  />
                </div>
              </div>
              <div class="col-lg-12">
                <div class="form-group">
                  <label class="form-label" for="subject">Subject</label>
                  <input 
                    id="subject" 
                    v-model="formData.subject" 
                    class="form-control" 
                    type="text" 
                    placeholder=""
                  />
                </div>
              </div>
              <div class="col-lg-12">
                <div class="form-group">
                  <label class="form-label" for="message">Message</label>
                  <textarea 
                    id="message" 
                    v-model="formData.message" 
                    class="form-control"
                  ></textarea>
                </div>
              </div>
              <div class="col-lg-12">
                <button class="btn btn-primary" type="submit">
                  Get In Touch
                  <svg class="icon-16 ml-5" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"></path>
                  </svg>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive } from 'vue'

const formData = reactive({
  fullname: 'Ali Tufan',
  email: '',
  subject: '',
  message: ''
})

const handleSubmit = () => {
  // Handle form submission logic here
  console.log('Form submitted:', formData)
}
</script>

<style scoped>
/* Component styles here if needed */
</style> 