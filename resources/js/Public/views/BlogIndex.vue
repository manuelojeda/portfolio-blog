<template>
  <PublicLayout>
    <section class="blox-index py-5">
      <div v-if="!isLoading">
        <div class="mb-5">
          <label for="searchBar" class="font-bold">Buscar</label>
          <input
            title="searchBar"
            type="text"
            v-model="filter"
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-emerald-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            @keyup.enter="getPaginatedBlogs()"
            placeholder="Presiona Enter cuando desees buscar"
          >
        </div>

        <div v-if="tags.length > 0">
          <TagItem
            v-for="(tag, index) in tags"
            :key="index"
            :tag="tag"
            :searchable="true"
            :active="checkIsActive(tag)"
            @handleSelectedTag="handleSelectedTag"
          />

          <span
            class="badge badge-tag mr-2 bg-gray-300 hover:cursor-pointer hover:opacity-25 ease-in-out duration-200 rounded-md inline-block mb-2"
            @click="handleSelectedTag(null)"
          >
            Todos
          </span>
        </div>

        <BlogList :blogs="blogs" />

        <PaginationList
          :links="links"
          @getPaginatedBlogs="getPaginatedBlogs"
        />
      </div>
      <div v-else>
        <SpinnerItem />
      </div>
    </section>
  </PublicLayout>
</template>

<script setup>
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import axios from 'axios'
import { onMounted, ref } from 'vue'
import PublicLayout from '../../layouts/PublicLayout.vue'
import SpinnerItem from '../Components/SpinnerItem.vue'
import PaginationList from '../Components/PaginationList.vue'
import BlogList from '../Components/BlogList.vue'
import TagItem from '../Components/TagItem.vue'

const props = defineProps({
  tags: Array
})

const blogs = ref([])
const isLoading = ref(false)
const filter = ref(null)
const selectedTag = ref(null)
const links = ref(null)

const getPaginatedBlogs = (clickableUrl = null) => {
  isLoading.value = true

  let url = new URL(window.location.origin + '/blog/paginate')

  if (clickableUrl) {
    url = new URL(clickableUrl)
  }

  if (filter.value) {
    url.searchParams.append('q', filter.value)
  }

  if (selectedTag.value) {
    url.searchParams.append('tag', selectedTag.value.name)
  }

  axios({
    url,
    method: 'GET'
  })
    .then((response) => {
      blogs.value = response.data.data
      links.value = response.data.links
    })
    .finally(() => {
      isLoading.value = false
    })
}

const handleSelectedTag = (tag) => {
  selectedTag.value = tag
  getPaginatedBlogs()
}

const checkIsActive = (tag) => {
  if (selectedTag.value) {
    return selectedTag.value.id === tag.id
  }

  return false
}

onMounted(() => {
  getPaginatedBlogs()
})

</script>
