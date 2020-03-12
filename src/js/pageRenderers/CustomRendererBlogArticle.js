import Highway from '@dogstudio/highway'
import loading from '../preloader.js'

class CustomRendererBlogArticle extends Highway.Renderer {
  onEnterCompleted() {
  	const navbar = document.querySelector('.navbar')
    navbar.querySelectorAll('a').forEach(function(elem) {
      elem.setAttribute('href', `.${elem.getAttribute('href')}`)
    })
    const loaderScreen = document.querySelector('.loader-screen')

    window.addEventListener('load', (e) => {
      loading()
    })
  }
  onLeave() {
  	const navbar = document.querySelector('.navbar')
    navbar.querySelectorAll('a').forEach(function(elem) {
      elem.setAttribute('href', `${elem.getAttribute('href').slice(1)}`)
    })
  }
}
// Don`t forget to export your renderer
export default CustomRendererBlogArticle
