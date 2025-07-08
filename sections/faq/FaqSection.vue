<template>
  <section class="section mt-120 mb-100">
    <div class="container-sub">
      <!-- Billing FAQ Section -->
      <div class="box-faqs">
        <div class="text-center">
          <h2 class="heading-44-medium color-text mb-20 wow fadeInDown">Billing</h2>
        </div>
        <div class="mt-60 mb-40">
          <div id="accordionFAQ" class="accordion wow fadeInUp">
            <div 
              v-for="(faq, index) in billingFaqs" 
              :key="`billing-${index}`"
              class="accordion-item"
            >
              <h5 :id="`heading${index + 1}`" class="accordion-header">
                <button 
                  class="accordion-button text-heading-5"
                  :class="{ 'collapsed': activeFaq !== `billing-${index}` }"
                  type="button"
                  :data-bs-toggle="'collapse'"
                  :data-bs-target="`#collapse${index + 1}`"
                  :aria-expanded="activeFaq === `billing-${index}` ? 'true' : 'false'"
                  :aria-controls="`collapse${index + 1}`"
                  @click="toggleFaq(`billing-${index}`)"
                >
                  {{ faq.question }}
                </button>
              </h5>
              <div 
                :id="`collapse${index + 1}`"
                class="accordion-collapse collapse"
                :class="{ 'show': activeFaq === `billing-${index}` }"
                :aria-labelledby="`heading${index + 1}`"
                data-bs-parent="#accordionFAQ"
              >
                <div class="accordion-body">
                  {{ faq.answer }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Features FAQ Section -->
      <div class="box-faqs mt-80">
        <div class="text-center">
          <h2 class="heading-44-medium color-text mb-20">Features</h2>
        </div>
        <div class="mt-60 mb-40">
          <div id="accordionFAQ2" class="accordion">
            <div 
              v-for="(faq, index) in featuresFaqs" 
              :key="`features-${index}`"
              class="accordion-item"
            >
              <h5 :id="`heading${index + 1}2`" class="accordion-header">
                <button 
                  class="accordion-button text-heading-5"
                  :class="{ 'collapsed': activeFaq !== `features-${index}` }"
                  type="button"
                  :data-bs-toggle="'collapse'"
                  :data-bs-target="`#collapse${index + 1}2`"
                  :aria-expanded="activeFaq === `features-${index}` ? 'true' : 'false'"
                  :aria-controls="`collapse${index + 1}2`"
                  @click="toggleFaq(`features-${index}`)"
                >
                  {{ faq.question }}
                </button>
              </h5>
              <div 
                :id="`collapse${index + 1}2`"
                class="accordion-collapse collapse"
                :class="{ 'show': activeFaq === `features-${index}` }"
                :aria-labelledby="`heading${index + 1}2`"
                data-bs-parent="#accordionFAQ2"
              >
                <div class="accordion-body">
                  {{ faq.answer }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const activeFaq = ref('billing-0') // Default to first billing FAQ open

const billingFaqs = ref([
  {
    question: 'How do I create an account?',
    answer: 'Creating an account is simple. Download our app from the App Store or Google Play Store, click on "Sign Up", and follow the registration process. You can also create an account through our website by clicking the "Register" button.'
  },
  {
    question: 'How do I earn Easy Ride Rewards points?',
    answer: 'You earn points for every ride you take with us. Points are automatically added to your account after each completed trip. You can also earn bonus points for referrals and special promotions.'
  },
  {
    question: 'How can I add my credit card on the app for payments?',
    answer: 'To add a credit card, go to your profile settings in the app, select "Payment Methods", and tap "Add New Card". Enter your card details securely, and it will be saved for future payments.'
  },
  {
    question: 'How do I become a Captain?',
    answer: 'To become a Captain (driver), you need to meet our requirements including a valid driver\'s license, clean driving record, and pass our background check. Apply through our driver portal on our website.'
  },
  {
    question: 'Where can I get more information, support or make a claim?',
    answer: 'For support, you can contact us through the app, call our 24/7 customer service line, or email us at support@luxride.com. For claims, please visit our claims portal on our website.'
  }
])

const featuresFaqs = ref([
  {
    question: 'What types of vehicles do you offer?',
    answer: 'We offer a wide range of vehicles including luxury sedans, SUVs, limousines, and vans. Each vehicle is maintained to the highest standards and equipped with modern amenities for your comfort.'
  },
  {
    question: 'Do you provide airport transfer services?',
    answer: 'Yes, we specialize in airport transfers. Our drivers track your flight and adjust pickup times accordingly. We offer both one-way and round-trip airport transportation services.'
  },
  {
    question: 'Can I book a ride for someone else?',
    answer: 'Absolutely! You can book rides for family members, friends, or colleagues. Simply enter their pickup and drop-off locations, and we\'ll take care of the rest. You can also add special instructions for the driver.'
  },
  {
    question: 'What is your cancellation policy?',
    answer: 'You can cancel your booking up to 2 hours before the scheduled pickup time without any charges. Cancellations made within 2 hours may incur a cancellation fee depending on the service type.'
  },
  {
    question: 'Do you provide child seats?',
    answer: 'Yes, we provide child seats upon request. Please specify the age and weight of your child when booking so we can provide the appropriate safety seat. There may be a small additional fee for this service.'
  }
])

const toggleFaq = (faqId) => {
  activeFaq.value = activeFaq.value === faqId ? null : faqId
}
</script>

<style scoped>
.section {
  padding: 80px 0;
}

.container-sub {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
}

.box-faqs {
  background: #fff;
  border-radius: 8px;
  padding: 40px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.heading-44-medium {
  font-size: 2.5rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 1rem;
}

.color-text {
  color: #333;
}

.mt-120 {
  margin-top: 120px;
}

.mb-100 {
  margin-bottom: 100px;
}

.mt-60 {
  margin-top: 60px;
}

.mb-40 {
  margin-bottom: 40px;
}

.mt-80 {
  margin-top: 80px;
}

.mb-20 {
  margin-bottom: 20px;
}

.text-center {
  text-align: center;
}

.accordion {
  border: none;
}

.accordion-item {
  border: 1px solid #e9ecef;
  border-radius: 8px;
  margin-bottom: 15px;
  overflow: hidden;
}

.accordion-header {
  margin: 0;
}

.accordion-button {
  background: #f8f9fa;
  border: none;
  padding: 20px;
  width: 100%;
  text-align: left;
  font-size: 1.1rem;
  font-weight: 600;
  color: #333;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
}

.accordion-button:hover {
  background: #e9ecef;
}

.accordion-button:not(.collapsed) {
  background: #007bff;
  color: #fff;
}

.accordion-button::after {
  content: '+';
  position: absolute;
  right: 20px;
  font-size: 1.5rem;
  font-weight: bold;
  transition: transform 0.3s ease;
}

.accordion-button:not(.collapsed)::after {
  transform: rotate(45deg);
}

.accordion-collapse {
  transition: all 0.3s ease;
}

.accordion-body {
  padding: 20px;
  background: #fff;
  color: #666;
  line-height: 1.6;
}

.text-heading-5 {
  font-size: 1.1rem;
  font-weight: 600;
}

/* Animation classes */
.wow {
  animation-duration: 1s;
  animation-fill-mode: both;
}

.fadeInDown {
  animation-name: fadeInDown;
}

.fadeInUp {
  animation-name: fadeInUp;
}

@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}

/* Responsive design */
@media (max-width: 768px) {
  .heading-44-medium {
    font-size: 2rem;
  }
  
  .box-faqs {
    padding: 20px;
  }
  
  .accordion-button {
    padding: 15px;
    font-size: 1rem;
  }
  
  .accordion-body {
    padding: 15px;
  }
}
</style> 