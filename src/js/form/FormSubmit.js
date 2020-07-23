import { TimelineMax, Power1} from 'gsap'

import FormInputs from './FormInputs.js'
import FormWindowEvents from './formWindowEvents.js'
import serialize from './formSend.js'
import pseudoPrototype from './pseudo.prototype.js'

export default class FormSubmit extends FormInputs {

  constructor() {
    super()
    pseudoPrototype()

    this.thankYouWindow = document.querySelector('.thank-you-window')
    this.thankYouWindowText = this.thankYouWindow.querySelector('span')
    
    this.form.onsubmit = (e) => this.submit(e)

  }

  validation() {

    this.validateText.querySelector('.koef-inp').innerHTML = this.koef
    this.validateText.querySelector('.koef-outp').innerHTML = this.koef - this.phone.value.trim('').length
    this.validateText.style.opacity = '1'

    this.phone.focus()
    this.label.pseudoStyle('after', 'border-color', '#F44336!important')
  }

  requestLoad() {
    const formClose = new FormWindowEvents()

    let tl = new TimelineMax()
    tl
      .to(this.thankYouWindow, 1, { opacity: 1, ease: Power1.easeInOut })
      .to(this.thankYouWindowText, 1, { opacity: 1, y: 0, ease: Power1.easeInOut }, 0.1)
      .to(this.thankYouWindowText, 1, { opacity: 0, y: 40, ease: Power1.easeInOut, 
        onComplete: () => {
          formClose.closeEvent()
        }}, 4)
      .to(this.thankYouWindow, 1, { opacity: 0, ease: Power1.easeInOut }, 4.5)
      

    this.form.reset()
    document.body.classList.remove('form-focused')
    for (let input of this.input) {
      input.classList.remove('focus')
    }

    // dataLayer.push({ 'event': 'otpravka_form' })
  }


  async requestSend() {

    const URL = this.form.getAttribute('data-url')

    try {

      await fetch(URL, {
        method: 'POST',
        body: serialize(this.form),
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        }
      })
        .then(response => response.status >= 200 && response.status < 400 ?
          this.requestLoad() : alert('При отправке произошла ошибка:('))
      // this.requestLoad() : this.requestLoad())

    } catch (e) {
      console.log(e)
    }
  }



  submit(e) {

    if (this.phone.value.trim('').length < this.koef) {
      this.validation()
      e.preventDefault()
    } else {
      this.requestSend()
    }


    return false
  }
}
