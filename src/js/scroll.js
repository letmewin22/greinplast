import { TimelineMax } from 'gsap'


function sectionInView() {

  let elements = document.querySelectorAll('section')
  for (let i = 0; i !== elements.length; i++) {
    if (elements[i].getBoundingClientRect().top <= window.innerHeight * 0.75 && elements[i].getBoundingClientRect().top > 0) {

      if (!elements[i].classList.contains('activated')) {
        elements[i].classList.add('activated')

        let tl = new TimelineMax()
        tl
          .to(elements[i].querySelectorAll('h2'), 0.6, { opacity: 1, y: 0, ease: Power1.easeOut }, 0.3)
          .to(elements[i].querySelectorAll('h3'), 0.5, { opacity: 1, ease: Power1.easeOut }, 0.4)
          .to(elements[i].querySelectorAll('p'), 0.5, { opacity: 1, ease: Power1.easeOut }, 0.5)
          .to(elements[i].querySelectorAll('.default-content-plus-text'), 0.5, { opacity: 1, ease: Power1.easeOut }, 0.5)
          .to(elements[i].querySelectorAll('.button'), 0.5, { opacity: 1, y: 0, ease: Power1.easeOut }, 0.8)
      }
    }
  };

  window.requestAnimationFrame(sectionInView)

};


window.addEventListener('load', (e) => {
  setTimeout(() => {
    sectionInView()
  }, 300)

})


