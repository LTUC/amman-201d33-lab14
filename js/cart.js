/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
let table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
let cart;

function loadCart() {
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  cart = new Cart(cartItems);
  console.log(cart);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
  for (var i = table.rows.length - 1; i > 0; i--) {
    table.deleteRow(i);
  }
}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {

  // TODO: Find the table body
  table = document.getElementById('cart');

  // TODO: Iterate over the items in the cart
  for (let i = 0; i < cart.length; i++) {
    cart[i];
  }
  // TODO: Create a TR
  function makeHeader() {

    let headerRow = document.createElement('tr')

    table.appendChild(headerRow);

    let firstTh = document.createElement('th');

    headerRow.appendChild(firstTh);

    let secondTh = document.createElement('th');

    headerRow.appendChild(secondTh);

    let lastTh = document.createElement('th');

    headerRow.appendChild(lastTh);
    // lastTh.textContent = 'item';


  }

  makeHeader()
  console.log('a');
  // TODO: Create a TD for the delete link, quantity,  and the item

  // TODO: Add the TR to the TBODY and each of the TD's to the TR

}

function removeItemFromCart(event) {

  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  // TODO: Save the cart back to local storage
  // TODO: Re-draw the cart table

}

// This will initialize the page and draw the cart on screen
renderCart();
