//GLOBALS
const productsContainer = document.getElementById("product-container");
const domBody = document.body;

let allProducts = null;

//Calling functions
getCategoryData();
getProductData();

//Model Code
function getCategoryData() {
  fetch("https://dummyjson.com/products/categories?limit=0")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((json) => {
      //recivedCategoryData(json);
      console.log(json);
    })
    .catch((error) => {
      console.log("Error fetching category data:", error);
    });
}

function getProductData() {
  fetch("https://dummyjson.com/products?limit=0")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((json) => {
      //recivedProductData(json);
      console.log(json);
    })
    .catch((error) => {
      console.log("Error fetching product data:", error);
    });
}
