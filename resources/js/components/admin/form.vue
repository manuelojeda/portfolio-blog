<template>
  <div class="row">
    <div class="col-12">
      <h1>
        Blog
        <small>Create</small>
      </h1>

      <div class="float-left">
        <a href="/admin" class="btn btn-secondary" v-if="!bandPreview">Go back</a>
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
            <label for="title">SEO</label>
            <input v-model="form.seo" name="title" type="text" class="form-control">
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
            <textarea v-model="form.content" id="content" name="content"></textarea>
          </div>
        </div>

        <button type="submit" class="btn btn-primary">Preview content</button>
      </form>
    </div>

    <div class="col-12 blog-post" v-show="bandPreview">
      <h1>{{form.title}}</h1>

      <p>
        <b>URL:</b>
        manuelojeda.xyz/Blog/{{form.seo}}
      </p>

      <img :src="form.thumbnail" class="img-fluid">

      <div v-html="form.content"></div>

      <button type="submit" class="btn btn-primary btn-info" @click="save()">Save entry</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["blog-prop", "band-edit"],
  data() {
    return {
      bandPreview: false,
      form: {
        title: "",
        seo: "",
        thumbnail: "",
        content: ""
      }
    };
  },
  created() {
    tinymce.init({
      selector: "#content",
      height: 450,
      plugins: [
        "advlist autolink lists link image charmap print preview hr anchor pagebreak",
        "searchreplace wordcount visualblocks visualchars code fullscreen",
        "insertdatetime media nonbreaking save table contextmenu directionality",
        "emoticons template paste textcolor  colorpicker textpattern autoresize imagetools"
      ],
      toolbar:
        "insertfile undo redo | forecolor backcolor | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link preview table"
    });

    if (this.bandEdit === "1") {
      this.form = JSON.parse(this.blogProp);
    }
  },
  methods: {
    previewContent() {
      this.form.content = tinymce.activeEditor.getContent();
      this.bandPreview = !this.bandPreview;
    },
    save() {
      let html = `<p>Saving entry...</p>`;
      this.$swal({
        html,
        allowOutsideClick: false,
        allowEscapeKey: false,
        showConfirmButton: false
      });
      let method = "POST";
      let url = "/admin/store";
      if (this.bandEdit === "1") {
        method = "PUT";
        url = "/admin/" + this.form.id;
      }

      this.$http({
        url,
        method,
        data: this.form
      }).then(response => {
        this.$swal({
          type: response.data.band,
          text: respopnse.data.message,
          allowOutsideClick: false,
          allowEscapeKey: false
        }).then(() => {
          if (response.data.band) {
            window.location.href = "/admin";
          }
        });
      });
    }
  }
};
</script>

<style scoped>
img.img-fluid {
  max-width: 350px;
}
</style>
