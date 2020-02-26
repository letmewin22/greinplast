const openBtns = document.querySelectorAll('.form-handler')
const formPopUp = document.querySelector('.pop-up-form')
const closeBtn = formPopUp.querySelector('.close-form-icon')

const openEvent = () => {
  formPopUp.classList.add('opened')
  document.body.style.overflowY = 'hidden'
}

const closeEvent = () => {
  formPopUp.classList.remove('opened')
  document.body.style.overflowY = 'initial'
}

openBtns.forEach(elem => elem.addEventListener('click', openEvent))

closeBtn.addEventListener('click', closeEvent)
