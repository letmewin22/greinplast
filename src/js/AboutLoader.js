import {TimelineMax} from 'gsap'

const AboutLoader = () => {
  const h1 = document.querySelector('h1')
  const text = document.querySelector('.about-header-text')

  const loadingAnimation = () => {
    const tl = new TimelineMax()
    tl
 	.to(h1, 1, {x: 0, opacity: 1, ease: Power1.easeOut})
 	.to(text, 1, {y: 0, opacity: 1, ease: Power1.easeOut}, 0.3)
  }	
  loadingAnimation()
}


export default AboutLoader
