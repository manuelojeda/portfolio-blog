<template>
  <div class="row align-items-center" id="about" @focus="setActive('about')">
    <div class="col-12">
      <h1 class="title about_title" id="focus">{{text.main_title}}</h1>
    </div>

    <div class="col-12 col-lg-6 about_section">
      <p class="text-left about_text" v-html="text.about_me"></p>
    </div>

    <div class="col-12 col-lg-6">
      <h3 class="medium text-center p-dark mb-3">{{text.subtitles[0]}}</h3>
      <div class="grid-skills">
        <i class="fas skills fa-laptop fa-3x" />
        <i class="fab skills fa-js-square fa-3x" />
        <i class="fab skills fa-css3-alt fa-3x" />
        <i class="fas skills fa-headphones-alt fa-3x" />
        <i class="fas skills fa-gamepad fa-3x" />
        <i class="fas skills fa-book fa-3x" />
        <i class="fas skills fa-mug-hot fa-3x" />
        <i class="fas skills fa-dumbbell fa-3x" />
        <i class="fas skills fa-film fa-3x" />
        <i class="fas skills fa-plane-departure fa-3x" />
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
  name: 'about',
  props: ['text'],
  methods: {
    setActive (clase) {
      $('.nav-link').removeClass('active')
      $('.nav-link.' + clase).addClass('active')
    }
  }
}
</script>

<style lang="scss" scoped>
.grid-skills {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 15px;

  .fas, .fab {
    text-align: center;
  }
}
</style>
