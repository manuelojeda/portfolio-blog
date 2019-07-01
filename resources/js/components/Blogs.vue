<template>
  <div class="blog-main">
    <header-blog></header-blog>

    <div class="container my-5">
      <div class="row">
        <div class="col-12 mb-4">
          <h1 class="titulo">Bienvenido a mi blog</h1>
        </div>
      </div>
      <div class="row">
        <div class="col-12 mb-4">
          <div class="table__input__search">
            <div class="input-group">
              <div class="input-group-prepend">
                <div class="input-group-text mr-3">Buscar</div>
              </div>
              <input type="text" class="form-control" v-model="buscar" placeholder>
            </div>
          </div>
        </div>

        <div class="col-12" v-if="blogs.length > 0">
          <b-table
            :filter="buscar"
            showEmpty
            :items="blogs"
            :fields="fields"
            :perPage="7"
            :currentPage="currentPage"
            class="entriesDiv"
            id="entriesTable"
          >
            <template slot="single" slot-scope="entry">
              <a :href="'/Blog/' + entry.item.seo" class="row mb-3">
                <div class="col-12 col-lg-4 thumbnailDiv">
                  <img :src="entry.item.thumbnail" alt class="img-fluid">
                </div>
                <div class="col-12 col-lg-8 infoDiv">
                  <h3>{{entry.item.title}}</h3>
                  <h4>
                    <small>Publicado el {{entry.item.formattedFecha}}</small>
                  </h4>
                </div>
              </a>
            </template>
            <template slot="empty" slot-scope="scope">
              <h4>Entradas no encontradas</h4>
            </template>
            <template slot="emptyfiltered" slot-scope="scope">
              <h4>Entradas no encontradas</h4>
            </template>
          </b-table>

          <b-pagination
            v-model="currentPage"
            :total-rows="blogs.length"
            :per-page="7"
            aria-controls="entriesTable"
            align="right"
          ></b-pagination>
        </div>

        <div class="col-12" v-else>
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
      blogs: JSON.parse(this.blogsProps),
      buscar: "",
      fields: {
        single: {
          label: ""
        }
      },
      currentPage: 1
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
  },
  computed: {
    filteredBlogs() {
      if (this.buscar) {
        return this.blogs.filter(item => {
          return item.title.includes(this.buscar);
        });
      } else {
        return this.blogs;
      }
    }
  }
};
</script>