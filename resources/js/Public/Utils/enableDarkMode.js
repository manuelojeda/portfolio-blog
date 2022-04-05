const enableDarkMode = () => {
  const isEnabled = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
  handleDarkModeTheme(isEnabled)
}

export const handleDarkModeTheme = (isEnabled = false) => {
  const body = document.getElementsByTagName('body')[0]
  body.classList.remove('dark-theme')

  if (isEnabled) {
    body.classList.add('dark-theme')
  }
}

export default enableDarkMode
