/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
const table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
let cart;

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
  let tbodyEL = document.getElementById('cart').getElementsByTagName('tbody');


}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {

  // TODO: Find the table body
  let tbodyEL = document.getElementById('cart').getElementsByTagName('tbody');
//maybe I must add 2 for loop but I Confused for this issues

  // TODO: Iterate over the items in the cart
  // TODO: Create a TR
  let newRowEl = document.createElement('tr');

  // TODO: Create a TD for the delete link, quantity,  and the item
  let deleteTdEl = document.createElement('td');
//link
  let linkEL = document.createElement('a');
  deleteTdEl.addEventListener('click', removeItemFromCart);
  deleteTdEl.textContent = 'x';
  deleteTdEl.appendChild(linkEL);
  newRowEl.appendChild(deleteTdEl);
//quantity
  let qtyEl=document.createElement('td');
 //qtyEl.textContent=;
 newRowEl.appendChild(qtyEl);

 //item
 let itemTdEl=document.createElement('td');
// itemTdEl.textContent=;
 newRowEl.appendChild(itemTdEl);
  // TODO: Add the TR to the TBODY and each of the TD's to the TR
   tbodyEL.appendChild(newRowEl);

}

function removeItemFromCart(event) {

  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  // TODO: Save the cart back to local storage
  cart.saveToLocalStorage();
  // TODO: Re-draw the cart table
renderCart();
}

// This will initialize the page and draw the cart on screen
renderCart();
