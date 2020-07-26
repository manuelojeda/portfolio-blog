<template>
  <div class="blog-main">
    <header-blog class="mb-3" />

    <div class="container my-5 pt-5">
      <div class="row">
        <div class="col-12 mb-4">
          <h1 class="titulo">Bienvenido a mi blog</h1>
        </div>
      </div>
      <div class="row">

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  props: ['blogs-props'],
  data () {
    return {
      blogs: JSON.parse(this.blogsProps),
      buscar: '',
      fields: {
        single: {
          label: ''
        }
      },
      currentPage: 1
    }
  },
  created () {
    // $(document).ready(function() {
    //   $("a").on("click", function(event) {
    //     if (this.hash !== "") {
    //       event.preventDefault();

    //       var hash = this.hash;

    //       $("html, body").animate(
    //         {
    //           scrollTop: $(hash).offset().top
    //         },
    //         800,
    //         function() {
    //           window.location.hash = hash;
    //         }
    //       );
    //     }
    //   });
    // });
  },
  computed: {
    filteredBlogs () {
      if (this.buscar) {
        return this.blogs.filter(item => {
          return item.title.includes(this.buscar)
        })
      } else {
        return this.blogs
      }
    }
  }
}
</script>
