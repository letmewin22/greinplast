import Highway from '@dogstudio/highway'
import ProductionLoader from '../ProductionLoader.js'
import loading from '../preloader.js'

class CustomRendererProduction extends Highway.Renderer {
  onEnterCompleted() {

    const loaderScreen = document.querySelector('.loader-screen')

    if (loaderScreen.classList.contains('done') === true) {
      ProductionLoader()

    }

    window.addEventListener('load', (e) => {
      loading()
      ProductionLoader()

    })
  }
}
// Don`t forget to export your renderer
export default CustomRendererProduction
