/* global Cart */
"use strict";
function allStorage() {
  var values = [],
    keys = Object.keys(localStorage),
    i = keys.length;

  while (i--) {
    values.push(JSON.parse(localStorage.getItem(keys[i])));
  }

  console.log(values);
  return values;
}

let cartItems = allStorage();
console.log(cartItems[0].name);

// let parsedStorage =JSON.parse(localStorage.getItem);
// console.log(parsedStorage);
// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
const table = document.getElementById("cart");

function loadCart() {
  let tbody = document.getElementsByTagName("tbody")[0];
  tbody.textContent = " ";

  for (let i = 0; i < cartItems.length; i++) {
    let tr = document.createElement("tr");
    tbody.appendChild(tr);
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");
    let button = document.createElement("button");
    button.setAttribute("value", cartItems[i].name);
    button.addEventListener("click", removeItem);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    td1.appendChild(button);
    button.textContent = "X";
    td2.textContent = cartItems[i].qty;
    td3.textContent = cartItems[i].name;
  }
}
loadCart();

function removeItem() {
  localStorage.removeItem(this.value);
  cartItems = allStorage();
  loadCart();
}

// table.addEventListener("click", removeItemFromCart);
// let cart;

// function loadCart() {
//   const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
//   cart = new Cart(cartItems);
// }

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
// function renderCart() {
//   loadCart();
//   clearCart();
//   showCart();
// }

// TODO: Remove all of the rows (tr) in the cart table (tbody)
// function clearCart() {}

// // TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
// function showCart() {
//   // TODO: Find the table body
//   // TODO: Iterate over the items in the cart
//   // TODO: Create a TR
//   // TODO: Create a TD for the delete link, quantity,  and the item
//   // TODO: Add the TR to the TBODY and each of the TD's to the TR
// }

// function removeItemFromCart(event) {
//   // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
//   // TODO: Save the cart back to local storage
//   // TODO: Re-draw the cart table
// }

// This will initialize the page and draw the cart on screen
// renderCart();
