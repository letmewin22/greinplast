import Highway from '@dogstudio/highway'
import Fade from './Fade'
import CustomRendererMain from './pageRenderers/CustomRendererMain.js'
import CustomRendererServices from './pageRenderers/CustomRendererServices.js'
import CustomRendererAbout from './pageRenderers/CustomRendererAbout.js'
import CustomRendererContacts from './pageRenderers/CustomRendererContacts.js'
import CustomRendererBlog from './pageRenderers/CustomRendererBlog.js'
import CustomRendererBlogArticle from './pageRenderers/CustomRendererBlogArticle.js'
import CustomRendererProduction from './pageRenderers/CustomRendererProduction.js'
import FormSubmit from './form/FormSubmit.js'
import FormWindowEvents from './form/formWindowEvents.js'

import Button from './ui/Button.js'
import detectNavColors from './ui/detectNavColors.js'
import './ui/Nav.js'
import './ui/navbar-scroll.js'
import './ui/dropdopwn.js'
import './scroll.js'




const H = new Highway.Core({
  renderers: {
    main: CustomRendererMain,
    services: CustomRendererServices,
    about: CustomRendererAbout,
    contacts: CustomRendererContacts,
    blog: CustomRendererBlog,
    blogArticle: CustomRendererBlogArticle,
    production: CustomRendererProduction
  },
  transitions: {
    default: Fade
  }
})


window.addEventListener('load', () => {
  detectNavColors()
  new Button()
  new FormSubmit()
  new FormWindowEvents()
})


H.on('NAVIGATE_END', () => {
  detectNavColors()
  new Button()
  new FormSubmit()
  new FormWindowEvents()
})
