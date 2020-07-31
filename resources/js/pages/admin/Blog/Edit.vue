<template>
  <div>
    <admin-layout
      :app-name="appName"
    >
      <b-container fluid>
        <admin-blog-form :blog="blog" is-edit />
      </b-container>
    </admin-layout>
  </div>
</template>

<script>
import AdminBlogForm from '@/components/admin/Blog/Form.vue'

export default {
  name: 'AdminBlogEdit',
  props: {
    appName: String,
    blog: Object
  },
  components: {
    AdminBlogForm
  }
}
</script>
