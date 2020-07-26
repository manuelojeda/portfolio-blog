<template>
  <div>
    <div class="container">
      <div class="grid">
        <div class="header-link">
          <h4 class="weight-500 d-inline">
            <a href="/">
              Manuel Ojeda's website
            </a>
          </h4>
        </div>
        <div class="menu-links">
          <b-navbar>
            <b-navbar-nav class="ml-auto">
              <b-nav-item
                v-for="(menu, index) in header" :key="index"
                :href="`/#${menu.url}`"
                class="weight-500"
                :class="menu.id"
              >
                {{menu.label}}
              </b-nav-item>
              <b-nav-item
                href="/Blog"
                class="weight-500"
              >
                Blog
              </b-nav-item>
              <b-nav-item
                href="/en/Manuel-Ojeda-CV.pdf"
                target="_blank"
                class="weight-500"
              >
                My CV
              </b-nav-item>
            </b-navbar-nav>
          </b-navbar>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'DesktopHeader',
    props: {
      header: Object,
    },
  }
</script>

<style lang="scss" scoped>
.grid {
  display: grid;
  grid-template-columns: 33% 1fr;
  align-items: center;

  .header-link {
    a {
      transition: all ease .2s;
      color: #017bb0;
    }
  }
}
.weight-500 {
  font-weight: 500;
}
</style>