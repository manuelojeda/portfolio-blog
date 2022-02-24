<template>
  <a :href="`/Blog/${blog.seo}`" class="mb-4 hover:bg-neutral-600 p-2 rounded-lg ease-out duration-300">
    <img
      :src="blog.thumbnail"
      :alt="blog.title"
      class="rounded-lg mb-4 mx-auto sm:max-h-32"
    >
    <p class="font-bold text-center text-lg dark:text-sky-500">
      <small class="block mb-1 text-gray-800 dark:text-white">
        Publicado en {{ blog.published_at }}
      </small>
      {{ blog.title }}
    </p>
  </a>
</template>

<script setup>
const props = defineProps({
  blog: Object
})
</script>

<style lang="scss" scoped>
small {
  font-size: 70%;
}
</style>
