<template>
  <a :href="computedUrl.link" :target="computedUrl.target" class="mb-4 hover:bg-neutral-600 p-2 rounded-lg ease-out duration-300">
    <img
      :src="blog.thumbnail"
      :alt="blog.title"
      class="rounded-lg mb-4 mx-auto sm:max-h-32"
    >
    <p class="font-bold text-center text-lg text-sky-500">
      <small class="block mb-1 text-gray-800 text-white">
        Publicado en {{ blog.published_at }}
      </small>
      {{ blog.title }}
    </p>
  </a>
</template>

<script setup>
import {computed} from "vue";

const props = defineProps({
  blog: Object
})

const computedUrl = computed(() => {
  if (props.blog.is_video) {
    return {
      link: props.blog.video_url,
      target: '_blank'
    };
  }

  return {
    link: `/Blog/${props.blog.seo}`,
    target: null
  };
})
</script>

<style lang="scss" scoped>
small {
  font-size: 70%;
  color: white !important;
}
</style>
