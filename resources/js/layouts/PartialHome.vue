<template>
  <div class="container" id="nav-scroller" ref="content">
    <home :personal="home"></home>
    <about :text="about"></about>
    <portfolio :text="portfolio"></portfolio>
    <contact :text="contact"></contact>
  </div>
</template>

<script>
export default {
  name: 'partialHome',
  props: {
    personal: Object
  },
  computed: {
    home () {
      return this.personal.data
    },
    about () {
      return this.$store.getters.getJson.about
    },
    portfolio () {
      return this.$store.getters.getJson.portfolio
    },
    contact () {
      return this.$store.getters.getJson.contact
    }
  }
}
</script>
