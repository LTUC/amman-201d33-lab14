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

 localStorage.clear('cart' , trElement);

//  for (let y = 0; y < .length; y++) {
   
 }
// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart

let secondTh = ['remove', 'quality', 'item'];

let tdElement1;

function showCart() {
  // TODO: Find the table body
  let tbody = document.createElement('tbody');

  table.appendChild(tbody);

  let thElement = document.createElement('th');
  table.appendChild(thElement);



  // TODO: Iterate over the items in the cart
  for (let i = 0; i < cartItems.length; i++) {
    // TODO: Create a TR

    let trElement = document.createElement('tr');
    thElement.appendChild(trElement);

    for (let j = 0; j < secondTh.length; j++) {
      let secondTh = document.createElement('th')
      trElement.appendChild(secondTh);

    }

    // TODO: Create a TD for the delete link, quantity,  and the item
    tdElement1 = document.createElement('td');
    trElement.appendChild(tdElement1);

let tdElement3 =['delete link', 'quantity', 'item'];
for (let x = 0; x < tdElement3.length; x++) {

  tdElement1.textContent = tdElement3[x];
  
}

  }
  // TODO: Add the TR to the TBODY and each of the TD's to the TR
// let tbody = document.createElement('tbody');

let trElement2=document.createElement('tr');
tbody.appendChild(trElement2);

trElement2.appendChild(tdElement1);

}


function removeItemFromCart(event) {

  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  // TODO: Save the cart back to local storage
  // TODO: Re-draw the cart table

}

// This will initialize the page and draw the cart on screen
renderCart();
