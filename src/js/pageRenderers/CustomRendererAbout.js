import Highway from '@dogstudio/highway'
import AboutLoader from '../AboutLoader.js'
import loading from '../preloader.js'
import footerRepresentations from '../ui/footer-representations.js'
import FormSubmit from '../form/FormSubmit.js'
import formWindowEvents from '../form/formWindowEvents.js'

class CustomRendererAbout extends Highway.Renderer {
  onEnterCompleted() {

    const loaderScreen = document.querySelector('.loader-screen')

    if (loaderScreen.classList.contains('done') === true) {
      AboutLoader()

      new FormSubmit()
      formWindowEvents()
      footerRepresentations()

    }

    window.addEventListener('load', (e) => {
      loading()
      AboutLoader()

      new FormSubmit()
      formWindowEvents()
      footerRepresentations()
    })
  }
}
// Don`t forget to export your renderer
export default CustomRendererAbout
