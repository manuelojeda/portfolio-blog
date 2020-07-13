<template>
  <div id="contact">
    <div class="row align-items-center text-center">
      <div class="col-12 mb-4">
        <h2 class="title">{{text.main_title}}</h2>
      </div>
      <div class="col-6 col-lg-3 py-3">
        <a
          href="https://www.linkedin.com/in/manuel-ojeda-618753132/"
          target="_blank"
          rel="noopener noreferrer"
          class="contact-link linkedin"
        >
          <i class="fab fa-linkedin fa-4x"></i>
        </a>
      </div>
      <div class="col-6 col-lg-3 py-3">
        <a
          href="mailto:manuelojedasistemas@gmail.com"
          rel="noopener noreferrer"
          class="contact-link gmail"
        >
          <i class="far fa-envelope fa-4x"></i>
        </a>
      </div>
      <div class="col-6 col-lg-3 py-3">
        <a
          href="https://github.com/manuelojeda"
          rel="noopener noreferrer"
          class="contact-link github"
          target="_blank"
        >
          <i class="fab fa-github fa-4x"></i>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "contact",
  props: ["text"]
};
</script>
