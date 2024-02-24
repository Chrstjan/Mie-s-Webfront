//GLOBALS
const productsContainer = document.getElementById("product-container");
const headerContainer = document.getElementById("main-header");
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
      recivedCategoryData(json);
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
      recivedProductData(json);
    })
    .catch((error) => {
      console.log("Error fetching product data:", error);
    });
}

//Controller Code
function recivedCategoryData(categoryData) {
  console.log(categoryData);

  buildNavbar(categoryData);
}

function recivedProductData(productData) {
  console.log(productData);
}

//View Code
function buildNavbar(categoryData) {
  const mainNav = document.createElement("nav");
  mainNav.classList.add("main-nav");

  let randCategory = "";

  const topNavigation = `
    <div class="topContainer">
        <input class="search-bar" type="text" placeholder="${randCategory}" />
        <div class="icons-container">
            <span class="search-bar-icon">&#128247;</span>
            <span class="search-bar-icon">&#128269;</span>
        </div>
    </div>
    `;

  mainNav.innerHTML += topNavigation;

  headerContainer.appendChild(mainNav);

  function updateCategory() {
    const randCategoryIndex = Math.floor(Math.random() * categoryData.length);
    randCategory = `${categoryData[randCategoryIndex]}`;
    document.querySelector(".search-bar").placeholder = randCategory;
  }

  updateCategory();
  setInterval(updateCategory, 3000);
}
