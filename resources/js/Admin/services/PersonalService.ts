/* eslint-disable no-unused-vars */
import { ref, Ref } from '@vue/composition-api'
import { askAlert, simpleAlert } from '@/utils/alerts'
import axios from 'axios'
import Personal from '@/Admin/interfaces/Personal'

class PersonalService {
  private __Personal: Ref<Personal>

  constructor (personal: Personal = null) {
    this.__Personal = ref<Personal>({
      data: {
        email: ''
      }
    })

    if (personal) {
      this.__Personal.value = personal
    }
  }

  getPersonal (): Ref<Personal> {
    return this.__Personal
  }

  private prepareFormData (file): any {
    if (!file) {
      return {
        personal: this.__Personal.value
      }
    }

    const data = new FormData()
    data.append('personal', JSON.stringify(this.__Personal.value))
    data.append('file', file.file)

    return data
  }

  async save (file: any): Promise<any> {
    const result = await askAlert('Do you want to save your personal data?')

    if (result.isConfirmed) {
      const data = this.prepareFormData(file)

      const response = await axios({
        url: `/admin/personal/${this.__Personal.value.id}`,
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
