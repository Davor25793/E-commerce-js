//Variables
 const cart = document.querySelector('.cart-container')
 const sidebar = document.querySelector('.sidebar')
 const close = document.querySelector('.close-cart')
 const featuredContainer = document.querySelector('.featured-container')



  //Open cart
 cart.addEventListener('click', () => {
    sidebar.classList.add('show')
  })


  //Close cart
  close.addEventListener('click', () => {
    sidebar.classList.remove('show')
  })



//Init
function init(){
  fetch('db.json')
    .then(data => data.json())
    .then(res => displayFeatured(res.items))
}

//Featured
const displayFeatured = (items) => {
  let output = ''
  console.log(items)
  const filt = items.filter(item => item.onSale)
  filt.map(item => {
    output += `
    <div class="featured-item">
    <img src=${item.image} alt="">
    <div class="items">
      <span class="search">
        <a href="product.html?id=1">
         <i class="fas fa-search"></i>
        </a>
      </span>
      <span class="add-to-cart">
       <i class="fas fa-shopping-cart"></i>
      </span>
    </div>
    <div class="name">${item.name}</div>
    <div class="price">${item.price}</div>
  </div>
    `
  })
  featuredContainer.innerHTML = output;
}

init();