<template>
  <div>
    <header-blog></header-blog>

    <div class="container my-5">
      <div class="row">
        <div class="col-12 mb-4">
          <h1>Blog</h1>
        </div>
        <div class="col-12 col-lg-4 blog-card">
          <a :href="'/Blog/' + blog.seo" class="card" v-for="(blog, index) in blogs" :key="index">
            <div class="card-header p-0">
              <img :src="blog.thumbnail" alt class="img-fluid mx-auto d-block">
            </div>
            <div class="card-body">
              <h4>{{blog.title}}</h4>
              <p>
                <small>Publicado: {{blog.formattedFecha}}</small>
              </p>
            </div>
          </a>
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