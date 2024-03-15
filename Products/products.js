// window.addEventListener("load", function () {
//     productFetch();
//   });
// triggering product fetch when the page is loads 
let productFetchCalled = false;

window.addEventListener("load", function () {
  if (!productFetchCalled) {
    productFetch();
    productFetchCalled = true;
  }
});
// document.addEventListener("DOMContentLoaded",productFetch())


// function calling for fetch the data and make the card for each product
function productFetch() {
   fetch("http://fakestoreapi.com/products")
     .then((res) => res.json())
     .then((data) => {
       const container = document.getElementById("product-container");
       container.innerHTML = ""; // clear the container

       // looping through the each data in the data array
       data.forEach((product) => {
         const card = document.createElement("div");
         card.classList.add("card"); // adding class to the card
         card.style.width = "15rem"; // Set card width

         //create the image element
         const img = document.createElement("img");
         img.classList.add("card-img-top"); // adding class to the image
         img.src = product.image; // set the soruce link to the image
         img.alt = "Image of the product";

         // Creating  card body for product details
         const cardBody = document.createElement("div");
         cardBody.classList.add("card-body");

         // Creating card title
         const title = document.createElement("h4");
         title.classList.add("card-title");
         title.textContent = product.title; //  product name setting to card title

         const price = document.createElement("p");
         price.classList.add("card-text");
         price.textContent = "Price: $" + product.price; // product price setting to price

         // Creating  button for adding to cart
         const button = document.createElement("button");
         button.classList.add("btn", "btn-primary");
         button.textContent = "Add to Cart";
         button.onclick = function () {
           addProduct(product.id);
         };

         // appending  elements to the card-body
         cardBody.appendChild(title);
         cardBody.appendChild(price);
         cardBody.appendChild(button);

         // appending elements to the card
         card.appendChild(img);
         card.appendChild(cardBody);

         container.appendChild(card); // appending card to the container
       });
     })
     .catch((error) => {
       console.error("Error fetching data:", error);
     });
}




/** 
 * ============================================
use to add products to cart , 
adding the id of the each product to an
key value pair object .
===============================================
*/
function addProduct(productId) {
    // Retrieve existing cart data from local storage
    let cartData = localStorage.getItem("cartData");
    
    // If there's no existing cart data, initialize an empty object
    if (!cartData) {
        cartData = {};
    } else {
        // Parse the existing cart data from JSON
        cartData = JSON.parse(cartData);
    }
    
    // Increment the count for the given product ID
    if (cartData[productId]!= null){
      cartData[productId] = cartData[productId]+1
    }else cartData[productId] = 1;



    console.log(cartData[productId]);
    // Convert the updated cart data to JSON and store it in local storage
    cartData = JSON.stringify(cartData);
    localStorage.setItem("cartData", cartData);
    
}