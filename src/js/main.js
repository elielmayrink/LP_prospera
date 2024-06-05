let hamburgerMenu = document.getElementById("hamburger-menu-button");
let closeMenu = document.getElementById("close-button");

let responsiveMenu = document.getElementById("responsive-menu");

hamburgerMenu.addEventListener("click", function () {
  responsiveMenu.style.display = "flex";
  closeMenu.style.display = "block";
  hamburgerMenu.style.display = "none";
  console.log("aqui");
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

usinasButton.addEventListener("click", function () {
  usinas.style.display = "flex";
  creditoCarbono.style.display = "none";
  usinasButton.style.color = "#24231E";
  usinasButton.style.borderBottom = "2px solid #24231E";
  creditoCarbonoButton.style.borderBottom = "2px solid #878681";
  creditoCarbonoButton.style.color = "#878681";
});
creditoCarbonoButton.addEventListener("click", function () {
  usinas.style.display = "none";
  creditoCarbono.style.display = "flex";
  usinasButton.style.color = "#878681";
  usinasButton.style.borderBottom = "2px solid #878681";
  creditoCarbonoButton.style.borderBottom = "2px solid #24231E";
  creditoCarbonoButton.style.color = "#24231E";
});
const menuBtn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

let cearaButtonHome = document.getElementById("ceara-button-home");
let piauiButtonHome = document.getElementById("piaui-button-home");
let spButtonHome = document.getElementById("sp-button-home");
let cearaImagsDivHome = document.getElementById("ceara-imgs-home");
let carrosselInjectDivHome = document.getElementById("carousel-home");

let closeCearaImgHome = document.getElementById("close-ceara-imgs-home");
cearaButtonHome.addEventListener("click", () => {
  cearaImagsDivHome.style.display = "flex";
  carrosselInjectDivHome.innerHTML = `
      
      <div class="min-w-full h-full flex justify-end rounded-[48px] lg:rounded-[99px] min-h-[400px]">
        <img src="./assets/imgs/usinas/ceara/UFV Aracati 1 - CE.png" alt="Image 1" class="w-full" />
      </div>
      <div class="min-w-full h-full flex justify-end min-h-[400px] rounded-[48px] lg:rounded-[99px]">
        <img src="./assets/imgs/usinas/ceara/UFV Brejo Santo 1 - CE.png" alt="Image 2" class="w-full" />
      </div>
      <div class="min-w-full h-full flex justify-end rounded-[48px] lg:rounded-[99px] min-h-[400px]">
        <img src="./assets/imgs/usinas/ceara/UFV Cedro 1 e 2 - CE.png" alt="Image 4" class="w-full" />
      </div>
   
   
  
  `;
});
piauiButtonHome.addEventListener("click", () => {
  cearaImagsDivHome.style.display = "flex";

  carrosselInjectDivHome.innerHTML = `
      
      <div class="min-w-full h-full flex justify-end rounded-[48px] lg:rounded-[99px] min-h-[400px]">
        <img src="./assets/imgs/usinas/piaui/UFVs Jaicós 1, 2 e 3 - PI.png" alt="Image 1" class="w-full" />
      </div>
  
  `;
});
spButtonHome.addEventListener("click", () => {
  cearaImagsDivHome.style.display = "flex";
  carrosselInjectDivHome.innerHTML = `
      
      
      <div class="min-w-full h-full flex justify-end rounded-[48px] lg:rounded-[99px] min-h-[400px]">
        <img src="./assets/imgs/usinas/sao-paulo/Usina Mercurio - SP - 1.png" alt="Image 4" class="w-full" />
      </div>
      <div class="min-w-full h-full flex justify-end min-h-[400px] rounded-[48px] lg:rounded-[99px]">
        <img src="./assets/imgs/usinas/sao-paulo/Usina Mercurio - SP - 2.png" alt="Image 2" class="w-full" />
      </div>
      <div class="min-w-full h-full flex justify-end rounded-[48px] lg:rounded-[99px] min-h-[400px]">
        <img src="./assets/imgs/usinas/sao-paulo/Usina Mercurio - SP - 3.png" alt="Image 4" class="w-full" />
      </div>
    
   
  
  `;
});
document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.getElementById("carousel-home");
  const prevButton = document.getElementById("prev-home");
  const nextButton = document.getElementById("next-home");

  let currentIndex = 0;

  function showSlide(index) {
    const totalSlides = carousel.children.length;
    if (index >= totalSlides) {
      currentIndex = 0;
    } else if (index < 0) {
      currentIndex = totalSlides - 1;
    } else {
      currentIndex = index;
    }
    const offset = -currentIndex * 100;
    carousel.style.transform = `translateX(${offset}%)`;
  }

  prevButton.addEventListener("click", () => {
    showSlide(currentIndex - 1);
    console.log("aqui");
  });

  nextButton.addEventListener("click", () => {
    showSlide(currentIndex + 1);
    console.log("aqui");
  });

  showSlide(currentIndex);
});
closeCearaImgHome.addEventListener("click", () => {
  cearaImagsDivHome.style.display = "none";
});

menuBtn.addEventListener("click", () => {
  menu.classList.toggle("hidden");
  menuBtn.classList.toggle("open");
});
