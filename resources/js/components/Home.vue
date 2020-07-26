<template>
  <div class="home row align-items-center" id="home" @focus="setActive('home')">
    <div class="col-lg-6">
      <img src="/img/profile_pic.jpg" alt="Profile Pic" class="profilePic">
    </div>
    <div class="col-lg-6">
      <div class="hello">
        <span>{{text.hello}}</span>
      </div>
      <h1 class="mainTitle">
        Manuel Ojeda
        <br>
        <span v-html="text.charge"></span>
      </h1>
      <blockquote class="blockquote">
        <p class="mb-0 secondary">
          <a href="mailto:manuelojedasistemas@gmail.com">
            <i class="fas fa-envelope mr-2"></i>
            manuelojedasistemas@gmail.com
          </a>
        </p>
      </blockquote>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  props: ["text"],
  methods: {
    setActive(clase) {
      $(".nav-link").removeClass("active");
      $(".nav-link." + clase).addClass("active");
    }
  }
};
</script>

<style lang="scss" scoped>
#home {
  margin-top: 10rem;
  @media(min-width: 992px) {
    margin-top: 0;
  }
}
</style>
