const cart = document.querySelector('.cart-container')
const sidebar = document.querySelector('.sidebar')
const close = document.querySelector('.close-cart')

cart.addEventListener('click', () => {
  sidebar.classList.add('show')
})

close.addEventListener('click', () => {
  sidebar.classList.remove('show')
})