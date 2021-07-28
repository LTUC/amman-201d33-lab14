/* global Product, Cart */

"use strict";

// Set up an empty cart for use on this page.
const cart = new Cart([]);

// On screen load, we call this method to put all of the busmall options
// (the things in the Product.allProducts array) into the drop down list.

function populateForm() {
  //TODO: Add an <option> tag inside the form's select for each product
  let label = document.getElementsByTagName("label")[0];
  label.setAttribute("for", "nameInput");
  label.setAttribute("onclick", "click()");

  const selectElement = document.getElementById("items");
  // Put select inside of a div
  var parent = selectElement.parentNode;
  var wrapper = document.createElement("div");
  // set the wrapper as child (instead of the element)
  parent.replaceChild(wrapper, selectElement);
  // set element as child of wrapper
  wrapper.appendChild(selectElement);
  wrapper.setAttribute("class", "custom-selectt");
  wrapper.setAttribute("style", "width:200px;");

  let option = document.createElement("option");
  selectElement.appendChild(option);
  option.setAttribute("value", "0");
  option.textContent = "Select Item:";

  for (let i = 0; i < Product.allProducts.length; i++) {
    let option = document.createElement("option");
    selectElement.appendChild(option);
    option.setAttribute("value", i + 1);
    option.textContent = Product.allProducts[i].name;
    //console.log(Product.allProducts[i].name);
  }
}

populateForm();



let form = document.getElementById("catalog");
form.addEventListener("submit", handleSubmit); 

let itemPicked;


function handleSubmit(event) {
  // TODO: Prevent the page from reloading
  event.preventDefault();
  // Do all the things ...
  
  console.log(event.target.items.value);
  let itemselected = document.getElementById("items").value;
  console.log(Product.allProducts);
  if (itemselected !== 0) {
   itemPicked = Product.allProducts[itemselected-1];
    console.log('selected 1',itemPicked);
  }
  let qty = event.target.quantity.value;
  itemPicked.qty = qty;
  console.log('selected 2',itemPicked);
  addSelectedItemToCart();
  // cart.saveToLocalStorage();
  // updateCounter();
  // updateCartPreview();
}

// TODO: Add the selected item and quantity to the cart
function addSelectedItemToCart() {
  // TODO: suss out the item picked from the select list
  // TODO: get the quantity
  // TODO: using those, add one item to the Cart
  let storedItem = JSON.stringify(itemPicked);
  console.log(storedItem);
  localStorage.setItem(itemPicked.name, storedItem);
}

// TODO: Update the cart count in the header nav with the number of items in the Cart
function updateCounter() {}

// TODO: As you add items into the cart, show them (item & quantity) in the cart preview div
function updateCartPreview() {
  // TODO: Get the item and quantity from the form
  // TODO: Add a new element to the cartContents div with that information
}

// Set up the "submit" event listener on the form.
// This is the trigger for the app. When a user "submits" the form, it will
// Call that handleSubmit method above and kick off the whole process


// Before anything else of value can happen, we need to fill in the select
// drop down list in the form.

