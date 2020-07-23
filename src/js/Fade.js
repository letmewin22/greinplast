import { TimelineMax } from 'gsap'
import Highway from '@dogstudio/highway'
import imagesLoaded from 'imagesloaded'

export default class Fade extends Highway.Transition {
  // Built-in methods
  out({ from, trigger, done }) {
    document.body.classList.add('transition')
    let tl = new TimelineMax({ onComplete: done })
    tl
      .to(from, 0.4, { opacity: 0, ease: Power3.easeInOut })
  }

  in({ from, to, trigger, done }) {
    from.remove()
    document.body.classList.remove('fixed')
    window.scrollTo(0, 0)
    let tl = new TimelineMax({
      onComplete: () => {
        imagesLoaded(document.body, { background: true }, function() {
          document.body.classList.remove('transition')
          done()
        })
      }
    })
    tl
      .fromTo(to, 0.4, { opacity: 0 }, { opacity: 1, ease: Power3.easeInOut })
  }
};
