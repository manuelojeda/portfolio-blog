<template>
  <div id="header">
    <nav class="social-header">
      <div class="container">
        <a class="navbar-brand d-none" href="#">Manuel Ojeda</a>

        <div class="social-links">
          <ul class="social-list">
            <li class="nav-item">
              <a
                class="nav-link"
                href="https://www.twitter.com/MrDarkjeda"
                target="_blank"
                data-toggle="tooltip"
                data-placement="bottom"
                title="@mrdarkjeda"
              >
                <i class="fab fa-twitter"></i>
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                href="https://www.linkedin.com/in/manuel-ojeda-618753132/"
                target="_blank"
                data-toggle="tooltip"
                data-placement="bottom"
                title="Manuel Ojeda"
              >
                <i class="fab fa-linkedin"></i>
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                href="https://medium.com/@mrdarkjeda"
                target="_blank"
                data-toggle="tooltip"
                data-placement="bottom"
                title="@mrdarkjeda"
              >
                <i class="fab fa-medium"></i>
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                href="https://github.com/manuelojeda"
                target="_blank"
                data-toggle="tooltip"
                data-placement="bottom"
                title="manuelojeda"
              >
                <i class="fab fa-github"></i>
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                href="mailto:manuelojedasistemas@gmail.com"
                data-toggle="tooltip"
                data-placement="bottom"
                title="manuelojedasistemas@gmail.com"
              >
                <i class="fas fa-envelope"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container">
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i class="fas fa-bars"></i>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item" v-for="(menu, index) in header" v-bind:key="index">
              <a
                class="nav-link"
                href="/"
                @click="setActive(menu.id)"
                v-bind:class="menu.id"
              >{{menu.label}}</a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                href="/es/Manuel-Ojeda-CV.pdf"
                target="_blank"
                v-if="lang === 'es'"
              >CURRICULO</a>
              <a class="nav-link" href="/en/Manuel-Ojeda-CV.pdf" target="_blank" v-else>CURRICULUM</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" href="/Blog">BLOG</a>
            </li>
          </ul>

          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <a
                href="#"
                id="dropdownMenuButton"
                class="text-white"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <span class="text-uppercase" v-if="lang === 'es'">Selecciona un idioma</span>
                <span class="text-uppercase" v-if="lang === 'en'">Select a language</span>
              </a>
              <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a
                  class="dropdown-item lang"
                  href="#"
                  @click="setLang('es')"
                  v-bind:class="{'lang-active':lang==='es'}"
                >ES</a>
                <a
                  class="dropdown-item lang"
                  href="#"
                  @click="setLang('en')"
                  v-bind:class="{'lang-active':lang==='en'}"
                >EN</a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  name: "partial-header",
  data() {
    return {
      header: {},
      lang: null
    };
  },
  created() {
    $(window).scroll(function() {
      if ($(window).scrollTop() > 98) {
        $("#header").addClass("fixed-top");
      } else {
        $("#header").removeClass("fixed-top");
      }
    });

    $(function() {
      $('[data-toggle="tooltip"]').tooltip();
    });

    this.header = this.$store.getters.getJson.header;
    this.lang = this.$store.getters.getLanguage;
  },
  methods: {
    setActive(clase) {
      $(".nav-link").removeClass("active");
      $(".nav-link." + clase).addClass("active");
    },
    setLang(lang) {
      this.$store.commit("updateLanguage", lang);

      this.header = this.$store.getters.getJson.header;
      this.lang = this.$store.getters.getLanguage;
    }
  }
};
</script>
