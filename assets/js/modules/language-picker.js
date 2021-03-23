export function languagePicker () {
  const languagePicker = document.querySelector('.js-header-language')
  const languageDropdown = document.querySelector('.js-language-dropdown')
  const activeClass = 'is-opened'

  languagePicker.addEventListener('click', toggleDropdown)

  window.addEventListener('load', function () {
    languageDropdown.removeAttribute('style')
  })

  function toggleDropdown (e) {
    e.stopPropagation()
    this.classList.toggle(activeClass)

    /*
    * add or remove click outside close
    * */
    if (!this.classList.contains(activeClass)) {
      window.removeEventListener('click', closeOutside)
    } else {
      window.addEventListener('click', closeOutside, { once: true })
    }
  }

  function closeOutside (e) {
    if (!e.target.closest('.js-header-language')) {
      languagePicker.classList.remove(activeClass)
    }
  }
}

