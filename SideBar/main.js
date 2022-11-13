const texts = document.querySelectorAll('p, small, .user ,h2, .logo')
const nav = document.querySelector('.nav-container')

function toggleMenu() {
  texts.forEach(text => text.classList.toggle('hidden'))
  nav.classList.toggle('hiddenNav')
}
