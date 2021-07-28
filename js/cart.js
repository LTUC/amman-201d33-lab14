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
//  for(let i =0 ; i< cart.items.length ; i++){
   let tbody= document.querySelector('tbody');
   while(tbody.firstChild){
     tbody.removeChild(tbody.firstChild);
   }
//  }
}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {

  // TODO: Find the table body 
  // TODO: Iterate over the items in the cart
  // TODO: Create a TR
  // TODO: Create a TD for the delete link, quantity,  and the item
  // TODO: Add the TR to the TBODY and each of the TD's to the TR
  let tableBody = document.querySelector('tbody');
  console.log(cart.items.length);
  for(let i =0 ; i<cart.items.length; i++){
    let tableRow = document.createElement('tr');
    tableBody.appendChild(tableRow);
    let tableData = document.createElement('td');
    tableRow.appendChild(tableData);
    let buttunElement = document.createElement('button');
    tableData.appendChild(buttunElement);
    buttunElement.type='button';
    buttunElement.textContent= 'X';
    tableData = document.createElement('td');
    tableRow.appendChild(tableData);
    tableData.textContent= cart.items[i].product;
    tableData = document.createElement('td');
    tableRow.appendChild(tableData);
    tableData.textContent= cart.items[i].quantity;
    console.log(cart.items[i].product,cart.items[i].quantity);
  }
}

function removeItemFromCart(event) {

  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  let item = event.target.id;
  console.log(event);
  cart.removeItem(item);
  // TODO: Save the cart back to local storage
  cart.saveToLocalStorage();
  // TODO: Re-draw the cart table
  renderCart();

}

// This will initialize the page and draw the cart on screen
renderCart();
