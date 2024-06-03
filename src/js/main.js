let hamburgerMenu = document.getElementById("hamburger-menu-button");
let closeMenu = document.getElementById("close-button");

let responsiveMenu = document.getElementById("responsive-menu");

hamburgerMenu.addEventListener("click", function () {
  responsiveMenu.style.display = "flex";
  closeMenu.style.display = "block";
  hamburgerMenu.style.display = "none";
});
closeMenu.addEventListener("click", () => {
  responsiveMenu.style.display = "none";
  closeMenu.style.display = "none";
  hamburgerMenu.style.display = "block";
});

let usinas = document.getElementById("usinas");

let creditoCarbono = document.getElementById("credito-carbono");

let usinasButton = document.getElementById("usinas-button");

let creditoCarbonoButton = document.getElementById("credito-carbono-button");

// let productItemsDiv = document.getElementById("product-items");

// let scrollProductRigth = document.getElementById("next-product");
// let scrollProductLeft = document.getElementById("prev-product");
// let scrollProduct03 = document.getElementById("scrool-product-03");

// scrollProductRigth.addEventListener("click", () => {
//   productItemsDiv.scrollLeft += 384;
//   console.log("log");
// });

// scrollProductLeft.addEventListener("click", () => {
//   productItemsDiv.scrollLeft -= 384;
// });

usinasButton.addEventListener("click", function () {
  console.log("log");
  usinas.style.display = "flex";
  creditoCarbono.style.display = "none";
  usinasButton.style.color = "#24231E";
  usinasButton.style.borderBottom = "2px solid #24231E";
  creditoCarbonoButton.style.borderBottom = "2px solid #878681";
  creditoCarbonoButton.style.color = "#878681";
});
creditoCarbonoButton.addEventListener("click", function () {
  console.log("aqui");
  usinas.style.display = "none";
  creditoCarbono.style.display = "flex";
  usinasButton.style.color = "#878681";
  usinasButton.style.borderBottom = "2px solid #878681";
  creditoCarbonoButton.style.borderBottom = "2px solid #24231E";
  creditoCarbonoButton.style.color = "#24231E";
});
const menuBtn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

menuBtn.addEventListener("click", () => {
  menu.classList.toggle("hidden");
  menuBtn.classList.toggle("open");
});
