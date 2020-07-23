import {TimelineMax} from 'gsap'

const PortfolioLoader = () => {
  const h2 = document.querySelectorAll('h2')
  const p = document.querySelectorAll('.product-p')
  const portfolio = document.querySelector('.portfolio')
  const text = document.querySelector('.production-header-text')

  const loadingAnimation = () => {
    const tl = new TimelineMax()
    tl
 	.to(text, 1, {x: 0, opacity: 1, ease: Power1.easeOut})
 	.to(portfolio, 1, {opacity: 1, ease: Power2.easeInOut}, 0.5)
 	.to(h2, 1, {opacity: 1, ease: Power1.easeOut}, 0.6)
 	.to(p, 1, {opacity: 1, ease: Power1.easeOut}, 0.6)
  }	
  loadingAnimation()
}


export default PortfolioLoader

