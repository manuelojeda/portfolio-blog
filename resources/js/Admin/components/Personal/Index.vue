<template>
  <div class="grid">
    <div class="grid--image-preview">
      <label for="">
        <b>
          Image Preview
        </b>
      </label>
      <img :src="previewPhoto" alt="" class="img-fluid d-block mx-auto">
    </div>
    <div class="grid--form">
      <form @submit.prevent="handleForm">
        <b-form-group label="Name">
          <b-form-input
            v-model="personalData.data.name"
            type="text"
            placeholder="Put your name here ..."
            required
          />
        </b-form-group>
        <b-form-group label="Position">
          <b-form-input
            v-model="personalData.data.position"
            type="text"
            placeholder="Put your dev position here ..."
            required
          />
        </b-form-group>
        <b-form-group label="Email">
          <b-form-input
            v-model="personalData.data.email"
            type="email"
            placeholder="Put your contact email here ..."
            required
          />
        </b-form-group>
        <b-form-group label="Photo">
          <file-input v-model="file" is-image />
        </b-form-group>

        <div class="d-block w-100 mt-4">
          <button type="submit" class="btn btn-primary float-right">
            Save
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
// import { defineComponent, ref, computed } from '@vue/composition-api'
// eslint-disable-next-line no-unused-vars
import PersonalService from '@/Admin/services/PersonalService'
import FileInput from 'vue-simple-file-input'

export default ({
  name: 'PersonalIndex',
  props: {
    personal: {
      type: Object
    }
  },
  components: {
    FileInput
  },
  setup (props) {
    const file = ref(null)
    const service = new PersonalService(props.personal)
    const personalData = service.getPersonal()

    const previewPhoto = computed(() => {
      return file.value === null ? personalData.value.data.photo : file.value.fileBlob
    })

    const handleForm = async () => {
      service.save(file.value)
    }

    return {
      file,
      personalData,
      previewPhoto,
      handleForm
    }
  }
})
</script>

<style lang="scss" scoped>
.grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
}
</style>
