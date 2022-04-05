<template>
  <div
    class="mx-auto mt-6 grid max-v-[977x] grid-cols-1 sm:grid-cols-2 gap-6 lg:grid-cols-4"
  >
    <BlogItem
      v-for="(blog, index) in blogs"
      :blog="blog"
      :key="index"
    />
  </div>
</template>

<script setup>
import BlogItem from './BlogItem.vue'
const props = defineProps({
  blogs: Array
})
</script>
