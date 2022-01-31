<template>
  <div>
    <admin-layout
      :app-name="appName"
    >
      <section class="container-fluid">
        <admin-blog-form :blog="blog" is-edit />
      </section>
    </admin-layout>
  </div>
</template>

<script setup>
import AdminBlogForm from '@/Admin/components/Blog/Form.vue'

const props = defineProps({
  appName: String,
  blog: Object
})
</script>
