

// * I have used CSS code from SajaAbabneh's Repo.
// * I also used some JS codes and tried to modify them.





/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
let table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
let cart;

function loadCart() {
  let cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  cart = new Cart(cartItems);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
  updateStorage();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {document.getElementsByTagName('tr').innerHTML='';}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {
  let tbody=document.getElementsByTagName('tbody')
  for(let index =0 ;index < cart.items.length;index++){
    let tr = document.createElement('tr');
    tr.setAttribute('id', i);
    tbody.appendChild(tr);

    
    let linkTd= document.createElement('td');
    tr.appendChild(linkTd);
    linkTd.textContent='X';

  
    let quantityTd = document.createElement('td');
   tr.appendChild(quantityTd);
   quantityTd.textContent = cart.items[i].quantity;

  let itemTd = document.createElement('td');
  tr.appendChild(itemTd);
   itemTd.textContent = cart.items[i].product;
  }
  // TODO: Find the table body

  // TODO: Iterate over the items in the cart
  // TODO: Create a TR
  // TODO: Create a TD for the delete link, quantity,  and the item
  // TODO: Add the TR to the TBODY and each of the TD's to the TR

}

function removeItemFromCart(event) {

  if (event.target.textContent === 'X') {
    cart.removeItem(event.target.id);
    localStorage.setItem('cart', JSON.stringify(cart.items));
    renderCart();
  }
  renderCart();
  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  // TODO: Save the cart back to local storage
  // TODO: Re-draw the cart table

}

// This will initialize the page and draw the cart on screen







