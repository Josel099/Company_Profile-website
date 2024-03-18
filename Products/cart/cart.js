// triggering product fetch when the page is loads
cartFetchCalled = false;
window.addEventListener("load", function () {
  if (!cartFetchCalled) {
    cartProductFetch();
    displayProductCount(); // calling function for display the count of the product in the cart icon area
    cartFetchCalled = true;
  }
});


// function for fetch the data from the local storage and make the card for each product
function cartProductFetch() {
  let cartData = localStorage.getItem("cartData");
  let  totalAmount =0; // variable for finding total amount in the cart products

  const container = document.getElementById("product-container"); // container element which is for  creating the cards in it.
  container.innerHTML = ""; // clear the container

  // check data exists
  if (cartData)
  {

  cartData = JSON.parse(cartData); // data in  local storage parsed to object

  let productsId = Object.keys(cartData); // taking product id from cartData

  // dispalying each product in cart page by their product id
 productsId.forEach((productId) => {
    fetch(`http://fakestoreapi.com/products/${productId}`)
      .then((res) => res.json())
      .then((data) => {
        // Display product details in the cart page usig a card
        card = displayCard(data);
        container.appendChild(card);

        // finding the totalAmount of cart products to display in the total amount session
        totalAmount = totalAmount + data.price;
        document.getElementById("total-amount").innerHTML =
          "Total Amount: $" + totalAmount.toFixed(2); // toFixed(2) is used to display 2 decimal places
      });
  });
  }

}



// function for display the product details in the cart page
function displayCard(product) {
  // const container = document.getElementById("product-container");
  // container.innerHTML = ""; // clear the container

  // looping through the each data in the data array
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


  // Creating  button for remove item from the  cart
   const button = document.createElement("button");
   button.classList.add("btn", "btn-secondary");
   button.textContent = "Remove Item";
    button.onclick = function () {
    removeProduct(product.id);
  };

  // appending  elements to the card-body
  cardBody.appendChild(title);
  cardBody.appendChild(price);
  cardBody.appendChild(button);

  // appending elements to the card
  card.appendChild(img);
  card.appendChild(cardBody);
  return card;
  // container.appendChild(card); // appending card to the container
}




// funtion for displaying product count in the cart icon area 
function displayProductCount(){

  // Retrieve existing cart data from local storage
  let cartData = localStorage.getItem("cartData");

  //checking the cartData is exists or not
  if(!cartData) document.getElementById("product-count-text").innerHTML = 0;
  else{
    // Parse the existing cart data from JSON
    cartData = JSON.parse(cartData);

    let allProdcutCount = Object.values(cartData); // getting the all product count Values from the cartData
    let sumOfProductCount = allProdcutCount.reduce(
      (accumulator, current) => accumulator + current,0); // finding sum of all product count using reduce method

    document.getElementById("product-count-text").innerHTML = sumOfProductCount; // setting the sum of the product count to the productCount element
  }}



  //function for removing item from the cart
  function removeProduct(productId){
    let cartData = JSON.parse(localStorage.getItem("cartData"));
    delete cartData[productId];
    
    // Convert the updated cart data to JSON and store it in local storage
    cartData = JSON.stringify(cartData);
    localStorage.setItem("cartData", cartData);

   
    //recalling the product fetch for  showing  the updated content 
    cartProductFetch();
    //calling displayproductcount function for showing the updated productcount 
    displayProductCount();
  }







  // place order  and clear cart operations 
function clearCart(flag){
   let cartData = localStorage.getItem("cartData");
   if(cartData){
     localStorage.clear();
     if (flag == 1) alert("Order is Placed");
     else alert("cleared the Cart");
   }
  location.reload();
}

