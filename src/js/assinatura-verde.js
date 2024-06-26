let cearaButton = document.getElementById("ceara-button-assinatura-verde");
let piauiButton = document.getElementById("piaui-button-assinatura-verde");
let spButton = document.getElementById("sp-button-assinatura-verde");
let cearaImagsDiv = document.getElementById("ceara-imgs-assinatura-verde");
let carrosselInjectDiv = document.getElementById("carousel-assinatura-verde");

let closeCearaImgAssinatura = document.getElementById(
  "close-ceara-imgs-assinatura-verde"
);
cearaButton.addEventListener("click", () => {
  cearaImagsDiv.style.display = "flex";
  carrosselInjectDiv.innerHTML = `
      
  <div class="min-w-full h-full flex justify-end rounded-[48px] lg:rounded-[99px] min-h-[400px] relative">
    <img src="./assets/imgs/usinas/ceara/UFV Aracati 1 - CE.png" alt="Image 1" class="w-full" />
    <span class="text-[28px] absolute bottom-14 block z-50 text-white left-1/2 -translate-x-1/2">UFV Aracati 1 - CE</span>
  </div>
  <div class="min-w-full h-full flex justify-end min-h-[400px] rounded-[48px] lg:rounded-[99px] relative">
    <img src="./assets/imgs/usinas/ceara/UFV Brejo Santo 1 - CE.png" alt="Image 2" class="w-full" />
    <span class="text-[28px] absolute bottom-14 block z-50 text-white left-1/2 -translate-x-1/2">UFV Brejo Santo 1 - CE</span>
  </div>
  <div class="min-w-full h-full flex justify-end rounded-[48px] lg:rounded-[99px] min-h-[400px] relative">
    <img src="./assets/imgs/usinas/ceara/UFV Cedro 1 e 2 - CE.png" alt="Image 4" class="w-full" />
    <span class="text-[28px] absolute bottom-14 block z-50 text-white left-1/2 -translate-x-1/2"> UFV Cedro 1 e 2 - CE</span>
  </div>
   
   
  
  `;
});
piauiButton.addEventListener("click", () => {
  cearaImagsDiv.style.display = "flex";

  carrosselInjectDiv.innerHTML = ` 
  <div class="min-w-full h-full flex justify-end rounded-[48px] lg:rounded-[99px] min-h-[400px] relative">
    <img src="./assets/imgs/usinas/piaui/UFVs Jaicós 1, 2 e 3 - PI.png" alt="Image 1" class="w-full" />

    <span class="text-[28px] absolute bottom-14 block z-50 text-white left-1/2 -translate-x-1/2">UFVs Jaicós 1, 2 e 3 - PI</span>
  </div>
  <div class="min-w-full h-full flex justify-end min-h-[400px] rounded-[48px] lg:rounded-[99px] relative">
    <img src="./assets/imgs/usinas/piaui/UFVs Jaicós 1, 2 e 3 - PI@2x.png" alt="Image 2" class="w-full" />

    <span class="text-[28px] absolute bottom-14 block z-50 text-white left-1/2 -translate-x-1/2">UFVs Jaicós 1, 2 e 3 - PI</span>
  </div>
  <div class="min-w-full h-full flex justify-end rounded-[48px] lg:rounded-[99px] min-h-[400px] relative">
    <img src="./assets/imgs/usinas/piaui/UFVs Jaicós 1, 2 e 3 - PI@3x.png" alt="Image 4" class="w-full" />

    <span class="text-[28px] absolute bottom-14 block z-50 text-white left-1/2 -translate-x-1/2">UFVs Jaicós 1, 2 e 3 - PI</span>
  </div>
  `;
});
spButton.addEventListener("click", () => {
  cearaImagsDiv.style.display = "flex";
  carrosselInjectDiv.innerHTML = `
      
      
      <div class="min-w-full h-full flex justify-end rounded-[48px] lg:rounded-[99px] min-h-[400px] relative">
        <img src="./assets/imgs/usinas/sao-paulo/Usina Mercurio - SP - 1.png" alt="Image 4" class="w-full" />
        <span class="text-[28px] absolute bottom-14 block z-50 text-white left-1/2 -translate-x-1/2">Usina Mercurio - SP - 1</span>
      </div>
      <div class="min-w-full h-full flex justify-end min-h-[400px] rounded-[48px] lg:rounded-[99px] relative">
        <img src="./assets/imgs/usinas/sao-paulo/Usina Mercurio - SP - 2.png" alt="Image 2" class="w-full" />
        <span class="text-[28px] absolute bottom-14 block z-50 text-white left-1/2 -translate-x-1/2">Usina Mercurio - SP - 2</span>
      </div>
      <div class="min-w-full h-full flex justify-end rounded-[48px] lg:rounded-[99px] min-h-[400px] relative">
        <img src="./assets/imgs/usinas/sao-paulo/Usina Mercurio - SP - 3.png" alt="Image 4" class="w-full" />
        <span class="text-[28px] absolute bottom-14 block z-50 text-white left-1/2 -translate-x-1/2">Usina Mercurio - SP - 3</span>
      </div>
    
   
  
  `;
});
closeCearaImgAssinatura.addEventListener("click", () => {
  cearaImagsDiv.style.display = "none";
});

const faqs = [
  {
    titulo: "Será necessário realizar alguma obra nas minhas instalações?",
    subtitulo:
      "Não se preocupe, o processo é bastante simples e feito totalmente online. Tudo que você precisa fazer é acessar a plataforma e seguir as instruções para se cadastrar. É importante lembrar que a conta precisa estar registrada em nome da empresa para que tudo ocorra corretamente.",
  },
  {
    titulo:
      "Caso tenha algum problema técnico com a usina solar, eu ficarei sem energia?",
    subtitulo:
      "Não, a empresa que entrega a energia elétrica até a sua casa é chamada de distribuidora e é ela quem tem a responsabilidade de fazer chegar a energia. Se, por algum motivo técnico, no decorrer de um mês não for possível gerar o benefício do crédito de energia que normalmente aparece como um desconto na sua conta de luz, a Prospera vai parar de cobrar a taxa de assinatura.",
  },
  {
    titulo: "Se eu mudar de endereço, perco o benefício?",
    subtitulo:
      "Não se preocupe, mas é importante que você entre em contato o mais rápido possível com o nosso serviço de atendimento. Precisamos atualizar suas informações no cadastro e na empresa de energia elétrica. Essa atualização deve ser feita com pelo menos 120 dias de antecedência para que tenhamos tempo suficiente de processar as mudanças.",
  },
  {
    titulo: "Como posso cancelar o plano de assinatura verde?",
    subtitulo:
      "Se você deseja cancelar o serviço, é simples! Basta entrar em contato conosco por e-mail ou WhatsApp na nossa área de atendimento. No entanto, é importante fazer isso com pelo menos 120 dias de antecedência. Isso nos permite calcular e deduzir todos os créditos que você possa ter acumulado nas usinas, garantindo um processo tranquilo com a distribuidora de energia local. O cancelamento só será efetivado depois que você tiver usado todos esses créditos.",
  },
  {
    titulo:
      "Vou continuar pagando a conta da minha distribuidora / concessionária?",
    subtitulo:
      "Quando você receber sua fatura, verá que os créditos que recebeu como desconto estarão deduzidos. Além disso, receberá um boleto da Prospera para pagar a parte restante da assinatura. Para garantir o desconto de 10%, é importante pagar e quitar ambos os boletos na plataforma da Prospera. Dessa forma, você aproveitará ao máximo os benefícios oferecidos.",
  },
  {
    titulo: "Como funcionam os meus bônus sobre a assinatura verde?",
    subtitulo:
      "Quando você fizer o pagamento, receberá um bônus de 10% em forma de Vale Energia. Esse benefício pode ser utilizado em faturas futuras ou em transferências para outros imóveis que estejam cadastrados na plataforma da Prospera.",
  },
];

const accordionContainer = document.getElementById("accordion-container");

faqs.forEach((faq, index) => {
  const accordionItem = document.createElement("div");
  accordionItem.className =
    "w-full h-auto flex-col justify-start items-center inline-flex my-2";

  accordionItem.innerHTML = `
    <div class="w-full h-auto pt-6 flex-col justify-start items-center gap-2 flex">
      <div class="justify-between w-full items-center gap-6 flex cursor-pointer" onclick="toggleAccordion(${index})">
        <span class="text-[#33322A] text-start md:text-xl text-lg font-medium font-['Open Sans'] leading-[27px]">${faq.titulo}</span>
        <div id="svg-${index}" class="justify-center items-center flex rotate-180">
          <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.5 15.9619L12.5 8.96191L19.5 15.9619" stroke="#504F43" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg> 
        </div>
      </div>
      <div class="pr-12 justify-start items-startflex accordion-content" id="content-${index}">
        <p class="text-[#504F43] md:text-lg text-base font-normal font-['Open Sans'] leading-normal">${faq.subtitulo}</p>
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
document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.getElementById("carousel-assinatura-verde");
  const prevButton = document.getElementById("prev-assinatura-verde");
  const nextButton = document.getElementById("next-assinatura-verde");

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
