<template>
  <div class="row">
    <div class="col-12">
      <h1 class="mt-2 mb-4">
        Blog
        <small>
          <span v-if="isEdit">
            Editar
          </span>
          <span v-else>
            Crear
          </span>
        </small>
      </h1>

      <div class="float-left">
        <a href="/admin/blogs" class="btn btn-secondary" v-if="!bandPreview">Go back</a>
        <button class="btn btn-secondary" @click="bandPreview = !bandPreview" v-else>Go back</button>
      </div>
    </div>

    <div class="col-12 my-5" v-show="!bandPreview">
      <form v-on:submit.prevent="previewContent()" class="row">
        <div class="col-12 mb-3">
          <div class="form-group">
            <label for="title">Title</label>
            <input v-model="form.title" name="title" type="text" class="form-control">
          </div>
        </div>
        <div class="col-12 mb-3">
          <div class="form-group">
            <label for="title">Thumbnail URL</label>
            <input v-model="form.thumbnail" name="title" type="text" class="form-control">
          </div>
        </div>
        <div class="col-12 mb-4">
          <div class="form-group">
            <label for="content">Content</label>
            <textarea
              v-model="form.content"
              class="form-control"
              rows="20"
            ></textarea>
          </div>
        </div>

        <div class="col-12">
          <button type="submit" class="btn btn-primary">Preview content</button>
        </div>

      </form>
    </div>

    <div class="col-12 blog-post" v-show="bandPreview">
      <h1>{{form.title}}</h1>

      <p>
        <b>URL:</b>
        manuelojeda.xyz/Blog/{{form.seo}}
      </p>

      <img :src="form.thumbnail" class="img-fluid">

      <div v-html="preview"></div>

      <button type="submit" class="btn btn-primary btn-info" @click="save()">Save entry</button>
    </div>
  </div>
</template>

<script setup>
import axios from 'axios'
import Swal from 'sweetalert2'
import MarkdownIt from 'markdown-it'
import { onMounted, ref } from 'vue';

const props = defineProps({
  blog: Object,
  isEdit: {
    type: Boolean,
    default: () => { return false }
  }
})

const bandPreview = ref(false)
const preview = ref(null)
const form = ref({
  title: '',
  thumbnail: '',
  content: '',
})

function previewContent () {
  const md = new MarkdownIt()
  preview.value = md.render(form.value.content)
  bandPreview.value = !bandPreview.value
}
function save () {
  const html = '<p>Saving entry...</p>'
  Swal.fire({
    html,
    icon: 'warning',
    allowOutsideClick: false,
    allowEscapeKey: false,
    showConfirmButton: false
  })

  const method = props.isEdit ? 'PUT' : 'POST'
  const url = props.isEdit ? `/admin/blogs/${props.blog.id}` : '/admin/blogs'

  axios({
    url,
    method,
    data: form.value
  }).then(response => {
    Swal.fire({
      icon: response.data.icon,
      text: response.data.text,
      allowOutsideClick: false,
      allowEscapeKey: false
    }).then(() => {
      if (response.data.band) {
        window.location.href = '/admin/blogs'
      }
    })
  })
}

onMounted(() => {
  if (props.isEdit) {
    form.value = props.blog
  }
})
</script>

<style scoped>
img.img-fluid {
  max-width: 350px;
}
</style>
