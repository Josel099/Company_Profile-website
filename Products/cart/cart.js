// triggering product fetch when the page is loads
let cartFetchCalled = false;

window.addEventListener("load", function () {
  if (!cartFetchCalled) {
    cartProductFetch();
    cartFetchCalled = true;
  }
});

function cartProductFetch() {
let cartData = localStorage.getItem("cartData");
// check data exists 
if(cartData) 
cartData = JSON.parse(cartData) // string in local storage parsed to object 

let productsId = Object.keys(cartData);// taking product id from cartData 

// dispalying each product in 
productsId.forEach(productId => {
            fetch(`http://fakestoreapi.com/products/${productId}`)
              .then((response) => response.json())
              .then((product) => {
                console.log(product);
                // Display product details in the cart page
         


                
              });
})
}

