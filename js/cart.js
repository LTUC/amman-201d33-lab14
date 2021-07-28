/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
const table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
let cart;
let tableDiv=document.getElementById('cart-container');

function loadCart() {
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  console.log('cartItems:',cartItems);
  cart = new Cart(cartItems);
  console.log('cart:',cart);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
  table.textContent="";
}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {

  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  cart = new Cart(cartItems);
  // TODO: Find the table body
  let tableBody= document.querySelector('tbody');
  // TODO: Iterate over the items in the cart
  // TODO: Create a TR
  // TODO: Create a TD for the delete link, quantity,  and the item
  // TODO: Add the TR to the TBODY and each of the TD's to the TR
  for (let i =0;i<this.cartItems.length;i++){
    let tableRow=document.createElement('tr');
    tbody.appendChild(tableRow);
    let deleteLink=document.createElement('td');
    deleteLink.textContent='x';
    deleteLink.appendChild(tableRow);
    let quantityTable =document.createElement('td');
    quantityTable.textContent=cartItems[0];
    quantityTable.appendChild(tableRow);
    let itemTable =document.createElement('td');
    itemTable.textContent=cartItems[1];
    itemTable.appendChild(tableRow);
  }
}

function removeItemFromCart(event) {

  let tableBody= document.querySelector('tbody');
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  cart = new Cart(cartItems);
  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  // TODO: Save the cart back to local storage
  // TODO: Re-draw the cart table
  tbody.deleteLink.addEventListener('click',cartItems.removeItem);
  localStorage.setItem('cart',JSON.stringify(cart));
  showCart();
}

// This will initialize the page and draw the cart on screen
renderCart();
