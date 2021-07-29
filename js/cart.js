/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
const table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
let cart=[];

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
  let rows = document.getElementsByTagName('tbody');
  for (let i = 0; i < rows.length; i++) {
    rows[i].remove();
    
  }

}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {

  // TODO: Find the table body
  let tablePostion = document.getElementById('cart');

  // TODO: Iterate over the items in the cart
  for (let i = 0; i < cart.length; i++) {
  console.log(cart[i]);    
  }
  // TODO: Create a TR
  // TODO: Create a TD for the delete link, quantity,  and the item
  // TODO: Add the TR to the TBODY and each of the TD's to the TR

  for (let i = 0; i < cart.length; i++) {
    let tableRow = document.createElement('tr');
    let deleteLink = document.createElement('td');
    let button = document.createElement('button');

    button.textContent = 'X';
    button.addEventListener('click', removeItemFromCart);
    deleteLink.appendChild(button);

    tableRow.appendChild(deleteLink);

    let quantityInfo = document.createElement('td');
    quantityInfo.textContent= cart[i].quantity;
    tableRow.appendChild(quantityInfo);

    let itemProduct = document.createElement('td');
    itemProduct.textContent=cart[i].item;
    tableRow.appendChild(itemProduct);
    
    tablePostion.appendChild(tableRow);
    }

}

function removeItemFromCart(event) {

  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  // TODO: Save the cart back to local storage
  // TODO: Re-draw the cart table

}

// This will initialize the page and draw the cart on screen
renderCart();
