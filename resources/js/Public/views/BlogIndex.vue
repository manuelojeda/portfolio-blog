<template>
  <PublicLayout>
    <section class="blox-index py-5">
      <div v-if="!isLoading">
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
import axios from 'axios'
import { onMounted, ref } from 'vue'
import PublicLayout from '../../layouts/PublicLayout.vue'
import SpinnerItem from '../Components/SpinnerItem.vue'
import PaginationList from '../Components/PaginationList.vue'
import BlogList from '../Components/BlogList.vue'

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

onMounted(() => {
  getPaginatedBlogs()
})

</script>
