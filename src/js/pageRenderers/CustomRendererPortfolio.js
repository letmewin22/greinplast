import Highway from '@dogstudio/highway'
import loading from '../preloader.js'
import footerRepresentations from '../ui/footer-representations.js'
import PortfolioPopUp from '../PortfolioPopUp'
import PortfolioLoader from '../PortfolioLoader.js'

class CustomRendererProduction extends Highway.Renderer {
  onEnterCompleted() {

    const loaderScreen = document.querySelector('.loader-screen')
    footerRepresentations()

    new PortfolioPopUp()
    

    if (loaderScreen.classList.contains('done') === true) {
      PortfolioLoader()
    }

    window.addEventListener('load', () => {
      loading()
      PortfolioLoader()
    })
  }
}
// Don`t forget to export your renderer
export default CustomRendererProduction
