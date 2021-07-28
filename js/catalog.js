/* global Product, Cart */

'use strict';

// Set up an empty cart for use on this page.
const cart = new Cart(getCartData());

// On screen load, we call this method to put all of the busmall options
// (the things in the Product.allProducts array) into the drop down list.
function populateForm() {

  //TODO: Add an <option> tag inside the form's select for each product
  const selectElement = document.getElementById('items');
  let option;


  for (let i = 0; i < Product.allProducts.length; i++) {
    option = document.createElement('option')
    selectElement.appendChild(option)
    option.textContent = Product.allProducts[i].name
  }

}
populateForm() 
// When someone submits the form, we need to add the selected item to the cart
// object, save the whole thing back to local storage and update the screen
// so that it shows the # of items in the cart and a quick preview of the cart itself.
function handleSubmit(event) {
  event.preventDefault();
  // TODO: Prevent the page from reloading

  // Do all the things ...
  addSelectedItemToCart();
  // cart.saveToLocalStorage();
  updateCounter();
  updateCartPreview();


}


// TODO: Add the selected item and quantity to the cart
function addSelectedItemToCart() {

  // TODO: suss out the item picked from the select list
  // TODO: get the quantity
  // TODO: using those, add one item to the Cart
  let product = document.getElementById('items').value;
  let item = parseInt(document.getElementById('quantity').value);
  cart.addItem(product, item)

  document.getElementById('quantity').value = '';
  document.getElementById('items').value = '';

}

// TODO: Update the cart count in the header nav with the number of items in the Cart

let parsecount;
function updateCounter() {
  
  const itemCount = document.getElementById('itemCount')
  //  console.log(countcart);

  parsecount = getCartData()

console.log(parsecount);
  itemCount.textContent = ` Number of items is ${parsecount.length}`
  // localStorage.setItem('count', parsecount.length)

}

// TODO: As you add items into the cart, show them (item & quantity) in the cart preview div

let itemscount = document.getElementById('cartContents')
let pelement = document.createElement('p')

function updateCartPreview() {
  // TODO: Get the item and quantity from the form
  // TODO: Add a new element to the cartContents div with that information
  itemscount.appendChild(pelement)
  let quantityarr = [];
  
  //  console.log(countcart);
  let sumarr = 0;
  parsecount = getCartData()
  for (let i = 0; i < parsecount.length; i++) {
    quantityarr.push(parsecount[i].quantity)
    sumarr += quantityarr[i]
  }
  console.log(itemscount);
  pelement.textContent = `Number of items is ${parsecount.length} and the total quantity ${sumarr}`

  // localStorage.setItem('quantitycount', sumarr)

}

// Set up the "submit" event listener on the form.
// This is the trigger for the app. When a user "submits" the form, it will
// Call that handleSubmit method above and kick off the whole process
const catalogForm = document.getElementById('catalog');
catalogForm.addEventListener('submit', handleSubmit);

// Before anything else of value can happen, we need to fill in the select
// drop down list in the form.
populateForm();

updateCounter()
updateCartPreview()