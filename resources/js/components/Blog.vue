<template>
  <div>
    <header-blog></header-blog>

    <div class="container my-5">
      <div class="row">
        <div class="col-12">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <a href="/Blog">Blog</a>
              </li>
              <li class="breadcrumb-item active" aria-current="page">{{blog.title}}</li>
            </ol>
          </nav>

          <a href="/Blog">Volver</a>

          <h1 class="mt-4">{{blog.title}}</h1>
          <p>Publicado: {{blog.formattedFecha}}</p>

          <div v-html="blog.content"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  props: ["blog-prop"],
  data() {
    return {
      blog: JSON.parse(this.blogProp)
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