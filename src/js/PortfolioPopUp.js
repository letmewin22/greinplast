import Slider from './ui/Slider'

export default class PortfolioPopUp {
  constructor() {
    this.popUp = document.querySelector('.portfolio-pop-up')
    this.items = [...document.querySelectorAll('.portfolio__item')]
    this.pItems = [...document.querySelectorAll('.portfolio-pop-up__item')]
    this.closeBtn = document.querySelector('.portfolio-pop-up__close')

    this.render()
  }

  render() {


    this.items.forEach(el => {
      this.index = +el.getAttribute('data-index')
      el.addEventListener('click', this.open.bind(this, this.index))
    })

    this.closeBtn.addEventListener('click', this.close.bind(this))
  }

  open(i) {
    document.body.style.overflow = 'hidden'
    document.body.style.setProperty('--mr', '17px')

    this.popUp.classList.add('open')
    this.pItems.forEach(el => el.classList.remove('current', 'view'))

    setTimeout(() => {

      this.pItems[i].classList.add('view')

      this.slider = new Slider(this.pItems[i].querySelector('.portfolio-pop-up__slider'))

      setTimeout(() => {
        this.pItems[i].classList.add('current')
      }, 10)
      
    }, 400)
  }

  close() {

    this.pItems.forEach(el => el.classList.remove('current'))

    setTimeout(() => {

      this.pItems.forEach(el => el.classList.remove('view'))
      this.popUp.classList.remove('open')

      document.body.style.overflow = 'initial'
      document.body.style.setProperty('--mr', '0px')

      this.slider.destroy()
    }, 400)
  }
}
