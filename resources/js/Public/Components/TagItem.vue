/* eslint-disable no-undef */
<template>
  <span
    class="badge badge-tag mr-2"
    :style="`background-color: ${tag.color}`"
  >
    {{ tag.name }}
  </span>
</template>

<script setup>
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const props = defineProps({
  tag: Object
})
</script>
