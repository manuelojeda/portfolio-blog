<template>
  <div>
    <admin-layout
      :app-name="appName"
    >
      <b-container fluid>
        <admin-blog-form />
      </b-container>
    </admin-layout>
  </div>
</template>

<script>
import AdminBlogForm from '@/Admin/components/Blog/Form.vue'

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
