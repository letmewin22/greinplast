import Highway from '@dogstudio/highway'
import AboutLoader from '../AboutLoader.js'
import loading from '../preloader.js'
import footerRepresentations from '../ui/footer-representations.js'


class CustomRendererAbout extends Highway.Renderer {
  onEnterCompleted() {

    const loaderScreen = document.querySelector('.loader-screen')

    if (loaderScreen.classList.contains('done') === true) {
      AboutLoader()


      footerRepresentations()

    }

    window.addEventListener('load', (e) => {
      loading()
      AboutLoader()

      footerRepresentations()
    })
  }
}
// Don`t forget to export your renderer
export default CustomRendererAbout
