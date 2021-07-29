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
  let tableBody = document.getElementsByTagName ('tbody');
  
  tableBody.textContent = ' ';

}


// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {
  

  // TODO: Find the table body
  
  // TODO: Iterate over the items in the cart
  for (let i = 0; i < cart.items.length; i++) {
    let tableBody = document.getElementsByTagName ('tbody');
    let tr=document.createElement("tr");
    tableBody.appendChild(tr);
    
    let tdQuantity=document.createElement("td");
   tr.appendChild(tdQuantity);

    let tdItem=document.createElement("td");
   tr.appendChild(tdItem);

    let tdLinks=document.createElement("td");
   tr.appendChild(tdLinks);

    tdLinks.addEventListener('click', removeItemFromCart);
   tdQuantity.textContent=cart.items[i].quantity;
   tdItem.textContent=cart.items[i].name;
  
  }
  // TODO: Create a TR
  // TODO: Create a TD for the delete link, quantity,  and the item
  // TODO: Add the TR to the TBODY and each of the TD's to the TR

}

function removeItemFromCart(event) {
  event.preventDefault();

  

  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  cart.removeItem(parseInt(event.target.item))
  // TODO: Save the cart back to local storage
  cart.saveToLocalStorage()
  // TODO: Re-draw the cart table
  clearCart();
  renderCart();
}

// This will initialize the page and draw the cart on screen
renderCart();
