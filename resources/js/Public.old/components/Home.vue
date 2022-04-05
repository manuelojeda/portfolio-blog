<template>
  <div class="home row align-items-center" id="home">
    <div class="col-lg-6">
      <img :src="personal.photo" alt="Profile Pic" class="profilePic">
    </div>
    <div class="col-lg-6">
      <div class="hello">
        <span>Hi, I am</span>
      </div>
      <h1 class="mainTitle">
        {{personal.name}}
        <br>
        <span v-html="personal.position"></span>
      </h1>
      <blockquote class="blockquote">
        <p class="mb-0 secondary">
          <a :href="`mailto:${personal.email}`">
            <i class="fas fa-envelope mr-2"></i>
            {{personal.email}}
          </a>
        </p>
      </blockquote>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  props: {
    personal: Object
  }
}
</script>

<style lang="scss" scoped>
#home {
  margin-top: 10rem;
  @media(min-width: 992px) {
    margin-top: 0;
  }
}
</style>
