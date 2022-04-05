<template>
  <div class="blog-main">
    <PartialHeader class="mb-3" />

    <div class="container my-5 pt-5" v-show="!isLoading">
      <div class="row">
        <div class="col-12 mb-3">
          <h1 class="titulo">Bienvenido a mi blog</h1>
        </div>
      </div>
      <div class="col-12 mb-4">
        <div class="input-group my-2">
          <div class="input-group-prepend">
            <div class="input-group-text">Escribe el título que deseas filter</div>
          </div>
          
          <input
            type="text"
            class="form-control"
            v-model="filter"
            @input="$emit('update:filter', $event.target.value)"
            @keyup.enter="handlePageChanged(1)"
          >
          <button
            class="btn btn-primary"
            @click="handlePageChanged(1)"
          >
            Buscar
          </button>
        </div>

        <div v-if="tags.length > 0">
          <span
            class="badge badge-tag mr-2"
            v-for="(tag, index) in tags"
            :key="index"
            :style="`background-color: ${tag.color}`"
            @click="searchByTag(tag)"
          >
            {{ tag.name }}
          </span>
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
  currentYear: Number,
  tags: Array
})

const blogs = ref([])
const filter = ref(null)
const selectedTag = ref(null)
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
    const url = new URL(window.location.origin + '/blog/paginate')
    url.searchParams.append('page', page)

    if (filter.value) {
      url.searchParams.append('q', filter.value)      
    }

    if (selectedTag.value) {
      url.searchParams.append('tag', selectedTag.value.name)
    }

    const response = await axios.get(url)
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

const searchByTag = (tag) => {
  selectedTag.value = tag
  handlePageChanged(1)
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

.badge-tag {
  font-size: 16px;
  padding: 10px 30px;
  color: black;
  &:hover {
    cursor: pointer;
  }
}
</style>
