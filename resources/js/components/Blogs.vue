<template>
  <div class="blog-main">
    <header-blog></header-blog>

    <div class="container my-5">
      <div class="row">
        <div class="col-12 mb-4">
          <h1 class="titulo">Bienvenido a mi blog</h1>
        </div>
        <div class="col-12 col-lg-4 blog-card" v-for="(blog, index) in blogs" :key="index">
          <a :href="'/Blog/' + blog.seo" class="card">
            <div class="card-header p-0">
              <img :src="blog.thumbnail" alt class="img-fluid mx-auto d-block">
            </div>
            <div class="card-body">
              <h4 class="card-title">{{blog.title}}</h4>
              <p>Publicado: {{blog.formattedFecha}}</p>
            </div>
          </a>
        </div>
        <div class="col-12" v-show="blogs.length === 0">
          <h3>Hola, bienvenido a mi blog, por el momento no tengo entradas, vuelve más tarde para que leas sobre mis aventuras.</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  props: ["blogs-props"],
  data() {
    return {
      blogs: JSON.parse(this.blogsProps)
    };
  },
  created() {
    $(document).ready(function() {
      $("a").on("click", function(event) {
        if (this.hash !== "") {
          event.preventDefault();

          var hash = this.hash;

          $("html, body").animate(
            {
              scrollTop: $(hash).offset().top
            },
            800,
            function() {
              window.location.hash = hash;
            }
          );
        }
      });
    });
  }
};
</script>