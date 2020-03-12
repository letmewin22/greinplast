import Highway from '@dogstudio/highway'
import loading from '../preloader.js'
import SliceText from '../ui/slice-text.js'

class CustomRendererBlog extends Highway.Renderer {
  onEnterCompleted() {
  	const textSelector = document.querySelectorAll('.blog-article__description')
  	textSelector.forEach(elem => SliceText(elem, 69))
  	
    const loaderScreen = document.querySelector('.loader-screen')

    window.addEventListener('load', (e) => {
      loading()
    })
  }
}
// Don`t forget to export your renderer
export default CustomRendererBlog
