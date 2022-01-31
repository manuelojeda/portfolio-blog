/* eslint-disable no-unused-vars */
import { ref } from 'vue'
import { askAlert, simpleAlert } from '@/utils/alerts'
import axios from 'axios'

class PersonalService {
  #__Personal;

  constructor (personal = null) {
    this.#__Personal = ref({
      data: {
        email: ''
      }
    })

    if (personal) {
      this.#__Personal.value = personal
    }
  }

  getPersonal () {
    return this.#__Personal
  }

  #prepareFormData (file) {
    if (!file) {
      return {
        personal: this.#__Personal.value
      }
    }

    const data = new FormData()
    data.append('personal', JSON.stringify(this.#__Personal.value))
    data.append('file', file.file)

    return data
  }

  async save (file) {
    const result = await askAlert('Do you want to save your personal data?')

    if (result.isConfirmed) {
      const data = this.#prepareFormData(file)

      const response = await axios({
        url: `/admin/personal/${this.#__Personal.value.id}`,
        method: 'post',
        data
      })

      if (response.data.band) {
        simpleAlert(response.data.text, response.data.icon, true)
      }
    }
  }
}

export default PersonalService
