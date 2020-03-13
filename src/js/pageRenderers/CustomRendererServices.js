import Highway from '@dogstudio/highway'
import loading from '../preloader.js'
import MainLoader from '../MainLoader.js'
import footerRepresentations from '../ui/footer-representations.js'

class CustomRendererServices extends Highway.Renderer {
  onEnterCompleted() {

    const loaderScreen = document.querySelector('.loader-screen')
    const allImg = document.querySelectorAll('.header-bg')

    if (loaderScreen.classList.contains('done') === true) {
      MainLoader()

      footerRepresentations()
    }

    window.addEventListener('load', (e) => {
      loading()
      MainLoader()

      footerRepresentations()
    })
  }
}
// Don`t forget to export your renderer
export default CustomRendererServices
