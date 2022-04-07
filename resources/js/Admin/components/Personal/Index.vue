<template>
  <div class="grid">
    <div class="grid--image-preview">
      <label>
        <b>
          Image Preview
        </b>
      </label>
      <br />
      <img :src="previewPhoto" alt="Le photo" class="block max-w-sm mx-auto rounded" />
    </div>
    <div class="grid--form">
      <form @submit.prevent="handleForm">
        <file-input v-model="file" is-image />

        <div class="d-block w-100 mt-4">
          <button type="submit" class="rounded-none bg-blue-500 px-8 py-2 mt-5 text-white float-right">
            Save
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import PersonalService from '@/Admin/services/PersonalService'
import FileInput from 'vue3-simple-file-input'

const props = defineProps({
  personal: Object
})

const file = ref(null)
const service = new PersonalService(props.personal)
const personalData = service.getPersonal()

const previewPhoto = computed(() => {
  return file.value === null
    ? personalData.value.data.photo
    : file.value.fileBlob
})

const handleForm = async () => {
  service.save(file.value)
}
</script>

<style lang="scss" scoped>
.grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
}
</style>
