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

// abedalraheem i saw similar way in stackoverflow link below 
// https://stackoverflow.com/questions/7271490/delete-all-rows-in-an-html-table
function clearCart() {

  let cartable = document.getElementById('Catalog');
let tablesrows = cartable.getElementsByTagName('tr');
let rowNo = tablesrows.length;

for (let removerow= rowNo-1; removerow>0; rowNo--) {
   cartable.removeChild(tablesrows[rowNo]);
}
}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {

  // TODO: Find the table body 

  //abedalraheem : i think its legened in the html ! 

  let table = document.createElement("legend");
  let thehead = document.createElement("items ");
  for (var i = 0; i < 19; i++) //our items are 19 items 
  for (var k = 0; k < 3; k++) //since we will have 4 button ( add ,delete , submit ) {

 
  // TODO: Iterate over the items in the cart
  
  // TODO: Create a TR
  //abedalraheem 
  let row=document.createElement("tr");
  // TODO: Create a TD for the delete link, quantity,  and the item



  // TODO: Add the TR to the TBODY and each of the TD's to the TR
    //abedalraheem 

  let  cells = document.createElement("td");
  let text = document.textContent("row "+i+", column "+k);
}

function removeItemFromCart(event) {

  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  // TODO: Save the cart back to local storage
  // TODO: Re-draw the cart table

  
  //abedalraheem 

  function localStorageal()
  localStorage.removeItem('item');


localStorage.clear();

}

// This will initialize the page and draw the cart on screen
renderCart();
