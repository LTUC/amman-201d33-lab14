/* global Cart */
"use strict";

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
const table = document.getElementById("cart");
table.addEventListener("click", removeItemFromCart);
let cart;

function loadCart() {
  const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
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
  // *! idont think this is the right but i tried it it works but if i want to remove a spefic elment inside the tr i guess i have to loop over them
  let table = document.getElementById("cart").childNodes[1];
  table.textContent = "";
}
// this function to get the counter on the chart
function updateCounter() {
  let count = localStorage.getItem("Count");
  let countSpan = document.getElementById("itemCount");
  countSpan.textContent = `${count}`;
  console.log(count);
}
updateCounter();
// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {
  // TODO: Find the table body
  let table = document.getElementById("cart").childNodes[1];
  let tableRow = document.createElement("tr");
  let tableData = document.createElement("td");
  // TODO: Iterate over the items in the cart
  for (let i = 0; i < cart.items.length; i++) {
    // TODO: Create a TR
    table.appendChild(tableRow);
    tableRow.appendChild(tableData);
    // TODO: Create a TD for the delete link, quantity,  and the item
  }
  // TODO: Add the TR to the TBODY and each of the TD's to the TR
}

function removeItemFromCart(event) {
  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  // TODO: Save the cart back to local storage
  // TODO: Re-draw the cart table
}

// This will initialize the page and draw the cart on screen
renderCart();
