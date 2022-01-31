<template>
  <div>
    <a :href="`/Blog/${blog.seo}`">
      <div
        class="card"
      >
        <img :src="blog.thumbnail" :alt="blog.title" class="card img-top img-fluid">
        <div class="card-body">
          <h4 class="font-weight-bold mb-4">
            {{blog.title}}
          </h4>
          <p>
            <b>Fecha de publicación</b> <br />
            {{blog.published_at}}
          </p>
        </div>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  name: 'BlogCard',
  props: {
    blog: Object
  }
}
</script>

<style lang="scss" scoped>
.card {
  height: 100%;
  transition: all ease .2s;

  .card-img {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }

  .card-body {
    background-color: #0c5460;
    color: #fff;
    transition: all ease .2s;
  }

  &:hover {
    box-shadow: 0px 0px 13px 2px #777;
    .card-body {
      background-color: darken(#0c5460, 10%);
    }
    // color: #fff;
  }
}
</style>
