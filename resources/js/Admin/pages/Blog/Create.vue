<template>
  <div>
    <admin-layout
      :app-name="appName"
    >
      <section class="container mx-auto p-8">
        <admin-blog-form />
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
