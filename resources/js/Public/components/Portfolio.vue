<template>
  <div id="portfolio" class="row">
    <div class="col-12">
      <h1 class="title">{{text.main_title}}</h1>

      <div class="row align-items-start">
        <div
          class="col-12 col-sm-6 col-lg-4 item"
          v-for="(item, index) in portfolioGallery"
          v-bind:key="index"
        >
          <figure @click="showPortfolioDescription(item)" data-toggle="modal" data-target="#modalPortfolioItem">
            <img :src="item.background_img" alt class="img-portfolio" />
            <section class="work__description">
              <p class="work__title">{{item.work_title}}</p>
              <p class="work__year">{{item.work_year}}</p>
            </section>
          </figure>
        </div>
      </div>
    </div>
    <PortfolioItem :selected-portfolio="selectedPortfolio" :buttonLabel="text.visit"></PortfolioItem>
  </div>
</template>

<script setup>
import { ref } from "vue"
import PortfolioItem from "./Modals/PortfolioItem.vue"

const props = defineProps({
  text: Object
})

const portfolioGallery = ref(props.text.projects)
const selectedPortfolio = ref({})

function showPortfolioDescription(item) {
  selectedPortfolio.value = item
}

</script>
