import Highway from '@dogstudio/highway'
import MainLoader from '../MainLoader.js'
import loading from '../preloader.js'
import MainScreen from '../ui/mainScreen.js'
import footerRepresentations from '../ui/footer-representations.js'

class CustomRendererMain extends Highway.Renderer {
  onEnterCompleted() {

    MainScreen()
    const loaderScreen = document.querySelector('.loader-screen')

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
export default CustomRendererMain
