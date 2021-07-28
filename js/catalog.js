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
  wrapper.setAttribute("class", "custom-select");
  wrapper.setAttribute("style", "width:200px; margin: 20px auto; ");

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
  let imgParent = document.getElementsByClassName("copy")[0];
  let imgItem = document.createElement("img");
  imgItem.setAttribute("src", "assets/items.jpg");
  imgItem.setAttribute("alt", " ");
  imgItem.setAttribute("id", "img");
  imgParent.appendChild(imgItem);
}

populateForm();
let bb;
let itemPicked;
var x, i, j, l, ll, selElmnt, a, b, c;
/*look for any elements with the class "custom-select":*/
x = document.getElementsByClassName("custom-select");
l = x.length;
for (i = 0; i < l; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  ll = selElmnt.length;
  /*for each element, create a new DIV that will act as the selected item:*/
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;

  x[i].appendChild(a);
  /*for each element, create a new DIV that will contain the option list:*/
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < ll; j++) {
    /*for each option in the original select element,
    create a new DIV that will act as an option item:*/
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function (e) {
      /*when an item is clicked, update the original select box,
        and the selected item:*/
      var y, i, k, s, h, sl, yl;
      s = this.parentNode.parentNode.getElementsByTagName("select")[0];
      sl = s.length;
      h = this.parentNode.previousSibling;
      for (i = 0; i < sl; i++) {
        if (s.options[i].innerHTML == this.innerHTML) {
          s.selectedIndex = i;
          h.innerHTML = this.innerHTML;
          y = this.parentNode.getElementsByClassName("same-as-selected");
          yl = y.length;
          for (k = 0; k < yl; k++) {
            y[k].removeAttribute("class");
          }
          this.setAttribute("class", "same-as-selected");
          break;
          console.log(this.innerHTML);
        }
      }
      h.click();
      bb = selElmnt.options[selElmnt.selectedIndex].getAttribute("value");
      if (bb !== 0) {
        itemPicked = Product.allProducts[bb - 1];
        console.log(itemPicked);
        console.log(Product.allProducts[bb - 1].filePath);
        let image = document.getElementById("img");
        image.src = Product.allProducts[bb - 1].filePath;
      }
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function (e) {
    /*when the select box is clicked, close any other select boxes,
      and open/close the current select box:*/
    e.stopPropagation();
    closeAllSelect(this);
    this.nextSibling.classList.toggle("select-hide");
    this.classList.toggle("select-arrow-active");
  });
}
function closeAllSelect(elmnt) {
  /*a function that will close all select boxes in the document,
  except the current select box:*/
  var x,
    y,
    i,
    xl,
    yl,
    arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  xl = x.length;
  yl = y.length;
  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i);
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}
/*if the user clicks anywhere outside the select box,
then close all select boxes:*/
document.addEventListener("click", closeAllSelect);

console.log("bb", bb);

// When someone submits the form, we need to add the selected item to the cart
// object, save the whole thing back to local storage and update the screen
// so that it shows the # of items in the cart and a quick preview of the cart itself.
console.log(Product.allProducts[bb]);
let form = document.getElementById("catalog");
form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  // TODO: Prevent the page from reloading
  event.preventDefault();
  // Do all the things ...
  console.log(event.target.quantity.value);
  let qty = event.target.quantity.value;
  itemPicked.qty = qty;
  addSelectedItemToCart();
  let cartElement = document.getElementById("cartContents");
  let cartBtn = document.createElement("a");
  cartBtn.setAttribute("href", "cart.html");
  cartBtn.textContent = "Cart";
  cartElement.textContent = " ";
  cartElement.appendChild(cartBtn);
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
// function updateCounter() {}

// // TODO: As you add items into the cart, show them (item & quantity) in the cart preview div
// function updateCartPreview() {
//   // TODO: Get the item and quantity from the form
//   // TODO: Add a new element to the cartContents div with that information
// }

// // Set up the "submit" event listener on the form.
// // This is the trigger for the app. When a user "submits" the form, it will
// // Call that handleSubmit method above and kick off the whole process

// const catalogForm = document.getElementById("catalog");
// catalogForm.addEventListener("submit", handleSubmit);

// // Before anything else of value can happen, we need to fill in the select
// // drop down list in the form.
