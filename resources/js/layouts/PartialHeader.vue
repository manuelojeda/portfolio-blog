<template>
  <div id="header">
    <mobile-header :header="header" class="d-md-none" />
    <desktop-header class="d-none d-md-block" :header="header" />
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import MobileHeader from './MobileHeader'
import DesktopHeader from './DesktopHeader'

export default {
  name: "partial-header",
  components: {
    MobileHeader,
    DesktopHeader
  },
  data() {
    return {
      header: {},
      lang: null
    };
  },
  created() {
    /* $(window).scroll(function() {
      if ($(window).scrollTop() > 98) {
        $("#header").addClass("fixed-top");
      } else {
        $("#header").removeClass("fixed-top");
      }
    });

    $(function() {
      $('[data-toggle="tooltip"]').tooltip();
    }); */

    this.header = this.$store.getters.getJson.header;
    this.lang = this.$store.getters.getLanguage;
  },
  methods: {
    setActive(clase) {
      // $(".nav-link").removeClass("active");
      // $(".nav-link." + clase).addClass("active");
      // navLinks.map((link) => {
      //   console.log(link)
      // })
    },
    setLang(lang) {
      this.$store.commit("updateLanguage", lang);

      this.header = this.$store.getters.getJson.header;
      this.lang = this.$store.getters.getLanguage;
    }
  }
};
</script>

<style lang="scss" scoped>
#header {
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 999;
  @media(min-width: 768px) {
    background-color: #fff;
    border-bottom: 2px solid #00c9b6;
  }
}
</style>
