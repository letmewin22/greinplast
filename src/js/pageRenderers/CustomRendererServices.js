import Highway from '@dogstudio/highway'
import imagesLoaded from 'imagesloaded'
import loading from '../preloader.js'
import MainLoader from '../MainLoader.js'

class CustomRendererServices extends Highway.Renderer {
  onEnterCompleted() {

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
export default CustomRendererServices
