<template>
  <div>
    <file-input v-model="file" is-image />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api'
import PersonalService from '@/Admin/services/PersonalService'
import FileInput from 'vue-simple-file-input'

export default defineComponent({
  name: 'PersonalIndex',
  components: {
    FileInput
  },
  setup () {
    const file = ref(null)
    const service = new PersonalService()

    const personal = service.getPersonal()

    return {
      file,
      personal
    }
  }
})
</script>
