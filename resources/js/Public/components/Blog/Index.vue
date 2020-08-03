<template>
  <div class="blog-main">
    <header-blog class="mb-3" />

    <div class="container my-5 pt-5" v-show="!isLoading">
      <div class="row">
        <div class="col-12 mb-4">
          <h1 class="titulo mb-5">Bienvenido a mi blog</h1>
        </div>
      </div>
      <div v-show="blogs.length > 0">
        <div class="grid mb-5" >
          <blog-card
            v-for="(blog, index) in blogs"
            :key="index"
            :blog="blog"
          />
        </div>
        <b-pagination
          :current-page="result.current_page"
          :total-rows="result.total"
          :per-page="result.per_page"
          @change="handlePageChanged"
          align="center"
        />
      </div>
      <div v-if="blogs.length === 0">
        <h4 class="text-center my-5">
          Oops! <br /> La búsqueda realizada no arrojó resultados
        </h4>
      </div>
    </div>
    <div class="container my-5 pt-5" v-if="isLoading">
      <div class="row">
        <div class="col-12">
          <div class="spinner-grid">
            <div>
              <b-spinner
                label="Loading..."
                style="width: 8rem; height: 8rem;"
                variant="info"
              ></b-spinner>
            </div>
          </div>
        </div>
      </div>
    </div>

    <PartialFooter />
  </div>
</template>

<script>
import BlogCard from './Card'
import PartialFooter from '@/Public/components/PartialFooter.vue'
import axios from 'axios'

export default {
  name: 'BlogIndex',
  components: {
    BlogCard,
    PartialFooter
  },
  data () {
    return {
      blogs: [],
      filter: null,
      isLoading: true,
      result: {
      }
    }
  },
  async created () {
    try {
      const response = await axios.get('/blog/paginate')
      this.blogs = await response.data.data
      this.result = await response.data
      this.isLoading = false
    } catch (error) {
    }
  },
  methods: {
    async handlePageChanged (page) {
      try {
        this.isLoading = true
        const response = await axios.get(`/blog/paginate?page=${page}`)
        this.blogs = await response.data.data
        this.result = await response.data
        this.isLoading = false
      } catch (error) {
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 30px;
  align-items: center;

  @media(min-width: 578px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media(min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media(min-width: 992px) {
    grid-template-columns: repeat(4, 1fr);
  }
}

.spinner-grid {
  display: grid;
  grid-template-columns: 1fr;
  place-items: center;
  height: 80vh;
}
</style>
