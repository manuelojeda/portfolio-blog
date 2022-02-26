/* eslint-disable no-undef */
<template>
  <span
    class="badge badge-tag mr-2 rounded-md"
    :style="`background-color: ${tag.color}`"
    @click="handleSelectedTag(tag)"
    :class="[isSearchableTag(), { 'border-emerald-700 border border-2': active }]"
  >
    {{ tag.name }}
  </span>
</template>

<script setup>
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const props = defineProps({
  tag: Object,
  searchable: {
    default: false
  },
  active: {
    default: false
  }
})

const emit = defineEmits([
  'handleSelectedTag'
])

const handleSelectedTag = (tag) => {
  emit('handleSelectedTag', tag)
}

const isSearchableTag = () => {
  return props.searchable
    ? 'hover:cursor-pointer hover:opacity-25 ease-in-out duration-200'
    : null
}
</script>
