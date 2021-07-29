/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
const table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
let cart;

// function loadCart() {
//   const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
//   cart = new Cart(cartItems);
// }

// // Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
// function renderCart() {
//   loadCart();
//   clearCart();
//   showCart();
// }

// // TODO: Remove all of the rows (tr) in the cart table (tbody)
// function clearCart() {
// localStorage.removeItem('cart')
// $("#table_of_items tr").remove(); 
// }

// // TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
// function showCart() {

//   // TODO: Find the table body
  
//   let tBody= document.getElementsByTagName('tbody');
//   console.log(tBody)
  

//   // TODO: Iterate over the items in the cart
//   for (let i = 0; i < cart.length; i++) {
//     console.log(cart.length,'hi')
//     let tableRowElement =document.createElement('tr')
//     console.log(tableRowElement)
//     tBody[i].appendChild(tableRowElement);
//     console.log(tBody)
//      let dataElement1=document.createElement('td')
//      tableRowElement.appendChild(dataElement1)
//      dataElement1.textContent=(`delete link`)
//      let dataElement2=document.createElement('td')
//      tableRowElement.appendChild(dataElement2)
//      dataElement2.textContent=(`quantity`)
//      let dataElement3=document.createElement('td')
//      tableRowElement.appendChild(dataElement3)
//      dataElement3.textContent=(`item `)

//      console.log(tBody[i])

  
    
//   }
//   // TODO: Create a TR
//   // TODO: Create a TD for the delete link, quantity,  and the item
//   // TODO: Add the TR to the TBODY and each of the TD's to the TR

// }

// function removeItemFromCart(event) {
//   let deletedItem=event.target.textContent
//  if (deletedItem==='delete link'){
//    cart.removeItem()
//    console.log(cart.removeItem())
// //    )
//    console.log(event.target.textContent)
//  }

//   // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
//   // TODO: Save the cart back to local storage
//   // TODO: Re-draw the cart table

// }

// // This will initialize the page and draw the cart on screen
// renderCart();
