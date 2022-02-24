<template>
  <div>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      fade
      controls
      indicators
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <b-carousel-slide v-for="(image, indexImage) in images" v-bind:key="indexImage">
        <img :src="image.img" slot="img" class="d-block img-fluid">
      </b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
export default {
  props: {
    images: Object
  },
  data () {
    return {
      slide: 0,
      sliding: null
    }
  },
  methods: {
    onSlideStart (slide) {
      this.sliding = true
    },
    onSlideEnd (slide) {
      this.sliding = false
    }
  }
}
</script>
