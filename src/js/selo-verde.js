let zipBagsDivs = document.getElementById("zip-bags");
let bagOfCoffee = document.getElementById("bag-of-coffee");
let cupOfCoffeeDivs = document.getElementById("cup-of-coffee");

let paraSuaEmpresaButton = document.getElementById("para-sua-empresa");
let paraSeuNegocio = document.getElementById("para-seu-negocio");
let paraVoceButton = document.getElementById("para-voce");
let cearaImagsDiv = document.getElementById("ceara-imgs");
let carrosselInjectDiv = document.getElementById("carousel");

let cearaButton = document.getElementById("ceara-button");
let piauiButton = document.getElementById("piaui-button");
let spButton = document.getElementById("sp-button");

let closeCearaImg = document.getElementById("close-ceara-imgs");
cearaButton.addEventListener("click", () => {
  cearaImagsDiv.style.display = "flex";
  carrosselInjectDiv.innerHTML = `
      
      <div class="min-w-full h-[75%] rounded-[99px] min-h-[400px]">
        <img src="./assets/imgs/usinas/ceara/UFV Aracati 1 - CE.png" alt="Image 1" class="w-full" />
      </div>
      <div class="min-w-full h-[75%] min-h-[400px] rounded-[99px]">
        <img src="./assets/imgs/usinas/ceara/UFV Brejo Santo 1 - CE.png" alt="Image 2" class="w-full" />
      </div>
      <div class="min-w-full h-[75%] rounded-[99px] min-h-[400px]">
        <img src="./assets/imgs/usinas/ceara/UFV Cedro 1 e 2 - CE.png" alt="Image 4" class="w-full" />
      </div>
    </div>
   
  
  `;
});
piauiButton.addEventListener("click", () => {
  cearaImagsDiv.style.display = "flex";

  carrosselInjectDiv.innerHTML = `
      
      <div class="min-w-full h-[75%] rounded-[99px] min-h-[400px]">
        <img src="./assets/imgs/usinas/piaui/UFVs Jaicós 1, 2 e 3 - PI.png" alt="Image 1" class="w-full" />
      </div>
      <div class="min-w-full h-[75%] min-h-[400px] rounded-[99px]">
        <img src="./assets/imgs/usinas/piaui/UFVs Jaicós 1, 2 e 3 - PI@2x.png" alt="Image 2" class="w-full" />
      </div>
      <div class="min-w-full h-[75%] rounded-[99px] min-h-[400px]">
        <img src="./assets/imgs/usinas/piaui/UFVs Jaicós 1, 2 e 3 - PI@3x.png" alt="Image 4" class="w-full" />
      </div>
    </div>
   
  
  `;
});
spButton.addEventListener("click", () => {
  cearaImagsDiv.style.display = "flex";
  carrosselInjectDiv.innerHTML = `
      
      
      <div class="min-w-full h-[75%] min-h-[400px] rounded-[99px]">
        <img src="./assets/imgs/usinas/sao-paulo/Usina Mercurio - SP - 2.png" alt="Image 2" class="w-full" />
      </div>
      <div class="min-w-full h-[75%] rounded-[99px] min-h-[400px]">
        <img src="./assets/imgs/usinas/sao-paulo/Usina Mercurio - SP - 3.png" alt="Image 4" class="w-full" />
      </div>
    </div>
   
  
  `;
});
closeCearaImg.addEventListener("click", () => {
  cearaImagsDiv.style.display = "none";
});

paraSuaEmpresaButton.addEventListener("click", function () {
  zipBagsDivs.style.display = "flex";
  bagOfCoffee.style.display = "none";
  cupOfCoffeeDivs.style.display = "none";
  paraSuaEmpresaButton.style.borderBottom = "2px solid #24231E";
  paraSuaEmpresaButton.style.color = "#24231E";

  paraSeuNegocio.style.borderBottom = "2px solid #878681";
  paraSeuNegocio.style.color = "#878681";

  paraVoceButton.style.borderBottom = "2px solid #878681";
  paraVoceButton.style.color = "#878681";
});
paraSeuNegocio.addEventListener("click", function () {
  zipBagsDivs.style.display = "none";
  bagOfCoffee.style.display = "flex";
  cupOfCoffeeDivs.style.display = "none";
  paraSuaEmpresaButton.style.borderBottom = "2px solid #878681";
  paraSuaEmpresaButton.style.color = "#878681";

  paraSeuNegocio.style.borderBottom = "2px solid #24231E";
  paraSeuNegocio.style.color = "#24231E";

  paraVoceButton.style.borderBottom = "2px solid #878681";
  paraVoceButton.style.color = "#878681";
});
paraVoceButton.addEventListener("click", function () {
  zipBagsDivs.style.display = "none";
  bagOfCoffee.style.display = "none";
  cupOfCoffeeDivs.style.display = "flex";
  paraSuaEmpresaButton.style.borderBottom = "2px solid #878681";
  paraSuaEmpresaButton.style.color = "#878681";

  paraSeuNegocio.style.borderBottom = "2px solid #878681";
  paraSeuNegocio.style.color = "#878681";

  paraVoceButton.style.borderBottom = "2px solid #24231E";
  paraVoceButton.style.color = "#24231E";
});
document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.getElementById("carousel");
  const prevButton = document.getElementById("prev");
  const nextButton = document.getElementById("next");

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
  });

  nextButton.addEventListener("click", () => {
    showSlide(currentIndex + 1);
  });

  showSlide(currentIndex);
});
