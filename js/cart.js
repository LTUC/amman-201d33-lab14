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
function clearCart() 
{
  let trClear=document.createElement('tr')
  table.appendChild(trClear)
  trClear.textContent=''
}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {

  // TODO: Find the table body
  let tbody=document.getElementsByTagName('tbody')[0]
  table.appendChild(tbody)
  tbody.textContent=''

  for(let i=0;i<Cart.length;i++)
  {
  let tr=document.createElement('tr')
  tbody.appendChild(tr)

  let td1=document.createElement('td')
  tr.appendChild(td1)

  let td2=document.createElement('td')
  tr.appendChild(td2)

  let td3=document.createElement('td')
  tr.appendChild(td3)

    td1.textContent='X'
    td2.textContent= quantity
    td3.textContent= items
  
  }


  // TODO: Iterate over the items in the cart
  // TODO: Create a TR
  // TODO: Create a TD for the delete link, quantity,  and the item
  // TODO: Add the TR to the TBODY and each of the TD's to the TR

}
loadCart()

function removeItemFromCart(event) 
{
  localStorage.removeItem(this.value)
  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  // TODO: Save the cart back to local storage
  // TODO: Re-draw the cart table
  loadCart()
}

// This will initialize the page and draw the cart on screen
renderCart();
