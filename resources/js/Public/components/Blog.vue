<template>
  <div class="blog-main">
    <header-blog class="mb-3" />

    <div class="container my-5 pt-5">
      <div class="row">
        <div class="col-12">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <a href="/">Inicio</a>
              </li>
              <li class="breadcrumb-item">
                <a href="/Blog">Blog</a>
              </li>
              <li class="breadcrumb-item active" aria-current="page">{{blog.title}}</li>
            </ol>
          </nav>

          <a href="/Blog" class="btn btn-primary">Volver</a>

          <h1 class="titulo mt-4">{{blog.title}}</h1>
          <p>
            <b>
              Publicado:
            </b>
            {{blog.published_at}}
          </p>

          <div
            class="fb-share-button d-inline"
            :data-href="'https://manuelojeda.xyz/Blog/' + blog.seo"
            data-layout="button_count"
            data-size="large"
          >
            <a
              target="_blank"
              :href="'https://www.facebook.com/sharer/sharer.php?u=https://manuelojeda.xyz/Blog/' + blog.seo"
              class="fb-xfbml-parse-ignore"
            >Compartir</a>
          </div>

          <div class="d-inline">
            <a
              class="twitter-share-button"
              target="_blank"
              :href="'https://twitter.com/intent/tweet?' + tweet"
            >
              <i class="fab fa-twitter mr-2"></i>Tweet
            </a>
          </div>

          <div class="my-4 blog-body" v-html="content"></div>

          <div class='comments'>
            <Disqus />
          </div>
        </div>
      </div>
    </div>

    <PartialFooter />
  </div>
</template>

<script>
import PartialFooter from '@/Public/components/PartialFooter.vue'
import MarkdownIt from 'markdown-it'

export default {
  name: 'Blog',
  props: {
    blog: Object
  },
  components: {
    PartialFooter
  },
  data () {
    return {
      tweet: '',
      content: null
    }
  },
  created () {
    const md = new MarkdownIt()
    this.content = md.render(this.blog.content)
    this.tweet = `text=${this.blog.title}&url=https://manuelojeda.xyz/Blog/${this.blog.seo}`
  }
}
</script>

<style lang="scss" scoped>
.container {
  @media(min-width: 768px) {
    margin-bottom: 5rem !important;
  }
}
</style>
