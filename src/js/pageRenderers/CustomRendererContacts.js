import Highway from '@dogstudio/highway'
import loading from '../preloader.js'
import footerRepresentations from '../ui/footer-representations.js'

class CustomRendererContacts extends Highway.Renderer {
  onEnterCompleted() {

    footerRepresentations()

    const loaderScreen = document.querySelector('.loader-screen')

    window.addEventListener('load', (e) => {
      loading()
    })
  }
}
// Don`t forget to export your renderer
export default CustomRendererContacts
