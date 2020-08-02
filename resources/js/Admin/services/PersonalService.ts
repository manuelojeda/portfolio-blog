import { ref, Ref } from '@vue/composition-api'
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
}

export default PersonalService
