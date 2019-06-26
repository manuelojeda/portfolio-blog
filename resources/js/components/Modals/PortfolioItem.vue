<template>
  <b-modal
    id="modalPortfolioItem"
    ref="modalPortfolioItem"
    centered
    size="lg"
    hide-footer
    no-esc-close
  >
    <div class="row">
      <div class="col-12">
        <h3 class="bold primary mb-0">{{selectedPortfolio.work_title}}</h3>
        <h4 class="regular p-dark mb-0">{{selectedPortfolio.work_done}}</h4>
        <h4 class="light p-dark">
          <small>{{selectedPortfolio.work_year}}</small>
        </h4>

        <evidence-carousel :images="selectedPortfolio.evidence"></evidence-carousel>
        <pre class="text-justify">{{selectedPortfolio.description}}</pre>

        <a
          class="btn-visit"
          target="_blank"
          :href="selectedPortfolio.url"
          v-if="selectedPortfolio.hasUrl"
        >{{button_label}}</a>
      </div>
    </div>
  </b-modal>
</template>

<script>
export default {
  props: {
    "selected-portfolio": {
      type: Object
    },
    button_label: {
      type: String
    }
  }
};
</script>