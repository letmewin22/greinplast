// Initial state
let scrollPos = 0
const navbar = document.querySelector('.navbar')

window.addEventListener('scroll', function() {

  if ((document.body.getBoundingClientRect()).top > scrollPos)
    navbar.classList.remove('nav-hidden')
  else if ((document.body.getBoundingClientRect()).top < scrollPos && scrollPos <= 0)
    navbar.classList.add('nav-hidden')
  scrollPos = (document.body.getBoundingClientRect()).top

  if (Math.abs((document.body.getBoundingClientRect()).top) > window.innerHeight * 0.5)
    navbar.classList.add('nav-bg')
  else if (Math.abs((document.body.getBoundingClientRect()).top) < window.innerHeight * 0.5)
    navbar.classList.remove('nav-bg')
})
