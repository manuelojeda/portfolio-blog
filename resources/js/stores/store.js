import { defineStore } from 'pinia'
import enJson from '../json/en.json'

export const useGlobalStore = defineStore('globalStore', {
  state: () => {
    return {
      json: enJson,
      isDark: false
    }
  },
  getters: {
    getJson: (state) => state.json,
    getIsDark: (state) => state.isDark
  }
})
