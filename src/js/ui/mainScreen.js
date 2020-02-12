const h1 = document.querySelector('.main-h1')
const h1Span = h1.querySelectorAll('.h1-links')
const lines = document.querySelectorAll('.line')
const bg = document.querySelectorAll('.header-bg')


function Hover() {
  const line = this.querySelector('.line')

  h1.style.color = 'rgba(255, 255, 255, 0.5)'
  this.style.color = 'white'

  for (let curLine of lines) {
  	curLine.style.opacity = '0.3'
  }

  line.style.opacity = '1'
  
  for (let i = 0; i < bg.length; i++) {
  	if (i !== this.getAttribute('data-bg')) {
  		bg[i].style.opacity = 0
  	} 
  		bg[this.getAttribute('data-bg')].style.opacity = 1
  	
  }
  
  

}

function HoverOut() {

  h1.style.color = 'white'
  this.style.color = ''

  for (let curLine of lines) {
  	curLine.style.opacity = '1'
  }
  for (let i = 0; i < bg.length; i++) {
  	bg[i].style.opacity = 0
  	bg[1].style.opacity = 1
  }
  
}


h1Span.forEach(span => span.addEventListener('mouseenter', Hover))
h1Span.forEach(span => span.addEventListener('mouseleave', HoverOut))
