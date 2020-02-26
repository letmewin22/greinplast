import {TimelineMax} from 'gsap'

const MainLoader = () => {
  const h1 = document.querySelector('h1')
  const descriptor = document.querySelector('.main-descriptor') || document.querySelector('.descriptor')

  const loadingAnimation = () => {
    const tl = new TimelineMax()
    tl
 	.to(h1, 1, {x: 0, opacity: 1, ease: Power1.easeOut})
 	.to(descriptor, 1, {x: 0, opacity: 1, ease: Power1.easeOut}, 0.3)
  }	
  loadingAnimation()
}


export default MainLoader
