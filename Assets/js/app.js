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

function displayCategoryProducts(clickedCategory) {
  console.log(clickedCategory);
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

  const categoryNavigation = document.createElement("nav");
  categoryNavigation.classList.add("category-nav");

  const mainNavList = document.createElement("ul");
  mainNavList.classList.add("category-nav-list");

  categoryData.forEach((category) => {
    const navigation = `<li class="category-list"><button onclick="displayCategoryProducts('${category}')">${category}</button></li>`;

    mainNavList.innerHTML += navigation;
  });

  categoryNavigation.appendChild(mainNavList);

  const bottomHeader = `<figure class="header-banner"><img src="./Assets/images/Temu.png" alt="header banner"></figure>`;

  headerContainer.appendChild(mainNav);
  headerContainer.appendChild(categoryNavigation);
  headerContainer.innerHTML += bottomHeader;

  function updateCategory() {
    const randCategoryIndex = Math.floor(Math.random() * categoryData.length);
    randCategory = `${categoryData[randCategoryIndex]}`;
    document.querySelector(".search-bar").placeholder = randCategory;
  }

  updateCategory();
  setInterval(updateCategory, 3000);
}
