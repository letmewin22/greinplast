import Highway from '@dogstudio/highway'
import loading from '../preloader.js'
import errorLoader from '../404Loader.js'

class CustomRendererError extends Highway.Renderer {
  onEnterCompleted() {

    const loaderScreen = document.querySelector('.loader-screen')

    if (loaderScreen.classList.contains('done') === true) {
      errorLoader()

    }

    window.addEventListener('load', (e) => {
      loading()
      errorLoader()
    })
  }
}
// Don`t forget to export your renderer
export default CustomRendererError
