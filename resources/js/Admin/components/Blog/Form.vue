<template>
  <div class="grid">
    <div class="grid-cols-12">
      <h1 class="text-4xl mt-2 mb-4">
        <b>Blog</b>
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
        <a href="/admin/blogs" class="bg-gray-400 text-black px-5 py-2 rounded hover:bg-gray-200 transition" v-if="!bandPreview">Go back</a>
        <button class="bg-blue-500 text-white px-5 py-2 rounded transition hover:bg-blue-700" @click="bandPreview = !bandPreview" v-else>Go back</button>
      </div>
    </div>

    <div class="grid-cols-12 my-5" v-show="!bandPreview">
      <form v-on:submit.prevent="previewContent()" class="row">
        <div class="grid-cols-12 mb-3">
          <div class="form-group">
            <label class="block">Title</label>
            <input v-model="form.title" name="title" type="text" class="form-control">
          </div>
        </div>

        <div class="grid-cols-12 mb-3">
          <div class="form-group mb-1">
            <label class="mr-2">Is this a Video?</label>
            <input v-model="form.is_video" name="is_video" type="checkbox">
          </div>

          <div class="form-group" v-show="form.is_video">
            <label class="mr-2">Video URL</label>
            <input v-model="form.video_url" name="video_url" type="text" class="form-control">
          </div>
        </div>

        <div class="grid-cols-12 mb-3">
          <div class="form-group">
            <label for="thumbnailUrl">Thumbnail URL</label>
            <input v-model="form.thumbnail" name="title" type="text" class="form-control">
          </div>
        </div>
        <div class="grid-cols-12 mb-3">
          <div class="form-group">
            <label for="content">Content</label>
            <textarea
              v-model="form.content"
              class="form-control"
              rows="20"
            ></textarea>
          </div>
        </div>

        <TagSelector class="mb-5" :form="form" :tags="tags" />

        <div class="grid-cols-12">
          <button type="submit" class="bg-blue-500 text-white px-5 py-2 rounded transition hover:bg-blue-700">Preview content</button>
        </div>

      </form>
    </div>

    <div class="grid-cols-12 blog-post" v-show="bandPreview">
      <h1>{{ form.title }}</h1>

      <p>
        <b>URL:</b>
        manuelojeda.xyz/Blog/{{form.seo}}
      </p>

      <img :src="form.thumbnail" class="img-fluid">

      <div v-html="preview"></div>

      <button type="submit" class="bg-blue-500 text-white px-5 py-2 rounded transition hover:bg-blue-700" @click="save()">Save entry</button>
    </div>
  </div>
</template>

<script setup>
import axios from 'axios'
import Swal from 'sweetalert2'
import MarkdownIt from 'markdown-it'
import { onMounted, ref } from 'vue';
import { waitingAlert } from '@/utils/alerts';
import TagSelector from "./TagSelector";

const props = defineProps({
  blog: Object,
  tags: Array,
  isEdit: {
    type: Boolean,
    default: () => { return false }
  }
})

const bandPreview = ref(false)
const preview = ref(null)
const selectedTag = ref(null)
const form = ref({
  title: '',
  thumbnail: '',
  content: '',
  is_video: false,
  video_url: null,
  tags: []
})

function previewContent () {
  const md = new MarkdownIt()
  preview.value = md.render(form.value.content)
  bandPreview.value = !bandPreview.value
}

function save () {
  const text = 'Saving entry...'
  waitingAlert(text, 'warning')

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

    if (!form.value.tags) {
      form.value.tags = []
    }
  }
})
</script>

<style scoped>
img.img-fluid {
  max-width: 350px;
}
label {
  font-weight: bold;
}
</style>
