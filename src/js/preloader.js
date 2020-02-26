const loaderScreen = document.querySelector('.loader-screen')
// const navbar = document.querySelector('.navbar')

const loading = () => {
  loaderScreen.classList.add('done')
  // navbar.classList.add('loaded')
  document.body.style.position = 'static'
}

export default loading
