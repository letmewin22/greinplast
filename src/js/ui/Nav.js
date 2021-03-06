const burger = document.querySelector('.burger')
const closeIcon = document.querySelector('.close-icon')
const nav = document.querySelector('nav')
const navItems = nav.querySelectorAll('a')
const overlay = document.querySelector('.overlay')

const navOpen = () => {

  document.body.style.overflow = 'hidden'
  overlay.style.display = 'block'
  nav.style.display = 'block'

  setTimeout(() => {
    nav.classList.add('is-open')
  }, 10)
}

const navClose = () => {

  document.body.style.overflow = 'initial'
  overlay.style.display = 'none'
  nav.classList.remove('is-open')
  setTimeout(() => {
    nav.style.display = 'none'
  }, 600)
}

burger.addEventListener('click', navOpen)
closeIcon.addEventListener('click', navClose)
overlay.addEventListener('click', navClose)
if (screen.width < 1171) {
  navItems.forEach(elem => elem.addEventListener('click', navClose))
}
