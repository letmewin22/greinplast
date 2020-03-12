const detectNavColors = () => {

  const navbar = document.querySelector('.navbar')

  if (document.querySelector('[data-router-view]').getAttribute('data-router-view') === 'about' ||
    document.querySelector('[data-router-view]').getAttribute('data-router-view') === 'production') {
    navbar.style.color = 'black'
    navbar.classList.add('white')
    navbar.querySelector('.button').classList.remove('border-button')
    navbar.querySelector('.logo-img.desk').setAttribute('src', 'img/logo-min-black.png')
    navbar.querySelector('.logo-img.mob').setAttribute('src', 'img/logo-mob-black.png')
    navbar.querySelector('.burger').style.stroke = 'black'
  } else if (document.querySelector('[data-router-view]').getAttribute('data-router-view') === 'blogArticle') {
    navbar.querySelector('.logo-img.desk').setAttribute('src', '../img/logo-min.png')
    navbar.querySelector('.logo-img.mob').setAttribute('src', '../img/logo-mob.png')
    navbar.style.color = 'white'
    navbar.querySelector('.button').classList.add('border-button')
    navbar.querySelector('.burger').style.stroke = 'white'

  } else {
    navbar.style.color = 'white'
    navbar.classList.remove('white')
    navbar.querySelector('.button').classList.add('border-button')
    navbar.querySelector('.logo-img.desk').setAttribute('src', 'img/logo-min.png')
    navbar.querySelector('.logo-img.mob').setAttribute('src', 'img/logo-mob.png')
    navbar.querySelector('.burger').style.stroke = 'white'
  }
}

export default detectNavColors
