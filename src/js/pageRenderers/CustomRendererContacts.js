import Highway from '@dogstudio/highway'
import loading from '../preloader.js'

class CustomRendererContacts extends Highway.Renderer {
  onEnterCompleted() {

    const loaderScreen = document.querySelector('.loader-screen')

    window.addEventListener('load', (e) => {
      loading()
    })
  }
}
// Don`t forget to export your renderer
export default CustomRendererContacts
