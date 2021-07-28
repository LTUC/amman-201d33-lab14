/* global Product, Cart */

'use strict';

// Set up an empty cart for use on this page.
const cart = new Cart([]);

// On screen load, we call this method to put all of the busmall options
// (the things in the Product.allProducts array) into the drop down list.
function populateForm() {

  //TODO: Add an <option> tag inside the form's select for each product
  let form=getElementById('catalog');

  const selectElement = document.getElementById('items');
  for (let i in Product.allProducts) {
   let option = document.createElement('option');
   form.appendChild(option);
   option.textContent=Product.allProducts[i]
  }

}

// When someone submits the form, we need to add the selected item to the cart
// object, save the whole thing back to local storage and update the screen
// so that it shows the # of items in the cart and a quick preview of the cart itself.
function handleSubmit(event) {

  // TODO: Prevent the page from reloading
  event.preventDefault(); //me
  // Do all the things ...
  addSelectedItemToCart();
  cart.saveToLocalStorage();
  updateCounter();
  updateCartPreview();

}

// TODO: Add the selected item and quantity to the cart
function addSelectedItemToCart() {
  localStorage.setItem('cart',JSON.stringify(this.items),JSON.stringify(this.quantity))
  // TODO: suss out the item picked from the select list
  // TODO: get the quantity
  let Stoarge =localStorage.getItem('cart',this.quantity)
  let stogeAll=localStorage.getItem('cart')
  // TODO: using those, add one item to the Cart
  if(stogeAll !== null){
for (let i = 0; i < stogeAll.length; i++) {
  const element = array[i];
 new Cart=(stogeAll[i].items,stogeAll[i].quantity); 
}
  }
}

// TODO: Update the cart count in the header nav with the number of items in the Cart
function updateCounter() {

let ulElemant=document.createElement('ul');
nav.appendChild(ulElemant);


  for (let i = 0; i <= this.items.length; i++) {
   let liElement=document.createElement('li');
   ulElemant.appendChild(liElement)
   liElement.textContent=`the numeber ${i++} the item ${this.items}, the quantity ${this.quantity}`

  }
}
  // TODO: As you add items into the cart, show them (item & quantity) in the cart preview div
function updateCartPreview() {
  // TODO: Get the item and quantity from the form
  // TODO: Add a new element to the cartContents div with that information
  div=getElementById('cart')
  let ulElemant=document.createElement('ul');
  div.appendChild(ulElemant);


  for (let i = 0; i <= this.items.length; i++) {
   let liElement=document.createElement('li');
   ulElemant.appendChild(liElement)
   liElement.textContent=`the numeber ${i++} the item ${this.items}, the quantity ${this.quantity}`
   let alink=document.createElement('a');
   liElement.appendChild(alink)
   alink.textContent=`${src='https'+items+'.com'}` 
}
}
// Set up the "submit" event listener on the form.

// This is the trigger for the app. When a user "submits" the form, it will
// Call that handleSubmit method above and kick off the whole process
const catalogForm = document.getElementById('catalog');
catalogForm.addEventListener('submit', handleSubmit);

// Before anything else of value can happen, we need to fill in the select
// drop down list in the form.
populateForm();
