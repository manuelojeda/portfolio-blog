<template>
  <div
    class="modal fade"
    id="modalPortfolioItem"
    aria-labelledby="modalPortfolioItem"
    tabindex="-1"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-xl">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title"></h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-12">
              <h3 class="bold primary mb-0">{{selectedPortfolio.work_title}}</h3>
              <h4 class="regular p-dark mb-0">{{selectedPortfolio.work_done}}</h4>
              <h4 class="light p-dark">
                <small>{{selectedPortfolio.work_year}}</small>
              </h4>

              <!-- <evidence-carousel :images="selectedPortfolio.evidence"></evidence-carousel> -->
              <pre class="text-justify">{{selectedPortfolio.description}}</pre>

              <a
                class="btn-visit"
                target="_blank"
                :href="selectedPortfolio.url"
                v-if="selectedPortfolio.hasUrl"
              >
                {{ buttonLabel }}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  selectedPortfolio: {
    type: Object
  },
  buttonLabel: {
    type: String
  }
})
</script>
