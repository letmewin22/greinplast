const footerRepresentations = () => {



  const footerRepresentation = document.querySelector('[data-alternate]')
  const footerRepresentationBtn = document.querySelector('[data-alternate-btn]')

  if (screen.width < 480) {
    footerRepresentation.innerText = footerRepresentation.getAttribute('data-alternate')
    footerRepresentationBtn.innerText = footerRepresentationBtn.getAttribute('data-alternate-btn')
  }

  const representationsBtn = document.getElementById('representations-btn')
  const representationsHidden = document.getElementById('representations-hidden')
  const representations = document.querySelectorAll('.representations p')


  const hiddenRepresentations = () => {

    representationsBtn.style.display = 'block'
    representationsHidden.style.display = 'none'

    for (let representation of representations) {
      representation.style.display = 'none'
    }

    if (screen.width > 480) {
    
      for (let i = 0; i < 3; i++) {
        representations[i].style.display = 'block'
      }
    }

  }

  const showRepresentations = () => {

    for (let representation of representations) {
      representation.style.display = 'block'
    }

    representationsBtn.style.display = 'none'
    representationsHidden.style.display = 'block'
  }

  representationsBtn.addEventListener('click', showRepresentations)
  representationsHidden.addEventListener('click', hiddenRepresentations)

}

export default footerRepresentations
