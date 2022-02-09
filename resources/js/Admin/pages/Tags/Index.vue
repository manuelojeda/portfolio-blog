<template>
  <AdminVue :appName="appName">
    <section class="container-fluid">
      <div class="row">
        <div class="col-12">
          <h1 class="mt-2 mb-4">
            Tags
            <small>Index</small>
          </h1>
        </div>
        <div class="col-12 mb-4">
          <div class="float-right">
            <button class="btn btn-primary" @click="showForm = !showForm">
              Add a new tag
            </button>
          </div>
        </div>

        <TagForm
          v-show="showForm"
          :editableTag="selectedTag"
        />

        <TagTable
          :tags="tags"
          @handleEditableTag="handleEditableTag"
          @handleDeletableTag="handleDeletableTag"
        />
      </div>
    </section>
  </AdminVue>
</template>

<script setup>
import { ref } from 'vue';
import AdminVue from '@/layouts/Admin.vue';
import TagForm from '@/Admin/components/Tags/Form.vue'
import TagTable from '@/Admin/components/Tags/Table.vue';
import { closeAlert, simpleAlert, waitingAlert } from '@/utils/alerts';
import axios from 'axios';

const props = defineProps({
  appName: String,
  tags: Array
})

const showForm = ref(false)
const selectedTag = ref(null)

function handleEditableTag(tag) {
  selectedTag.value = tag
  showForm.value = true
}

function handleDeletableTag (tag) {
  waitingAlert('Deleting, please wait...', 'warning')

  axios({
    url: `/admin/tag/${tag.id}`,
    method: 'DELETE'
  })
    .then(({ data }) => {
      closeAlert()
      simpleAlert(data.text, data.icon, true)
    })
}
</script>
