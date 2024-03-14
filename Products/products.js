
window.addEventListener("load", function () {
    productFetch();
  });



// function calling for fetch the data and make the card for each product
function productFetch() {
    fetch("http://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((data) =>{
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

        // appending  elements to the card-body
        cardBody.appendChild(title);
        cardBody.appendChild(price);
        cardBody.appendChild(button);

        // appending elements to the card
        card.appendChild(img);
        card.appendChild(cardBody);
        
        container.appendChild(card); // appending card to the container

      });
    }).catch((error) => {
      console.error("Error fetching data:", error);
    });
}


// function productFetch(){

// fetch("https://fakestoreapi.com/products/category/electronics/?limit=1")
//   .then((res) => res.json())
//   .then((json) => console.log(json))
//   .then((data)=>{
//     const productName = data.title;
//     const price = data.price;
//     const rating = data.rating;
//     const imgLink = data.image;
//       document.getElementById(
//         "single-card"
//       ).innerHTML = `<h5>${productName}</h5>`;
//   })

// }
// function productFetch1() {
//   fetch("http://fakestoreapi.com/products/category/electronics/?limit=15")
//     .then((res) => res.json())
//     .then((data) => {
//       const productName = data[0].title; // Access the title of the first product in the array
//       const price = data[0].price;
//       const rating = data[0].rating;
//       const imgLink = data[0].image;

//       // Set the inner HTML of the "single-card" element
//       document.getElementById("single-card").innerHTML = `
//       <img class="card-img-top" src="${imgLink}" alt="image of the product">
//       <h4 class="card-title">${productName}</h4>
//       <h5>Price:${price}$</h5>
//       <button href="#" class="btn btn-primary">Add to Cart</button>`;
//     })
//     .catch((error) => {
//       console.error("Error fetching data:", error);
//     });
// }










//   fetch("data.json")
//     .then((response) => response.json()) // Parse JSON data
//     .then((data) => {
//       // Extract information
//       const name = data.name;
//       const age = data.age;
//       const email = data.email;
//       const city = data.address.city;
//       const country = data.address.country;

//       // Update HTML elements with extracted data
//       document.getElementById("userInfo").innerHTML = `
//       <p>Name: ${name}</p>
//       <p>Age: ${age}</p>
//       <p>Email: ${email}</p>
//       <p>Address: ${city}, ${country}</p>
//     `;
//     })
//     .catch((error) => {
//       console.error("Error fetching data:", error);
//     });