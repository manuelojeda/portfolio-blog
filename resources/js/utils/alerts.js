import Swal from 'sweetalert2'

export async function askAlert (question) {
  const result = await Swal.fire({
    icon: 'warning',
    text: question,
    showCancelButton: true,
    cancelButtonText: "I don't want to",
    confirmButtonText: 'Yes, do it'
  })

  return result
}

export function simpleAlert (text, icon, withReload = false) {
  Swal.fire({
    icon,
    text
  })
    .then(() => {
      if (withReload) {
        window.location.reload()
      }
    })
}
