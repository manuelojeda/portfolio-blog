<template>
  <div>
    <PartialHeader />
    <div class="container">
      <div class="row errorRow align-items-center">
        <div class="col-12 text-center" v-if="lang === 'es'">
          <h1 class="errorTitle">404</h1>
          <h3 class="mb-3">
            Oh no!
            <br />No debimos llegar hasta aquí
          </h3>

          <a class="btn btn-primary cta-button" href="/">Llevame de vuelta</a>
        </div>
        <div class="col-12 text-center" v-else>
          <h1 class="errorTitle">404</h1>
          <h3 class="mb-3">
            Oh no!
            <br />We should not be here
          </h3>

          <a class="btn btn-primary cta-button" href="/">Take me back</a>
        </div>
      </div>
    </div>
    <PartialFooter :currentYear="currentYear"/>
  </div>
</template>

<script setup>
import PartialHeader from '../../layouts/PartialHeader.vue'
import PartialFooter from './PartialFooter.vue'

const props = defineProps({
  currentYear: String
})

const lang = navigator.language.includes('en') ? 'en' : 'es'
</script>

<style lang="scss" scoped>
.errorTitle {
  font-size: 180px !important;
  font-weight: 600 !important;
}

.cta-button {
  border: 2px solid;
  padding: 15px;
  border-radius: 50px;
}

.container {
  margin-top: 6rem;
}
</style>
