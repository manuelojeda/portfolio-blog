<template>
  <div>
    <file-input v-model="file" is-image />
  </div>
</template>

<script>
import FileInput from 'vue-simple-file-input'

export default {
  name: 'PersonalIndex',
  components: {
    FileInput
  },
  data () {
    return {
      file: null
    }
  }
}
</script>
