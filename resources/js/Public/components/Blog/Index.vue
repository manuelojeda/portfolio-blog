<template>
  <div class="blog-main">
    <PartialHeader class="mb-3" />

    <div class="container my-5 pt-5" v-show="!isLoading">
      <div class="row">
        <div class="col-12 mb-4">
          <h1 class="titulo mb-5">Bienvenido a mi blog</h1>
        </div>
      </div>
      <div v-show="blogs.length > 0">
        <div class="grid mb-5" >
          <BlogCard
            v-for="(blog, index) in blogs"
            :key="index"
            :blog="blog"
          />
        </div>
        <!-- <b-pagination
          :current-page="result.current_page"
          :total-rows="result.total"
          :per-page="result.per_page"
          @change="handlePageChanged"
          align="center"
        /> -->
        <nav>
          <ul class="pagination justify-content-center">
            <li class="page-item" :class="currentPage === 1 ? 'disabled' : null">
              <a class="page-link" href="#" @click="handlePageChanged(currentPage - 1)">Previous</a>
            </li>
            <li
              class="page-item" 
              v-for="(item, index) in result.last_page"
              :index="index"
              :class="checkIfActive(index + 1)"
            >
              <a class="page-link" href="#" @click="handlePageChanged(index + 1)">{{ index + 1 }}</a>
            </li>
            <li class="page-item" :class="currentPage === result.last_page ? 'disabled' : null">
              <a class="page-link" href="#" @click="handlePageChanged(currentPage + 1)">Next</a>
            </li>
          </ul>
        </nav>
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
              <Spinner
                label="Loading..."
                style="width: 8rem; height: 8rem;"
                variant="info"
              ></Spinner>
            </div>
          </div>
        </div>
      </div>
    </div>

    <PartialFooter :current-year="currentYear" />
  </div>
</template>

<script setup>
import BlogCard from './Card.vue'
import PartialFooter from '@/Public/components/PartialFooter.vue'
import axios from 'axios'
import PartialHeader from '@/layouts/PartialHeader.vue'
import { onMounted, ref } from 'vue';
import Spinner from '../Spinner.vue';

const props = defineProps({
  currentYear: Number
})

const blogs = ref([])
const filter = ref(null)
const isLoading = ref(true)
const result = ref({})
const currentPage = ref(1)

onMounted(async () => {
  try {
    const response = await axios.get('/blog/paginate')
    blogs.value = await response.data.data
    result.value = await response.data
    isLoading.value = false
  } catch (error) {
  }
})

async function handlePageChanged (page) {
  try {
    isLoading.value = true
    const response = await axios.get(`/blog/paginate?page=${page}`)
    blogs.value = await response.data.data
    result.value = await response.data
    isLoading.value = false
    currentPage.value = page
  } catch (error) {
  }
}

function checkIfActive(currentPage) {
  return currentPage === result.value.current_page ? 'active' : null
}
</script>

<style lang="scss" scoped>
.container {
  @media (min-width: 768px) {
    margin-bottom: 7rem !important;
  }
}
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
