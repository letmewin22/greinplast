import Highway from '@dogstudio/highway'
import ProductionLoader from '../ProductionLoader.js'
import loading from '../preloader.js'
import FormSubmit from '../form/FormSubmit.js'
import formWindowEvents from '../form/formWindowEvents.js'

class CustomRendererProduction extends Highway.Renderer {
  onEnterCompleted() {

    const loaderScreen = document.querySelector('.loader-screen')

    if (loaderScreen.classList.contains('done') === true) {
      ProductionLoader()

      new FormSubmit()
      formWindowEvents()
    }

    window.addEventListener('load', (e) => {
      loading()
      ProductionLoader()

      new FormSubmit()
      formWindowEvents()
    })
  }
}
// Don`t forget to export your renderer
export default CustomRendererProduction
