import Highway from '@dogstudio/highway'
import Fade from './Fade'
import CustomRendererMain from './pageRenderers/CustomRendererMain.js'
import CustomRendererServices from './pageRenderers/CustomRendererServices.js'

import Button from './ui/Button.js'
import './ui/footer-representations.js'
import './ui/Nav.js'
import './ui/dropdopwn.js'
import './scroll.js'

import FormSubmit from './form/FormSubmit.js'
import './form/formWindowEvents.js'


new Button()

new FormSubmit()


const H = new Highway.Core({
  renderers: {
    main: CustomRendererMain,
    services: CustomRendererServices
  },
  transitions: {
    default: Fade
  }
})
