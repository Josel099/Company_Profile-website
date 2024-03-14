



  window.addEventListener("load", function () {
    // Call your function here
    productFetch();
  });




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
function productFetch() {
  fetch("http://fakestoreapi.com/products/category/electronics/?limit=15")
    .then((res) => res.json())
    .then((data) => {
      const productName = data[0].title; // Access the title of the first product in the array
      const price = data[0].price;
      const rating = data[0].rating;
      const imgLink = data[0].image;

      // Set the inner HTML of the "single-card" element
      document.getElementById("single-card").innerHTML = `
      <img class="card-img-top" src="${imgLink}" alt="image of the product">
      <h4 class="card-title">${productName}</h4>
      <h5>Price:${price}$</h5>
      <button href="#" class="btn btn-primary">Add to Cart</button>`;
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
}







  fetch("data.json")
    .then((response) => response.json()) // Parse JSON data
    .then((data) => {
      // Extract information
      const name = data.name;
      const age = data.age;
      const email = data.email;
      const city = data.address.city;
      const country = data.address.country;

      // Update HTML elements with extracted data
      document.getElementById("userInfo").innerHTML = `
      <p>Name: ${name}</p>
      <p>Age: ${age}</p>
      <p>Email: ${email}</p>
      <p>Address: ${city}, ${country}</p>
    `;
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });