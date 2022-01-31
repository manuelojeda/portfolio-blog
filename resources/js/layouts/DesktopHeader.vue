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
          <nav class="navbar navbar-expand-lg navbar-light">
            <a class="navbar-brand" href="#"></a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav ml-auto">
                <li
                  class="nav-item"
                  v-for="(menu, index) in header"
                  :key="index"
                >
                  <a
                    class="nav-link"
                    :href="`/#${menu.url}`"
                  >
                    {{ menu.label }}
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/Blog">Blog</a>
                </li>
                <li class="nav-item" style="height: 100%; margin-top: 7px;">
                  <DarkMode />
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import DarkMode from '@/Public/components/DarkMode.vue';

const props = defineProps({
  header: Object
})
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
