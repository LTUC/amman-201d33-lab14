
// * I have used CSS code from SajaAbabneh's Repo.
// * I also used some JS codes and tried to modify them.






/* global Product, Cart */

'use strict';
// Set up an empty cart for use on this page.
const cart = new Cart([]);
loadCart();

function loadCart() {
  for (let i = 0; i < localStorage.length; i++) {
    let data = localStorage.getItem('cart');
    let parsedArray = JSON.parse(data);
    if (parsedArray !== null) {
      cart.items = parsedArray;
    }
  }
}



// On screen load, we call this method to put all of the busmall options
// (the things in the Product.allProducts array) into the drop down list.
function populateForm() {
  const selectElement = document.getElementById('items');
  for (let i in Product.allProducts) {
    let option = document.createElement('option');
    option.textContent = Product.allProducts[i].name;
    option.id = i;   
    selectElement.appendChild(option);
  }  
}

// When someone submits the form, we need to add the selected item to the cart
// object, save the whole thing back to local storage and update the screen
// so that it shows the # of items in the cart and a quick preview of the cart itself.
function handleSubmit(event) {
  event.preventDefault(); 
  addSelectedItemToCart();
  cart.saveToLocalStorage();
  updateCounter();
  updateCartPreview();
}

// TODO: Add the selected item and quantity to the cart
function addSelectedItemToCart() {

  let quantityTextbox = document.getElementById('quantity').value;
  let ddlProducts = document.getElementById("items");
  let selectedOption = ddlProducts.value; 
  cart.addItem(selectedOption, quantityTextbox);
  
}

// TODO: Update the cart count in the header nav with the number of items in the Cart
let counter = document.getElementById('itemCount');
function updateCounter() {
  counter.textContent = "";
  let data = localStorage.getItem('cart');
  let parsedArray = JSON.parse(data);
  counter.textContent = parsedArray.length;  
}

// TODO: As you add items into the cart, show them (item & quantity) in the cart preview div
function updateCartPreview() {
  // TODO: Get the item and quantity from the form
  // TODO: Add a new element to the cartContents div with that information
  let data = localStorage.getItem('cart');
  let parsedArray = JSON.parse(data);
  let list = document.getElementById('listContents')
  list.textContent = "";  
  let ddlProducts = document.getElementById("items");
  for (let i = 0; i < parsedArray.length; i++) {
    let listElement = document.createElement('li');
    list.appendChild(listElement);
    listElement.textContent = `Selected item: ${parsedArray[i].product} with a quantity of: ${parsedArray[i].quantity}`;

    let idIMG = ddlProducts.options[ddlProducts.selectedIndex].id;
    let img = document.createElement('img');
    listElement.appendChild(img);    
    img.src = Product.allProducts[idIMG].filePath;;
    img.width = 100;
    img.height = 100;
    //NOT FINISHED
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

// console.log(Product.allProducts);