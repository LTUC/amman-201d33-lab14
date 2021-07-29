/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
const table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
let cart;



console.log(Product.allProducts);
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
  let trElemant = document.createElement('tr');
  table.appendChild(trElemant);
  trElemant.textContent = '';

}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {

  // TODO: Find the table body
  let item = document.getElementById('item');
  let Remove = document.getElementById('Remove');
  let Quantity = document.getElementById('Quantity');
  // TODO: Iterate over the items in the cart
  for (let i = 0; i < cart.items.length; i++) {
    // Emad Al-zoubi help me with how i can call spasefic item form the object
    let trElemantForDeletLink=document.createElement('tr');
    Remove.appendChild(trElemantForDeletLink);
    let tdElemantForRemoveLinke = document.createElement('td');
    trElemantForDeletLink.appendChild(tdElemantForRemoveLinke);
    let btn = document.createElement("button");
    btn.className = "removebtn";
    btn.innerHTML = "removeItem";
    tdElemantForRemoveLinke.appendChild(btn);
    let trElemantForQuntity= document.createElement('tr');
    Quantity.appendChild(trElemantForQuntity);
    let tdElemantForQuntity=document.createElement('td');
    trElemantForQuntity.appendChild(tdElemantForQuntity);
    tdElemantForQuntity.textContent = cart.items[i].quntity;
    let trElemantForProdact=document.createElement('tr');
    item.appendChild(trElemantForProdact);
    let tdElemantForProdact=document.createElement('td');
    trElemantForProdact.appendChild(tdElemantForProdact);
    tdElemantForProdact.textContent = cart.items[i].name;

}
// let index;
function removeItemFromCart(event) {
  if (!event.target.claaslist.contains("removebtn")) {
    return;

  }
  const btn = event.target;
  btn.closset('tr').remove();


  // for (let i = 0; i < table.rows.length; i++) {
  //   table.rows[i].cells[i].onclick = function(){ 
  //     index=this.perantElemant.rowIndex;
  //     table.deleteRow(index);
  //   };

  // }



  // table.deleteRow(rindex);

  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  // TODO: Save the cart back to local storage
  // TODO: Re-draw  the cart table

}

// This will initialize the page and draw the cart on screen
renderCart();
