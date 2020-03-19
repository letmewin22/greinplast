import {TimelineMax} from 'gsap'

const h1 = document.querySelector('h1')
const descriptor = document.querySelector('.error-descriptor')


const loadingAnimation = () => {
  const tl = new TimelineMax()
  tl
 	.to(h1, 1, {x: 0, opacity: 1, ease: Power1.easeOut})
 	.to(descriptor, 1, {x: 0, opacity: 1, ease: Power1.easeOut}, 0.3)
}

export default loadingAnimation
