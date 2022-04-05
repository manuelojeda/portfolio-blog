<template>
  <span
    class="badge badge-tag mr-2 rounded-md inline-block mb-2"
    :style="`background-color: ${tag.color}`"
    @click="handleSelectedTag(tag)"
    :class="[isSearchableTag(), { 'border-emerald-700 border border-2': active }]"
  >
    {{ tag.name }}
  </span>
</template>

<script lang="ts" setup>
import Tag from "../Interfaces/Tag";

const props = defineProps({
  tag: Object as () => Tag,
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

const handleSelectedTag = (tag: Tag) => {
  emit('handleSelectedTag', tag)
}

const isSearchableTag = () => {
  return props.searchable
    ? 'hover:cursor-pointer hover:opacity-25 ease-in-out duration-200'
    : null
}
</script>
