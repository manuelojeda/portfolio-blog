<template>
  <admin-layout
    :app-name="appName"
  >
    <section class="container p-8 mx-auto">
      <div class="grid">
        <div class="grid-cols-12">
          <h1 class="mt-2 mb-4 text-2xl">Blogs <small>Index</small></h1>
        </div>
        <div class="grid-cols-12">
          <div class="float-right">
            <a href="/admin/blogs/create" class="bg-blue-700 text-white px-5 py-3">
              Create new entry
            </a>
          </div>
        </div>
        <div class="grid-cols-12">
          <blogs-table
            v-if="!isLoading"
            :currentPage="currentPage"
            :blogs="blogs"
            :links="links"
            v-model:filter="filter"
            @emitHandleSetEntryStatus="handleSetEntryStatus"
            @emitHandleDestroyEntry="handleDestroyEntry"
            @emitHandlePageChanged="handlePageChanged"
          />

          <PaginationList
            :links="links"
            @getPaginatedBlogs="fetchBlogsEntries"
          />
        </div>
      </div>
    </section>
  </admin-layout>
</template>

<script setup>
import axios from 'axios'
import { askAlert, simpleAlert } from '@/utils/alerts'
import BlogsTable from '@/Admin/components/Blog/Table.vue'
import { onMounted, ref } from 'vue';
import PaginationList from "../../../Public/Components/PaginationList";

const props = defineProps({
  appName: String
})

const blogs = ref([])
const filter = ref(null)
const currentPage = ref(1)
const links = ref(null)
const isLoading = ref(true)

async function handleSetEntryStatus (entry) {
  const MSG = entry.publish === 1
    ? 'Do you want to unpublish the entry?'
    : 'Do you want to publish the entry?'

  const result = await askAlert(MSG)

  if (result.isConfirmed) {
    const status = entry.publish !== 1
    changeEntryStatus(entry.id, status)
  }
}
async function changeEntryStatus (id, status) {
  const response = await axios({
    url: '/admin/blogs/setStatus',
    method: 'POST',
    data: {
      id,
      status
    }
  })

  if (response.data.band) {
    simpleAlert(
      response.data.text,
      response.data.icon,
      true
    )
  }
}
async function handleDestroyEntry (entry) {
  const result = await askAlert('Do you want to destroy this entry?')

  if (result.isConfirmed) {
    const response = await axios({
      url: `/admin/blogs/${entry.id}`,
      method: 'DELETE'
    })

    if (response.data.band) {
      simpleAlert(
        response.data.text,
        response.data.icon,
        true
      )
    }
  }
}

function fetchBlogsEntries (clickableUrl = null) {
  let url = new URL(window.location.origin + '/admin/blogs/paginate')

  if (clickableUrl) {
    url = new URL(clickableUrl)
  }

  if (filter.value) {
    url.searchParams.append('q', filter.value)
  }

  isLoading.value = true

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

function handlePageChanged(page) {
  currentPage.value = page
  fetchBlogsEntries()
}

onMounted(() => {
  fetchBlogsEntries()
})

</script>
