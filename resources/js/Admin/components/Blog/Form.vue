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

<script>
import axios from 'axios'
import Swal from 'sweetalert2'
import MarkdownIt from 'markdown-it'

export default {
  props: {
    blog: Object,
    isEdit: {
      type: Boolean,
      default: () => { return false }
    }
  },
  data () {
    return {
      bandPreview: false,
      form: {
        title: '',
        thumbnail: '',
        content: ''
      },
      preview: null
    }
  },
  created () {
    if (this.isEdit) {
      this.form = this.blog
    }
  },
  methods: {
    previewContent () {
      const md = new MarkdownIt()
      this.preview = md.render(this.form.content)
      this.bandPreview = !this.bandPreview
    },
    save () {
      const html = '<p>Saving entry...</p>'
      Swal.fire({
        html,
        icon: 'warning',
        allowOutsideClick: false,
        allowEscapeKey: false,
        showConfirmButton: false
      })

      const method = this.isEdit ? 'PUT' : 'POST'
      const url = this.isEdit ? `/admin/blogs/${this.blog.id}` : '/admin/blogs'

      axios({
        url,
        method,
        data: this.form
      }).then(response => {
        Swal.fire({
          icon: response.data.type,
          text: response.data.message,
          allowOutsideClick: false,
          allowEscapeKey: false
        }).then(() => {
          if (response.data.band) {
            window.location.href = '/admin/blogs'
          }
        })
      })
    }
  }
}
</script>

<style scoped>
img.img-fluid {
  max-width: 350px;
}
</style>
