import Highway from '@dogstudio/highway'
import imagesLoaded from 'imagesloaded'
import loading from '../preloader.js'
import MainLoader from '../MainLoader.js'
import footerRepresentations from '../ui/footer-representations.js'
import FormSubmit from '../form/FormSubmit.js'
import formWindowEvents from '../form/formWindowEvents.js'

class CustomRendererServices extends Highway.Renderer {
  onEnterCompleted() {

    const loaderScreen = document.querySelector('.loader-screen')
    const allImg = document.querySelectorAll('.header-bg')

    if (loaderScreen.classList.contains('done') === true) {
      MainLoader()

      new FormSubmit()
      formWindowEvents()
      footerRepresentations()
    }

    window.addEventListener('load', (e) => {
      loading()
      MainLoader()

      new FormSubmit()
      formWindowEvents()
      footerRepresentations()
    })
  }
}
// Don`t forget to export your renderer
export default CustomRendererServices
