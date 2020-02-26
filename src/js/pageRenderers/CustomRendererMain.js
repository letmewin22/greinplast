import Highway from '@dogstudio/highway'
import imagesLoaded from 'imagesloaded'
import MainLoader from '../MainLoader.js'
import loading from '../preloader.js'
import MainScreen from '../ui/mainScreen.js'

class CustomRendererMain extends Highway.Renderer {
  onEnterCompleted() {

    MainScreen()
    const loaderScreen = document.querySelector('.loader-screen')
    const allImg = document.querySelectorAll('.header-bg')

    if (loaderScreen.classList.contains('done') === true) {
      MainLoader()
    }

    window.addEventListener('load', (e) => {
      loading()
      MainLoader()
    })
  }
}
// Don`t forget to export your renderer
export default CustomRendererMain
