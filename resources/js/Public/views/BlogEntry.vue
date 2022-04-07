<template>
  <PublicLayout>
    <div class="blog-main">
      <BreadcumbsList :blog="blog" />

      <a
        href="/"
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded button"
      >
        Volver
      </a>

      <h1 class="mb-2 mt-6">
        {{ blog.title }}
      </h1>

      <p class="font-bold">
        Publicado en
        {{ blog.published_at }}
      </p>

      <div class="d-inline">
        <TweetButton :tweet="tweet" />
      </div>

      <div v-if="blog.tags.length > 0" class="mt-3 mb-8">
        <TagItem
          v-for="tag in blog.tags"
          :key="`Tag${tag.name}-${tag.id}`"
          :tag="tag"
        />
      </div>

      <div class="my-4 blog-body" v-html="blog.content" />
    </div>
  </PublicLayout>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import PublicLayout from '../../layouts/PublicLayout.vue'
import TagItem from '../Components/TagItem.vue'
import BreadcumbsList from '../Components/BreadcumbsList.vue'
import Blog from "../Interfaces/Blog";
import TweetButton from "../Components/TweetButton.vue";

const props = defineProps({
  blog: Object as () => Blog
})

const tweet = ref<string>(`text=${props.blog.title}&url=https://manuelojeda.xyz/Blog/${props.blog.seo}`)
</script>
