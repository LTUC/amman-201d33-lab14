/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
const table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
let cart;

function loadCart() {
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  cart = new Cart(cartItems);
  console.log(cartItems);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
  table.textContent='';
}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart


function showCart() {
  // TODO: Find the table body
 tableElement = document.getElementById('cart');


  // TODO: Iterate over the items in the cart
  for (let i = 0; i < cart.length; i++) {
  // TODO: Create a TR
  let trElement=document.createElement('tr');
  trElement=document.appendChild('cart');
  // TODO: Create a TD for the delete link, quantity,  and the item
  tdElement=document.appendChild(trElement);
tdElement=document.textContent();
tdElement1=document.textContent();

   // TODO: Add the TR to the TBODY and each of the TD's to the TR
  for (let i = 0; i < length; i++) {
    let tdElement=document.createElement('td');

  tdElement=document.appendChild(trElement);
tdElement=document.textContent();
    
  }
 

  }
}

function removeItemFromCart(event) {

  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  Cart.removeItem();
  // TODO: Save the cart back to local storage
  localStorage.setItem('cart',JSON.stringify(this.items))
  // TODO: Re-draw the cart table
  showCart();

}

// This will initialize the page and draw the cart on screen
renderCart();
