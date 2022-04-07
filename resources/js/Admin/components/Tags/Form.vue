<template>
  <form class="col-12 mb-4" @submit.prevent="handleSubmit">
    <section class="container">
      <div class="row align-items-end">
        <div class="col-12 col-lg-4 mb-4">
          <label>
            Name
          </label>
          <input type="text" class="form-control" v-model="name" required>
        </div>
        <div class="col-12 col-lg-4 mb-4">
          <label>
            Color
          </label>
          <input type="color" class="form-control" v-model="color" required>
        </div>
        <div class="col-12 col-lg-4 mb-4">
          <button class="bg-blue-500 text-white px-5 py-2 rounded transition hover:bg-blue-700" type="submit">
            Save
          </button>
        </div>
      </div>
    </section>
  </form>
</template>

<script setup>
import { ref, watchEffect } from 'vue';
import axios from 'axios'
import { closeAlert, simpleAlert, waitingAlert } from '@/utils/alerts';

const props = defineProps({
  editableTag: Object
})

const name = ref(null)
const color = ref(null)

function handleSubmit() {
  waitingAlert('Processing, please wait', 'warning')

  axios({
    url: '/admin/tag',
    method: 'POST',
    data: {
      name: name.value,
      color: color.value
    }
  })
    .then(({ data }) => {
      closeAlert()

      simpleAlert(data.text, data.icon, true)
    })
}

watchEffect(() => {
  if(props.editableTag) {
    name.value = props.editableTag.name
    color.value = props.editableTag.color
  }
})
</script>
