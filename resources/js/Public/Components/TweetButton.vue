<template>
<a
  class="twitter-share-button"
  target="_blank"
  :href="'https://twitter.com/intent/tweet?' + tweet"
>
  <i class="fab fa-twitter mb-3"></i>Tweet
</a>
</template>

<script lang="ts" setup>
const props = defineProps({
  tweet: String as () => string
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
