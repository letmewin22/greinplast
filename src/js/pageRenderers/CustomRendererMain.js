import Highway from '@dogstudio/highway'
import imagesLoaded from 'imagesloaded'
import MainLoader from '../MainLoader.js'
import loading from '../preloader.js'
import MainScreen from '../ui/mainScreen.js'
import footerRepresentations from '../ui/footer-representations.js'
import FormSubmit from '../form/FormSubmit.js'
import formWindowEvents from '../form/formWindowEvents.js'

class CustomRendererMain extends Highway.Renderer {
  onEnterCompleted() {

    MainScreen()
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
export default CustomRendererMain
