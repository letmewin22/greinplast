import {TimelineMax} from 'gsap'

const ProductionLoader = () => {
  const h2 = document.querySelectorAll('h2')
  const p = document.querySelectorAll('.product-p')
  const lines = document.querySelectorAll('.product-item-line')
  const text = document.querySelector('.production-header-text')

  const loadingAnimation = () => {
    const tl = new TimelineMax()
    tl
 	.to(text, 1, {x: 0, opacity: 1, ease: Power1.easeOut})
 	.staggerTo(lines, 1, {width: '100%', opacity: 1, ease: Power2.easeInOut}, 0.2, 0.3)
 	.to(h2, 1, {opacity: 1, ease: Power1.easeOut}, 0.6)
 	.to(p, 1, {opacity: 1, ease: Power1.easeOut}, 0.6)
  }	
  loadingAnimation()
}


export default ProductionLoader

