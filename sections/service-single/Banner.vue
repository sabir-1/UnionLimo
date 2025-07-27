<template>
  <section class="section">
    <div class="banner-image-service wow fadeInDown"></div>
    <div class="box-form-service-single">
      <div class="box-search-ride box-search-ride-style-2 wow fadeInDown">
        <!-- <div class="box-search-tabs">
          <div class="head-tabs">
            <ul class="nav nav-tabs nav-tabs-search" role="tablist">
              <li>
                <a class="active" href="#tab-distance" data-bs-toggle="tab" role="tab" aria-controls="tab-distance" aria-selected="true">
                  Distance
                </a>
              </li>
              <li>
                <a href="#tab-hourly" data-bs-toggle="tab" role="tab" aria-controls="tab-hourly" aria-selected="false">
                  Hourly
                </a>
              </li>
              <li>
                <a href="#tab-rate" data-bs-toggle="tab" role="tab" aria-controls="tab-rate" aria-selected="false">
                  Flat Rate
                </a>
              </li>
            </ul>
          </div>
          <div class="tab-content">
            <div id="tab-distance" class="tab-pane fade active show" role="tabpanel" aria-labelledby="tab-distance">
              <div class="box-form-search">
                <div class="search-item search-date">
                  <div class="search-icon">
                    <span class="item-icon icon-date"></span>
                  </div>
                  <div class="search-inputs">
                    <label class="text-14 color-grey">Date</label>
                    <input class="search-input datepicker-2" type="text" placeholder="" value="Thu, Oct 06, 2022" />
                  </div>
                </div>
                <div class="search-item search-time">
                  <div class="search-icon">
                    <span class="item-icon icon-time"></span>
                  </div>
                  <div class="search-inputs">
                    <label class="text-14 color-grey">Time</label>
                    <input class="search-input timepicker" type="text" placeholder="" value="6 PM  :  15" />
                  </div>
                </div>
                <div class="search-item search-from">
                  <div class="search-icon">
                    <span class="item-icon icon-from"></span>
                  </div>
                  <div class="search-inputs">
                    <label class="text-14 color-grey">From</label>
                    <input class="search-input dropdown-location" type="text" placeholder="" value="London City Airport (LCY)" readonly="readonly" />
                    <LocationsDropdown />
                  </div>
                </div>
                <div class="search-item search-to">
                  <div class="search-icon">
                    <span class="item-icon icon-to"></span>
                  </div>
                  <div class="search-inputs">
                    <label class="text-14 color-grey">To</label>
                    <input class="search-input dropdown-location" type="text" placeholder="" value="London City Airport (LCY)" readonly="readonly" />
                    <LocationsDropdown />
                  </div>
                </div>
                <div class="search-item search-button mb-0">
                  <button class="btn btn-search" type="submit">
                    <img src="/imgs/template/icons/search.svg" alt="luxride" />
                    Search
                  </button>
                </div>
              </div>
            </div>
            <div id="tab-hourly" class="tab-pane fade" role="tabpanel" aria-labelledby="tab-hourly">
              <div class="box-form-search">
                <div class="search-item search-time">
                  <div class="search-icon">
                    <span class="item-icon icon-time"></span>
                  </div>
                  <div class="search-inputs">
                    <label class="text-14 color-grey">Time</label>
                    <input class="search-input timepicker" type="text" placeholder="" value="6 PM  :  15" />
                  </div>
                </div>
                <div class="search-item search-date">
                  <div class="search-icon">
                    <span class="item-icon icon-date"></span>
                  </div>
                  <div class="search-inputs">
                    <label class="text-14 color-grey">Date</label>
                    <input class="search-input datepicker" type="text" placeholder="" value="Thu, Oct 06, 2022" />
                  </div>
                </div>
                <div class="search-item search-from">
                  <div class="search-icon">
                    <span class="item-icon icon-from"></span>
                  </div>
                  <div class="search-inputs">
                    <label class="text-14 color-grey">From</label>
                    <input class="search-input dropdown-location" type="text" placeholder="" value="London City Airport (LCY)" readonly="readonly" />
                    <LocationsDropdown />
                  </div>
                </div>
                <div class="search-item search-to">
                  <div class="search-icon">
                    <span class="item-icon icon-to"></span>
                  </div>
                  <div class="search-inputs">
                    <label class="text-14 color-grey">To</label>
                    <input class="search-input dropdown-location" type="text" placeholder="" value="London City Airport (LCY)" readonly="readonly" />
                    <LocationsDropdown />
                  </div>
                </div>
                <div class="search-item search-button mb-0">
                  <button class="btn btn-search" type="submit">
                    <img src="/imgs/template/icons/search.svg" alt="luxride" />
                    Search
                  </button>
                </div>
              </div>
            </div>
            <div id="tab-rate" class="tab-pane fade" role="tabpanel" aria-labelledby="tab-rate">
              <div class="box-form-search">
                <div class="search-item search-date">
                  <div class="search-icon">
                    <span class="item-icon icon-date"></span>
                  </div>
                  <div class="search-inputs">
                    <label class="text-14 color-grey">Date</label>
                    <input class="search-input datepicker" type="text" placeholder="" value="Thu, Oct 06, 2022" />
                  </div>
                </div>
                <div class="search-item search-time">
                  <div class="search-icon">
                    <span class="item-icon icon-time"></span>
                  </div>
                  <div class="search-inputs">
                    <label class="text-14 color-grey">Time</label>
                    <input class="search-input timepicker" type="text" placeholder="" value="6 PM  :  15" />
                  </div>
                </div>
                <div class="search-item search-from">
                  <div class="search-icon">
                    <span class="item-icon icon-from"></span>
                  </div>
                  <div class="search-inputs">
                    <label class="text-14 color-grey">From</label>
                    <input class="search-input dropdown-location" type="text" placeholder="" value="London City Airport (LCY)" readonly="readonly" />
                    <LocationsDropdown />
                  </div>
                </div>
                <div class="search-item search-to">
                  <div class="search-icon">
                    <span class="item-icon icon-to"></span>
                  </div>
                  <div class="search-inputs">
                    <label class="text-14 color-grey">To</label>
                    <input class="search-input dropdown-location" type="text" placeholder="" value="London City Airport (LCY)" readonly="readonly" />
                    <LocationsDropdown />
                  </div>
                </div>
                <div class="search-item search-button mb-0">
                  <button class="btn btn-search" type="submit">
                    <img src="/imgs/template/icons/search.svg" alt="luxride" />
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div> -->
      </div>
    </div>
  </section>
</template>

<script setup>
import LocationsDropdown from '@/components/LocationsDropdown.vue'
</script>

<style scoped>
/* Add any component-specific styles here */
</style> 