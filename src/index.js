import './styles/index.scss'

const mobileNavButton = document.getElementById('mobile-nav-button')
const mobileNav = document.querySelector('.header-row-nav')

mobileNavButton.addEventListener('click', () => {
  mobileNav.classList.toggle('active')
})
