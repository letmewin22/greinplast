export default function productionAccordeon(argument) {

  const productItem = document.querySelectorAll('.product-item')
  const curP = document.querySelectorAll('.product-item-flex')
  setTimeout(() => {
  	productItem[0].classList.add('product-active')
  	curP[0].style.maxHeight = curP[0].scrollHeight + 'px'
  }, 0)
  
  function productOpen() {
    let p = this.querySelector('.product-item-flex')
    if (this.classList.contains('product-active')) {
      this.classList.remove('product-active')
      p.style.maxHeight = '0'

    } else {
      for (let i = 0; i < productItem.length; i++) {
        productItem[i].classList.remove('product-active')
        curP[i].style.maxHeight = '0'
      }

      this.classList.add('product-active')
      p.style.maxHeight = p.scrollHeight + 'px'
    }

  }

  productItem.forEach((elem) => {
    elem.addEventListener('click', productOpen)
  })

}
