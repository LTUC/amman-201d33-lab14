/ global Cart /
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
const table = document.getElementById('cart');
// table.addEventListener('click', removeItemFromCart);
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
  tbody.textContent = "";
}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {

  // TODO: Find the table body
  let tbody = document.getElementById('tbody');
  let data = localStorage.getItem('cart');
  let parcedArray = JSON.parse(data);
  for (let i = 0; i < parcedArray.length; i++) {
    let tr = document.createElement('tr');
    tbody.appendChild(tr);
    let tdDelete = document.createElement('td');
    tr.appendChild(tdDelete);

    let deletebtn = document.createElement('button');
    deletebtn.textContent = 'X';
    deletebtn.id = i;    
    tdDelete.appendChild(deletebtn);
    let tdQuantity = document.createElement('td');
    tr.appendChild(tdQuantity);
    tdQuantity.textContent = parcedArray[i].quantity;
    let tdItem = document.createElement('td');
    tr.appendChild(tdItem);
    tdItem.textContent = parcedArray[i].product;
    deletebtn.addEventListener('click', removeItemFromCart);
  }
}

function removeItemFromCart(event) {
  if (event.target.id !== null) {   
    cart.items.splice(event.target.id, 1);
    localStorage.clear();
    let cartARR = JSON.stringify(cart.items);
    localStorage.setItem('cart', cartARR);
    renderCart();
  }
  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  // TODO: Save the cart back to local storage
  // TODO: Re-draw the cart table
}
// This will initialize the page and draw the cart on screen
renderCart();