<template>
  <div class="container" id="nav-scroller" ref="content">
    <home :text="home"></home>
    <about :text="about"></about>
    <portfolio :text="portfolio"></portfolio>
    <contact :text="contact"></contact>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "partial-home",
  computed: {
    home() {
      return this.$store.getters.getJson.home;
    },
    about() {
      return this.$store.getters.getJson.about;
    },
    portfolio() {
      return this.$store.getters.getJson.portfolio;
    },
    contact() {
      return this.$store.getters.getJson.contact;
    }
  }
};
</script>
