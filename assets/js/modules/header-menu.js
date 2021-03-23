export function headerMenu () {
  const header = document.querySelector('.js-header')
  const btn = header.querySelector('.js-menu-button')
  const headerIsWithoutShadow = !header.classList.contains('with-shadow')
  const openedClass = 'menu-opened'
  const showShadowClass = 'with-shadow'

  /*
  * Toggle Header Menu
  * */
  btn.addEventListener('click', () => {
    header.classList.toggle(openedClass)
  })

  /*
  * Add shadow to header in case if it hasn't the shadow
  * */
  window.addEventListener('scroll', () => {
    if (headerIsWithoutShadow) {
      if (window.pageYOffset > 0) {
        header.classList.add(showShadowClass)
      } else {
        header.classList.remove(showShadowClass)
      }
    }
  }, { passive: true })
}