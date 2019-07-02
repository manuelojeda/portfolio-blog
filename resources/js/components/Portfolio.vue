<template>
  <div id="portfolio" class="row">
    <div class="col-12">
      <h1 class="title">{{text.main_title}}</h1>

      <div class="row align-items-start">
        <div
          class="col-12 col-sm-6 col-lg-4 item"
          v-for="(item, index) in portfolio_gallery"
          v-bind:key="index"
        >
          <figure @click="showPortfolioDescription(item)">
            <img :src="item.background_img" alt class="img-portfolio" />
            <section class="work__description">
              <p class="work__title">{{item.work_title}}</p>
              <p class="work__year">{{item.work_year}}</p>
            </section>
          </figure>
        </div>
      </div>
    </div>
    <portfolio-item :selected-portfolio="selected_portfolio" :button_label="text.visit"></portfolio-item>
  </div>
</template>

<script>
export default {
  name: "portfolio",
  props: ["text"],
  data() {
    return {
      portfolio_gallery: {
        type: Object
      },
      selected_portfolio: {
        evidence: {}
      }
    };
  },
  created() {
    this.portfolio_gallery = this.text.projects;
  },
  methods: {
    showPortfolioDescription(item) {
      this.selected_portfolio = item;
      this.$bvModal.show("modalPortfolioItem");
    }
  }
};
</script>
