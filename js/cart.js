/* global Cart */
'use strict';
// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
const table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
let cart;
let newarr = [];
let cartlength = 0;
function loadCart() {
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];


  cartlength = cartItems.length;
  console.log(cartlength);
  cart = new Cart(cartItems);
  
 // newarr = cartItems;
 // console.log(newarr[1]);
}
// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
  
}
// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {


}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {


  // TODO: Find the table body
  var BodyElement = document.getElementsByTagName('tbody');
  // TODO: Iterate over the items in the cart
  // TODO: Create a TR
  for (let i = 0; i < cart.items.length; i++) {
    var trElement = document.createElement('tr');
    table.appendChild(trElement);
    // TODO: Create a TD for the delete link, quantity,  and the item
    // TODO: Add the TR to the TBODY and each of the TD's to the TR
    var tddelete = document.createElement('td');
    var tdquantity = document.createElement('td');
    var tditem = document.createElement('td');
    //textcontent
    tddelete.textContent = 'X';
    tdquantity.textContent = cart.items[i].quantity;
    tditem.textContent = cart.items[i].product;
    //append
    trElement.appendChild(tddelete);
    trElement.appendChild(tdquantity);
    trElement.appendChild(tditem);
  }
}

function removeItemFromCart(event) {
 


  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  // TODO: Save the cart back to local storage
  // TODO: Re-draw the cart table

}
// This will initialize the page and draw the cart on screen
renderCart();
