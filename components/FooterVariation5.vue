<template>
  <footer class="footer footer-3">
    <div class="footer-1">
      <div class="container-sub">
        <div class="box-footer-top wow fadeInRight">
          <div class="d-flex align-items-center justify-content-between flex-wrap">
            <a :href="`tel:${contact.phone_primary}`" class="text-14-medium call-phone color-white hover-up d-inline-block mb-20">
              {{ contact.phone_primary || '+1 (718) 514-9881' }}
            </a>
            <span class="text-14-medium address-footer color-white hover-up d-inline-block mb-20">
              {{ address.line_one || '199-04 Hillside Avenue, Queens, NY 11423, United States' }}
            </span>
            <span class="text-14-medium time-footer color-white hover-up d-inline-block mb-20">
              Mon-Sat: 09:00 - 17:00 - Sun: Closed
            </span>
          </div>
        </div>
        <div class="row mb-40">
          <div class="col-lg-3 width-20 wow fadeInRight">
            <h5 class="text-18-medium color-white mb-20">Company</h5>
            <ul class="menu-footer">
              <li><a href="#">About us</a></li>
              <li><a href="#">Our offerings</a></li>
              <li><a href="#">Newsroom</a></li>
              <li><a href="#">Investors</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Gift cards</a></li>
            </ul>
          </div>
          <div class="col-lg-3 width-20 mb-30 wow fadeInRight">
            <h5 class="text-18-medium color-white mb-20">Top cities</h5>
            <ul class="menu-footer">
              <li><NuxtLink to="/about">New York</NuxtLink></li>
              <li><NuxtLink to="/our-team">London</NuxtLink></li>
              <li><a href="#">Berlin</a></li>
              <li><a href="#">Los Angeles</a></li>
              <li><a href="#">Paris</a></li>
            </ul>
          </div>
          <div class="col-lg-3 width-20 mb-30 wow fadeInRight">
            <h5 class="text-18-medium color-white mb-20">Explore</h5>
            <ul class="menu-footer">
              <li><a href="#">Intercity rides</a></li>
              <li><a href="#">Limousine service</a></li>
              <li><a href="#">Chauffeur service</a></li>
              <li><a href="#">Private car service</a></li>
              <li><a href="#">Ground transportation</a></li>
              <li><a href="#">Airport transfer</a></li>
            </ul>
          </div>
          <div class="col-lg-3 width-20 mb-30 wow fadeInRight">
            <h5 class="text-18-medium color-white mb-20">Classes</h5>
            <ul class="menu-footer">
              <li><a href="#">Business</a></li>
              <li><a href="#">First</a></li>
              <li><a href="#">XL</a></li>
              <li><a href="#">Assistant</a></li>
            </ul>
          </div>
          <div class="col-lg-3 width-20 wow fadeInRight">
            <h5 class="text-18-medium color-white mb-20">Download The App</h5>
            <div class="text-start">
              <div class="box-button-download">
                <a href="#" class="btn btn-download mb-20 hover-up wow fadeInRight">
                  <div class="inner-download">
                    <div class="icon-download">
                      <img src="/imgs/template/icons/apple-icon.svg" alt="luxride" />
                    </div>
                    <div class="info-download">
                      <span class="text-download-top">Download on the</span>
                      <span class="text-14-medium">Apple Store</span>
                    </div>
                  </div>
                </a>
                <a href="#" class="btn btn-download mb-20 hover-up wow fadeInRight">
                  <div class="inner-download">
                    <div class="icon-download">
                      <img src="/imgs/template/icons/google-icon.svg" alt="luxride" />
                    </div>
                    <div class="info-download">
                      <span class="text-download-top">Download on the</span>
                      <span class="text-14-medium">Apple Store</span>
                    </div>
                  </div>
                </a>
              </div>
              <div class="mt-25">
                <div class="text-18-medium color-white mb-20">Follow Us</div>
                <a v-if="social.facebook" :href="social.facebook" target="_blank" class="icon-socials icon-facebook"></a>
                <a v-if="social.twitter" :href="social.twitter" target="_blank" class="icon-socials icon-twitter"></a>
                <a v-if="social.instagram" :href="social.instagram" target="_blank" class="icon-socials icon-instagram"></a>
                <a v-if="social.linkedin" :href="social.linkedin" target="_blank" class="icon-socials icon-linkedin"></a>
                <a v-if="social.pinterest" :href="social.pinterest" target="_blank" class="icon-socials icon-pinterest"></a>
                <a v-if="social.youtube" :href="social.youtube" target="_blank" class="icon-socials icon-youtube"></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-2">
      <div class="container-sub">
        <div class="footer-bottom">
          <div class="row align-items-center">
            <div class="col-lg-8 col-md-12 text-center text-lg-start">
              <span class="text-14 color-white mr-50">{{ copyright || '© 2025 All Rights Reserved.' }}</span>
              <ul class="menu-bottom">
                <li><a href="/term-conditions">Terms</a></li>
                <li><a href="/term-conditions">Privacy policy</a></li>
                <li><a href="/term-conditions">Legal notice</a></li>
                <li><a href="#">Accessibility</a></li>
              </ul>
            </div>
            <div class="col-lg-4 col-md-12 text-center text-lg-end">
              <a href="#" class="btn btn-link-location">New York</a>
              <a href="#" class="btn btn-link-globe active">English</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
// Import company data composable
import useCompanyData from '~/composables/useCompanyData.js'

// Use company data composable
const { contact, address, social, copyright, fetchCompanyData } = useCompanyData()

// Fetch company data on component mount
onMounted(() => {
  fetchCompanyData()
})
</script>

<style scoped>
/* FooterVariation5 specific styles */
</style> 