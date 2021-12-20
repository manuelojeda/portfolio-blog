<template>
  <div class="dark-mode-switch">
    <a href="#" v-if="!isDark" @click="handleDarkMode()">
      <i class="fas fa-moon"></i>
    </a>
    <a href="#" v-else @click="handleDarkMode()">
      <i class="fas fa-sun"></i>
    </a>
  </div>
</template>

<script>
import { defineComponent, ref } from '@vue/composition-api'
import { handleDarkModeTheme } from '../Utils/enableDarkMode'

export default defineComponent({
  setup () {
    const isDark = ref(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches)

    const handleDarkMode = () => {
      isDark.value = !isDark.value
      handleDarkModeTheme(isDark.value)
    }

    return {
      isDark,
      handleDarkMode
    }
  }
})
</script>
