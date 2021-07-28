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
  // TODO: Iterate over the items in the cart
  // TODO: Create a TR
  // TODO: Create a TD for the delete link, quantity,  and the item
  // TODO: Add the TR to the TBODY and each of the TD's to the TR
  let data = localStorage.getItem('cart');
  let parsedArr = JSON.parse(data);
  for (let i = 0; i < parsedArr.length; i++) {
    let tRow = document.createElement('tr');
    tbody.appendChild(tRow);
    let tDataDelete = document.createElement('td');
    tRow.appendChild(tDataDelete);


    let deleteButton = document.createElement('button');
    deleteButton.textContent = 'X';
    deleteButton.id = i;

    // tDataDelete.textContent = document.createElement('button')
    tDataDelete.appendChild(deleteButton);

    let tDataQuant = document.createElement('td');
    tRow.appendChild(tDataQuant);
    tDataQuant.textContent = parsedArr[i].quantity;
    let tDataItem = document.createElement('td');
    tRow.appendChild(tDataItem);
    tDataItem.textContent = parsedArr[i].product;

    // console.log(deleteButton.id);
    deleteButton.addEventListener('click', removeItemFromCart);
  }
}

function removeItemFromCart(event) {
  let data = localStorage.getItem('cart');
  let parsedArr = JSON.parse(data);
  if (event.target.id !== null) {
    console.log(event.target.id);
    // let data = localStorage.getItem('cart');
    // let parsedArr = JSON.parse(data);
    console.log('before',cart.items.length)
    // console.log(cart.items[event.target.id]);
    cart.items.splice(event.target.id, 1);
    console.log('after',cart.items.length);
    console.log(parsedArr.length);
    localStorage.clear();
    let stringArr = JSON.stringify(cart.items);
    localStorage.setItem('cart', stringArr);
    renderCart();

  }

  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  // TODO: Save the cart back to local storage
  // TODO: Re-draw the cart table

}

// This will initialize the page and draw the cart on screen
renderCart();

let 