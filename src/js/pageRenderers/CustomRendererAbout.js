import Highway from '@dogstudio/highway'
import AboutLoader from '../AboutLoader.js'
import loading from '../preloader.js'

class CustomRendererAbout extends Highway.Renderer {
  onEnterCompleted() {

    const loaderScreen = document.querySelector('.loader-screen')
    
    if (loaderScreen.classList.contains('done') === true) {
      AboutLoader()
    }

    window.addEventListener('load', (e) => {
      loading()
      AboutLoader()
    })
  }
}
// Don`t forget to export your renderer
export default CustomRendererAbout
