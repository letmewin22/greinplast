const dropLinks = document.querySelectorAll('.with-drpdn')

function dropDownOpen() {

  this.style.color = '#37D078'

  this.querySelector('.dropdown-content').style.display = 'block'

  setTimeout(() => {
    this.querySelector('.dropdown-content').classList.add('open')
    this.querySelector('.only-mob').style.transform = 'rotate(180deg)'
  }, 0)

}

function dropDownLeave() {

  this.style.color = 'inherit'

  this.querySelector('.dropdown-content').classList.remove('open')
  this.querySelector('.only-mob').style.transform = 'rotate(0deg)'
  if (screen.width < 1171) {
    setTimeout(() => {
      this.querySelector('.dropdown-content').style.display = 'none'
    }, 500)
  }

}


dropLinks.forEach(elem => elem.addEventListener('mouseenter', dropDownOpen))
dropLinks.forEach(elem => elem.addEventListener('mouseleave', dropDownLeave))
