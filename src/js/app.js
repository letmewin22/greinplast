import Highway from '@dogstudio/highway'
import Fade from './Fade'
import CustomRendererMain from './pageRenderers/CustomRendererMain.js'
import CustomRendererServices from './pageRenderers/CustomRendererServices.js'
import CustomRendererAbout from './pageRenderers/CustomRendererAbout.js'
import CustomRendererContacts from './pageRenderers/CustomRendererContacts.js'
import CustomRendererBlog from './pageRenderers/CustomRendererBlog.js'

import Button from './ui/Button.js'
// import './ui/footer-representations.js'
import './ui/Nav.js'
import './ui/dropdopwn.js'
import './scroll.js'

import FormSubmit from './form/FormSubmit.js'
// import './form/formWindowEvents.js'


new Button()

// new FormSubmit()


const H = new Highway.Core({
  renderers: {
    main: CustomRendererMain,
    services: CustomRendererServices,
    about: CustomRendererAbout,
    contacts: CustomRendererContacts,
    blog: CustomRendererBlog
  },
  transitions: {
    default: Fade
  }
})

const navbar = document.querySelector('.navbar')
const route = 'about'

const detectNavColors = () => {

  if (document.querySelector('[data-router-view]').getAttribute('data-router-view') === route) {
    navbar.style.color = 'black'
    navbar.querySelector('.button').classList.remove('border-button')
    navbar.querySelector('.logo-img.desk').setAttribute('src', 'img/logo-min-black.png')
    navbar.querySelector('.logo-img.mob').setAttribute('src', 'img/logo-mob-black.png')
    navbar.querySelector('.burger').style.stroke = 'black'
  } else if (document.querySelector('[data-router-view]').getAttribute('data-router-view') === 'blog') {
    navbar.querySelector('.logo-img.desk').setAttribute('src', '../img/logo-min.png')
    navbar.querySelector('.logo-img.mob').setAttribute('src', '../img/logo-mob.png')
  } else {
    navbar.style.color = 'white'
    navbar.querySelector('.button').classList.add('border-button')
    navbar.querySelector('.logo-img.desk').setAttribute('src', 'img/logo-min.png')
    navbar.querySelector('.logo-img.mob').setAttribute('src', 'img/logo-mob.png')
    navbar.querySelector('.burger').style.stroke = 'white'
  }
}

window.addEventListener('load', () => {
  detectNavColors()
})


H.on('NAVIGATE_END', () => {
  detectNavColors()
})
