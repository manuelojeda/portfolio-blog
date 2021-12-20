import store from '../../store'

const checkBrowserLanguage = () => {
  if (navigator.languages[1] === 'es') {
    store.commit('updateLanguage', 'es')
  } else {
    store.commit('updateLanguage', 'en')
  }
}

export default checkBrowserLanguage
