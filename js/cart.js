/* global Cart */
'use strict';
// tbody=getElementById('tbody');//mr
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
  // tr.splice(0, tr.length);
  tbody.innerHTML=''; //me
  table.innerHTML='';
}
let section=getElementById('deck col-1');
let tbody=document.createElement('tbody')
section.appendChild(tbody)
// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {




let tableTbody=document.createElement('table');//me
tbody.appendChild(tableTbody);



  // TODO: Find the table body
for (let i = 0; i < Product.allProducts.length; i++) { //me



 let trElement=document.createElement('tr');
tableTbody.appendChild(trElement);


tdElement=document.createElement('td');
trElement.appendChild(tdElement);

tdElement.textContent= Product.allProducts[i];
tdElement.textContent=this.quantity[i];
tdElement.textContent=this.item[i];




}
  // TODO: Iterate over the items in the cart
  // TODO: Create a TR
  // TODO: Create a TD for the delete link, quantity,  and the item
  // TODO: Add the TR to the TBODY and each of the TD's to the TR

}

function removeItemFromCart(event) {

  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  // this.items.pop();//me or 
  this.items.splice(item.id);
  // TODO: Save the cart back to local storage
  localStorage.setItem('cart',JSON.stringify(this.items))//me
  // TODO: Re-draw the cart table
  showCart()//me

}

// This will initialize the page and draw the cart on screen
renderCart();
