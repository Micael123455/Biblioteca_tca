
const menu = document.getElementById("menu")

const cartBtn = document.getElementById("cart-btn")

const cartModal = document.getElementById("cart-modal")

const cartItemsContainer = document.getElementById("cart-items")

const cartTotal = document.getElementById("cart-total")

const checkoutBtn = document.getElementById("checkout-btn")

const closeModalBtn = document.getElementById("close-modal-btn")

const cartCounter = document.getElementById("cart-count")

const addressInput = document.getElementById("address")

const addressWarn = document.getElementById("address-warn")

cartBtn.addEventListener("click", function() {
    cartModal.style.display = "flex"
})

cartModal.addEventListener("click", function(event) {
    if(event.target === cartModal){
        cartModal.style.display = "none"
    }
})

closeModalBtn.addEventListener("click", function(){
     cartModal.style.display = "none"
})

menu.addEventListener("click", function(event){
  //  console.log(event.target)

  let parentButton = event.target.closest(".add-to-cart-btn")
  if(parentButton){
    const name = parentButton.getAttribute("data-name")
    const price = parentButton.getAttribute("data-price")

    console.log(name)
    console.log(price)
  }
})