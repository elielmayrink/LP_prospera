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
