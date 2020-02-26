export default class Button {

  constructor() {

    this.btn = [...document.querySelectorAll('.button')]

    this.btn.forEach(elem => elem.addEventListener('mouseenter', Button.btnHover))
    this.btn.forEach(elem => elem.addEventListener('mouseleave', Button.btnHover))
  }

  static btnHover(e) {

    const btnBg = this.querySelector('.bg')

    const bgPosX = e.pageX - this.getBoundingClientRect().left
    const bgPosY = e.clientY - this.getBoundingClientRect().top

    btnBg.style.top = bgPosY + 'px'
    btnBg.style.left = bgPosX + 'px'
  }
}

