<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar>
          <b-navbar-nav class="mx-auto">
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
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
  export default {
    name: 'MobileHeader',
    props: {
      header: Object,
    },
  }
</script>
