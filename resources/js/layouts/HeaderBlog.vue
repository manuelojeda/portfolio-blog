<template>
  <div id="header">
    <mobile-header :header="header" class="d-md-none" />
    <desktop-header class="d-none d-md-block" :header="header" />
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import { mapGetters, mapMutations } from 'vuex'
import MobileHeader from './MobileHeader'
import DesktopHeader from './DesktopHeader'

export default {
  name: 'partial-header',
  components: {
    MobileHeader,
    DesktopHeader
  },
  data () {
    return {
      header: {},
      lang: null
    }
  },
  created () {
    this.header = this.$store.getters.getJson.header
    this.lang = this.$store.getters.getLanguage
  },
  methods: {
    setLang (lang) {
      this.$store.commit('updateLanguage', lang)

      this.header = this.$store.getters.getJson.header
      this.lang = this.$store.getters.getLanguage
    }
  }
}
</script>

<style lang="scss" scoped>
#header {
  position: fixed;
  width: 100%;
  background-color: #fff;
  top: 0;
  z-index: 999;
  border-bottom: 2px solid #00c9b6;
}
</style>
