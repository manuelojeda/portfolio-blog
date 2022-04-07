<template>
  <div class="grid-cols-12 mb-4">
    <label>Tags</label>
    <div class="grid-tag-select gap-2 mb-8">
      <button
        class="bg-cyan-800 text-black rounded block"
        type="button"
        :disabled="!selectedTag"
        @click="handleSelectedTag"
      >
        Add
      </button>
      <select
        class="form-control h-full"
        v-model="selectedTag"
      >
        <option :value="null" selected>Choose...</option>
        <option
          :value="tag"
          v-for="(tag, index) in tags"
          :key="index"
        >
          {{ tag.name }}
        </option>
      </select>
    </div>

    <div v-if="form.tags.length > 0">
      <span
        class="badge badge-tag mx-2"
        v-for="(tag, index) in form.tags"
        :key="index"
        :style="`background-color: ${tag.color}`"
      >
        {{ tag.name }}
        <a
          href="#"
          @click="handleRemoveTag(index)"
        >
          <i class="fas fa-times"></i>
        </a>
      </span>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
  form: Object,
  tags: Array
})

const selectedTag = ref(null)

const handleSelectedTag = () => {
  props.form.tags.push(selectedTag.value)
  selectedTag.value = null
}

const handleRemoveTag = (index) => {
  props.form.tags.splice(index, 1)
}
</script>

<style scoped>
.badge-tag {
  font-size: 16px;
  padding: 10px 30px;
}

.badge-tag > a {
  color: inherit;
}

.grid-tag-select {
  display: grid;
  grid-template-columns: 2fr 10fr;
}
</style>

