<template>
  <PublicLayout>
    <div class="blog-main">
      <BreadcumbsList :blog="blog" />

      <a href="/" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded button">Volver</a>

      <h1 class="mb-2 mt-6">{{ blog.title }}</h1>
      <p class="font-bold">
        Publicado en
        {{ blog.published_at }}
      </p>

      <div class="d-inline">
        <a
          class="twitter-share-button"
          target="_blank"
          :href="'https://twitter.com/intent/tweet?' + tweet"
        >
          <i class="fab fa-twitter mb-3"></i>Tweet
        </a>
      </div>

      <div v-if="blog.tags.length > 0" class="mt-3 mb-8">
        <TagItem
          v-for="(tag, index) in blog.tags"
          :key="index"
          :tag="tag"
        />
      </div>

      <div class="my-4 blog-body" v-html="blog.content"></div>
    </div>
  </PublicLayout>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import PublicLayout from '../../layouts/PublicLayout.vue'
import TagItem from '../Components/TagItem.vue'
import BreadcumbsList from '../Components/BreadcumbsList.vue'
import Blog from "../Interfaces/Blog";

// eslint-disable-next-line no-undef
const props = defineProps({
  blog: Object as () => Blog,
  currentYear: Number
})

const tweet = ref<string>('')

onMounted(() => {
  tweet.value = `text=${props.blog.title}&url=https://manuelojeda.xyz/Blog/${props.blog.seo}`
})
</script>

<style lang="scss" scoped>
.twitter-share-button {
  background-color: #00ACEE;
  padding: 5px 15px;
  border-radius: 5px;
  color: #fff;
  transition: all ease .2s;

  &:hover {
      background-color: darken(#00ACEE, 10%);
  }
}
</style>
