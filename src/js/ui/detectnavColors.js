const detectNavColors = () => {

  const navbar = document.querySelector('.navbar')
  const navbarLogoDesc = navbar.querySelector('.logo-img.desk')
  const navbarLogoMob = navbar.querySelector('.logo-img.mob')

  if (document.querySelector('[data-router-view]').getAttribute('data-router-view') === 'about' ||
    document.querySelector('[data-router-view]').getAttribute('data-router-view') === 'production' || document.querySelector('[data-router-view]').getAttribute('data-router-view') === 'portfolio') {
    navbar.style.color = 'black'
    navbar.classList.add('white')
    navbar.querySelector('.button').classList.remove('border-button')
    navbarLogoDesc.setAttribute('src', navbarLogoDesc.getAttribute('data-src-dark'))
    navbarLogoMob.setAttribute('src', navbarLogoMob.getAttribute('data-src-dark'))
    navbar.querySelector('.burger').style.stroke = 'black'
  } else {
    navbar.style.color = 'white'
    navbar.classList.remove('white')
    navbar.querySelector('.button').classList.add('border-button')
    navbarLogoDesc.setAttribute('src', navbarLogoDesc.getAttribute('data-src-white'))
    navbarLogoMob.setAttribute('src', navbarLogoMob.getAttribute('data-src-white'))
    navbar.querySelector('.burger').style.stroke = 'white'
  }
}

export default detectNavColors
