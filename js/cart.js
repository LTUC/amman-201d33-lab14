/* global Cart */
'use strict';

let itemscount = document.getElementById('itemCount')
let quantitydiv = document.getElementById('quantitydiv')
let pelement = document.createElement('p')




function counts() {

  
  itemscount.textContent = ` Number of items is ${localStorage.getItem('count')} `
  
  quantitydiv.appendChild(pelement)
  pelement.textContent = `you have ${localStorage.getItem('count')} and the whole quantity is ${localStorage.getItem('quantitycount')} `;
}
counts()
// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
const table = document.getElementById('cart');
// table.addEventListener('click', removeItemFromCart);
let cart;

function loadCart() {
  const cartItems = getCartData();
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
  const tableBody = document.getElementById('table-body');
  while(tableBody.firstChild) {
    tableBody.firstChild.remove();
  }
 }

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {

  console.log('showCart')

  // TODO: Find the table body
  const tableBody = document.getElementById('table-body');
  // TODO: Iterate over the items in the cart
  const cart = getCartData();
  console.log(cart);
  for (let i = 0; i < cart.length; i++) {
    // TODO: Create a TR
    const tr = document.createElement('tr');
    // TODO: Create a TD for the delete link, quantity,  and the item
    const deleteLink = document.createElement('td');
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'X';
    deleteButton.classList.add('remove-item');
    deleteButton.onclick = function () {
      console.log('onclick');
      removeItemFromCart(i)
    }
    deleteLink.appendChild(deleteButton);
    const quantity = document.createElement('td');
    quantity.textContent = cart[i].quantity;
    const item = document.createElement('td');
    item.textContent = cart[i].product;
    // TODO: Add the TR to the TBODY and each of the TD's to the TR
    tr.appendChild(deleteLink);
    tr.appendChild(quantity);
    tr.appendChild(item);
    tableBody.appendChild(tr);
  }

}

function removeItemFromCart(index) {
  console.log('removeItemFromCart')
  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  console.log(cart);
  cart.removeItem(index);
  // TODO: Save the cart back to local storage
  cart.saveToLocalStorage()
  // TODO: Re-draw the cart table
  renderCart();
}

// This will initialize the page and draw the cart on screen
renderCart();
