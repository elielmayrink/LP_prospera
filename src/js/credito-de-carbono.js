let formDiv = document.querySelector("#form-div");
let closeFormButton = document.querySelector("#close-form");
let openForm01 = document.querySelector("#open-form-01");
let openForm02 = document.querySelector("#open-form-02");

let inputFirstName = document.getElementById("nome");
let inputCnpj = document.getElementById("cnpj");
let inputEmail = document.getElementById("email");
let inputCodigoPais = document.getElementById("codigo-do-pais");
let inputTelefone = document.getElementById("telefone");
let submitButton = document.getElementById("submit-button");
submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(
    inputFirstName.value,
    inputEmail.value,
    inputCodigoPais.value,
    inputTelefone.value,
    inputCorporationName.value
  );
  formDiv.style.display = "none";
});

openForm01.addEventListener("click", handleOpenForm);
openForm02.addEventListener("click", handleOpenForm);
function handleOpenForm() {
  formDiv.style.display = "block";
}

closeFormButton.addEventListener(
  "click",
  () => (formDiv.style.display = "none")
);
const faqs = [
  {
    title: "O que é o mercado de carbono?",
    content:
      "O mercado de carbono é um sistema onde são comercializados créditos de carbono, que representam uma tonelada de dióxido de carbono (CO2) ou equivalente que foi removida ou evitada da atmosfera. Empresas e governos utilizam esses créditos para compensar suas emissões de gases de efeito estufa, promovendo ações sustentáveis e ajudando a combater as mudanças climáticas.",
  },
  {
    title: "Como funciona o mercado de carbono?",
    content:
      "O mercado de carbono opera através de um sistema de comércio de emissões onde entidades que emitem gases de efeito estufa acima de seus limites podem comprar créditos de carbono de entidades que emitem abaixo de seus limites ou que implementaram projetos de redução de emissões. Existem dois tipos principais de mercados de carbono: os mercados regulamentados, estabelecidos por políticas governamentais, e os mercados voluntários, onde empresas e indivíduos compram créditos para atingir metas próprias de sustentabilidade.",
  },
  {
    title: "Quem pode participar do mercado de carbono?",
    content:
      "Qualquer empresa, governo ou indivíduo pode participar do mercado de carbono. No mercado regulamentado, a participação é obrigatória para determinadas indústrias e setores que precisam cumprir metas de emissão estabelecidas por leis e regulamentos. No mercado voluntário, qualquer entidade pode adquirir créditos de carbono para compensar suas emissões por razões de responsabilidade ambiental ou para melhorar sua imagem perante os consumidores.",
  },
  {
    title: "Qual é a importância da regulamentação no mercado de carbono?",
    content:
      "A regulamentação é crucial para garantir a integridade, transparência e eficácia do mercado de carbono. Leis e regulamentos estabelecem as regras para a quantificação, monitoramento, verificação e comercialização dos créditos de carbono. A regulamentação também ajuda a evitar fraudes e garantir que os créditos representem reduções reais e verificáveis de emissões. Exemplo de regulamentações incluem o Protocolo de Quioto e o Acordo de Paris, além de legislações específicas de cada país.",
  },
  {
    title: "Quais são os benefícios do mercado de carbono?",
    content:
      "Redução das emissões de gases de efeito estufa: Incentiva empresas e governos a adotarem práticas mais sustentáveis.\nInovação tecnológica: Estimula o desenvolvimento de novas tecnologias para redução de emissões.\nBenefícios econômicos: Cria novas oportunidades de negócios e empregos no setor de sustentabilidade.\nPreservação ambiental: Contribui para a proteção de florestas e outros ecossistemas.\nResponsabilidade social: Ajuda empresas a atenderem expectativas de consumidores conscientes e cumprirem metas de sustentabilidade corporativa.",
  },
];

const accordionContainer = document.getElementById("accordion-container");

faqs.forEach((faq, index) => {
  const accordionItem = document.createElement("div");
  accordionItem.className =
    "w-full max-w-[768px] h-auto flex-col justify-start items-center inline-flex my-2";

  accordionItem.innerHTML = `
        <div class="w-full h-auto pt-6 flex-col justify-start items-center gap-2 flex">
          <div class="justify-between w-full items-center gap-6 flex cursor-pointer" onclick="toggleAccordion(${index})">
            <span class="text-[#33322A] text-start md:text-xl text-lg font-medium font-['Open Sans'] leading-[27px]">${faq.title}</span>
            <div id="svg-${index}" class="justify-center items-center flex rotate-180">
              <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.5 15.9619L12.5 8.96191L19.5 15.9619" stroke="#504F43" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg> 
            </div>
          </div>
          <div class="pr-12 justify-start items-startflex accordion-content" id="content-${index}">
            <p class="text-[#504F43] md:text-lg text-base font-normal font-['Open Sans'] leading-normal">${faq.content}</p>
          </div>
        </div>
        `;

  accordionContainer.appendChild(accordionItem);
});

function toggleAccordion(index) {
  const svgElement = document.getElementById(`svg-${index}`);
  const content = document.getElementById(`content-${index}`);
  content.classList.toggle("open");
  if (content.style.display === "none" || content.style.display === "") {
    content.style.display = "block";
    svgElement.style.transform = "rotate(0deg)";
  } else {
    content.style.display = "none";
    svgElement.style.transform = "rotate(180deg)";
  }
}
