import Vue from 'vue'
import Vuex from 'vuex'
import esJson from './json/es.json'
import enJson from './json/en.json'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    json: {},
    language: null,
    isDark: false
  },
  getters: {
    getJson: state => {
      return state.json
    },
    getLanguage: state => {
      return state.language
    },
    getIsDark: state => state.isDark
  },
  mutations: {
    updateJson (state, payload) {
      state.json = payload
    },
    updateLanguage (state, payload) {
      state.language = payload

      if (payload === 'es') {
        state.json = esJson
      } else {
        state.json = enJson
      }
    },
    updateIsDark (state, payload) {
      state.isDark = payload
    }
  },
  actions: {
    setDarkMode (payload) {
      this.commit.updateIsDark(this.state, payload)
    }
  }
})

export default store
