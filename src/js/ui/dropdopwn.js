const dropLinks = document.querySelectorAll('.with-drpdn')


function dropDownOpen() {

  this.style.color = '#37D078'

  this.querySelector('.dropdown-content').style.display = 'block'
  
  setTimeout(() => {
    this.querySelector('.dropdown-content').style.opacity = 1
    this.querySelector('.dropdown-content').style.pointerEvents = 'auto'
    this.querySelector('.only-mob').style.transform = 'rotate(180deg)'
  }, 10)

}

function dropDownLeave() {

  this.style.color = 'inherit'

  this.querySelector('.dropdown-content').style.opacity = 0
  this.querySelector('.dropdown-content').style.pointerEvents = 'none'
  this.querySelector('.only-mob').style.transform = 'rotate(0deg)'
  
  setTimeout(() => {
    this.querySelector('.dropdown-content').style.display = 'none'
  }, 500)
}


dropLinks.forEach(elem => elem.addEventListener('mouseenter', dropDownOpen))
dropLinks.forEach(elem => elem.addEventListener('mouseleave', dropDownLeave))
