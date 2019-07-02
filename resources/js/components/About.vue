<template>
  <div class="row" id="about" @focus="setActive('about')">
    <div class="col-12">
      <h1 class="title about_title" id="focus">{{text.main_title}}</h1>
    </div>

    <div class="col-12 col-lg-6 about_section">
      <p class="text-left about_text" v-html="text.about_me"></p>
    </div>

    <div class="col-12 col-lg-6">
      <h3 class="medium text-center p-dark">{{text.subtitles[0]}}</h3>
      <div class="row text-center my-4">
        <div class="col py-2">
          <div class="d-inline skills">
            <i class="fas fa-laptop fa-4x"></i>
          </div>
        </div>
        <div class="col py-2">
          <div class="d-inline skills">
            <i class="fab fa-js-square fa-4x"></i>
          </div>
        </div>
        <div class="col py-2">
          <div class="d-inline skills">
            <i class="fab fa-css3-alt fa-4x"></i>
          </div>
        </div>
        <div class="col py-2">
          <div class="d-inline skills">
            <i class="fas fa-headphones-alt fa-4x"></i>
          </div>
        </div>
        <div class="col py-2">
          <div class="d-inline skills">
            <i class="fas fa-gamepad fa-4x"></i>
          </div>
        </div>
        <div class="col py-2">
          <div class="d-inline skills">
            <i class="fas fa-book fa-4x"></i>
          </div>
        </div>
        <div class="col py-2">
          <div class="d-inline skills">
            <i class="fas fa-mug-hot fa-4x"></i>
          </div>
        </div>
        <div class="col py-2">
          <div class="d-inline skills">
            <i class="fas fa-dumbbell fa-4x"></i>
          </div>
        </div>
        <div class="col py-2">
          <div class="d-inline skills">
            <i class="fas fa-film fa-4x"></i>
          </div>
        </div>
        <div class="col py-2">
          <div class="d-inline skills">
            <i class="fas fa-plane-departure fa-4x"></i>
          </div>
        </div>
      </div>
    </div>

    <div class="col-12">
      <div class="row dev-stack">
        <div class="col-12 my-4">
          <h3 class="title">{{text.subtitles[1]}}</h3>
        </div>

        <div
          class="col-12 col-sm-6 col-lg-3 stack"
          v-for="(item, index) in text.stack"
          :key="index"
        >
          <img :src="item.imageUrl" alt class="img-logo" v-if="item.hasImage" />
          <i v-bind:class="item.class" v-else></i>
          <h4>{{item.label}}</h4>
          <p class="text-left" v-html="item.description"></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "about",
  props: ["text"],
  methods: {
    setActive(clase) {
      $(".nav-link").removeClass("active");
      $(".nav-link." + clase).addClass("active");
    }
  }
};
</script>
