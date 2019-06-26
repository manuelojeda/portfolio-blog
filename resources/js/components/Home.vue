<template>
  <div class="row align-items-center" id="home" @focus="setActive('home')">
    <div class="col-lg-6">
      <img src="../assets/profile_pic.jpg" alt="Profile Pic" class="profilePic">
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
        <p class="mb-0 secondary">
          <a href="tel:+526121030271">
            <i class="fas fa-phone mr-2"></i>+ 52 6121030271
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
