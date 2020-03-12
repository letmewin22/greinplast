const SliceText = (selector, wishLenght) => {
    
  const text = selector.innerText
  const maxlenght = wishLenght

  if (text.length > maxlenght) {

    const dif = text.length - maxlenght
    const textStorage = text
    const newText = text.slice(0, -dif)

    selector.innerHTML = `${newText}<span class="more-dots">...</span>`

  } else if (text.length === maxlenght) {

    selector.innerHTML += '<span class="more-dots">...</span>'
  } else {

    console.error('Desired text length less than total')
  }
}

export default SliceText
