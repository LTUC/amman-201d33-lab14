/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
const table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
let cart;


let taboddy=document.getElementById('bodyTable')  
let TrElemant=document.createElement('tr');
    taboddy.appendChild(TrElemant);


function loadCart() {
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  cart = new Cart(cartItems);
}


// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
  TrElemant.remove()
}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {
 

  // TODO: Find the table body
  for (let i = 0; i <cart.addItem.length; i++) {

    
    let TdElemant=document.createElement('td');
    TrElemant.appendChild(TdElemant);
    let butten=document.createElement('button')
    TdElemant.appendChild(butten)
    butten.addEventListener('click',removeItemFromCart)
   TdElemant.textContent=`x`
   let Td2Elemant=document.createElement('td');
    TrElemant.appendChild(Td2Elemant);
    Td2Elemant.textContent=`${cart.addItem[i].itemsval}`
    let Td3Elemant=document.createElement('td');
    TrElemant.appendChild(Td3Elemant);
    Td3Elemant.textContent=`${cart.addItem[i].quantitval}`
    
  }

  // TODO: Iterate over the items in the cart
  // TODO: Create a TR
  // TODO: Create a TD for the delete link, quantity,  and the item
  // TODO: Add the TR to the TBODY and each of the TD's to the TR

}

function removeItemFromCart(event) {
  event.preventDefault();

    cart.removeItem()

    cart.saveToLocalStorage()

    // showCart()
  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  // TODO: Save the cart back to local storage
  // TODO: Re-draw the cart table

}

// This will initialize the page and draw the cart on screen
renderCart();
