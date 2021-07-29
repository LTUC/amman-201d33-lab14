/* global Product, Cart */

'use strict';

// Set up an empty cart for use on this page.
const cart = new Cart([]);

// On screen load, we call this method to put all of the busmall options
// (the things in the Product.allProducts array) into the drop down list.
function populateForm() {

  //TODO: Add an <option> tag inside the form's select for each product
  const selectElement = document.getElementById('items');
  // console.log(selectElement);
  let ItemList=document.createElement('option');
selectElement.appendChild(ItemList)
ItemList.textContent="Select Item";
  for (let i in Product.allProducts) {
 ItemList=document.createElement('option');
selectElement.appendChild(ItemList)
ItemList.textContent=Product.allProducts[i].name;
// console.log(ItemList);
  }
  
}
// console.log(localStorage);
// When someone submits the form, we need to add the selected item to the cart
// object, save the whole thing back to local storage and update the screen
// so that it shows the # of items in the cart and a quick preview of the cart itself.
const catalogForm = document.getElementById('catalog');
catalogForm.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  // TODO: Prevent the page from reloading

  // Do all the things ...
  addSelectedItemToCart();
  cart.saveToLocalStorage();
  updateCounter();
  updateCartPreview();

}


// TODO: Add the selected item and quantity to the cart
function addSelectedItemToCart() {
  
  // TODO: suss out the item picked from the select list
  let itemFromDropList=document.querySelector('#items').value;
  
 
  

  // TODO: get the quantity
  let numberFromForm=document.querySelector('#quantity').value;
  
 
  // TODO: using those, add one item to the Cart
  // console.log(itemFromDropList);
  // console.log(numberFromForm);
  
  cart.items.push({name : itemFromDropList ,quntity : numberFromForm });
  // cart.push(array);

// console.log(cart.items);
// console.log(Product.allProducts);

}


let Counter=0;
// TODO: Update the cart count in the header nav with the number of items in the Cart
function updateCounter() {

for (let i = 0; i < cart.items.length; i++) {
  Counter++;
  
}

document.getElementById('cou');
// document.getElementsByTagName('nav');
cou.textContent=`you have ${Counter} of Item`;

}

// TODO: As you add items into the cart, show them (item & quantity) in the cart preview div
function updateCartPreview() {//idid that 
  // TODO: Get the item and quantity from the form
  
   
  // TODO: Add a new element to the cartContents div with that information
   
}

// Set up the "submit" event listener on the form.

// This is the trigger for the app. When a user "submits" the form, it will
// Call that handleSubmit method above and kick off the whole process


// Before anything else of value can happen, we need to fill in the select
// drop down list in the form.
populateForm();
