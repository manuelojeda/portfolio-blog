<template>
  <PublicLayout>
    <section class="blox-index py-5">
      <div v-if="!isLoading">
        <div class="mb-5">
          <label class="font-bold">
            Buscar
          </label>
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

<script setup lang="ts">
import axios from 'axios'
import { onMounted, ref } from 'vue'
import PublicLayout from '../../layouts/PublicLayout.vue'
import SpinnerItem from '../Components/SpinnerItem.vue'
import PaginationList from '../Components/PaginationList.vue'
import BlogList from '../Components/BlogList.vue'
import TagItem from '../Components/TagItem.vue'
import Tag from "../Interfaces/Tag";
import Blog from "../Interfaces/Blog";
import Link from "../Interfaces/Link";

const props = defineProps({
  tags: Array as () => Array<Tag>
})

const blogs = ref<Array<Blog>>([])
const isLoading = ref<boolean>(false)
const filter = ref<string>(null)
const selectedTag = ref<Tag>(null)
const links = ref<Array<Link>>(null)

const getPaginatedBlogs = (clickableUrl: string = null): void => {
  isLoading.value = true

  let url = new URL(`${window.location.origin}/blog/paginate`)

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
    url: url.toString(),
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

const handleSelectedTag = (tag: Tag) => {
  selectedTag.value = tag
  getPaginatedBlogs()
}

const checkIsActive = (tag: Tag) => {
  if (selectedTag.value) {
    return selectedTag.value.id === tag.id
  }

  return false
}

onMounted(() => {
  getPaginatedBlogs()
})
</script>
