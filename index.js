/*import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello JavaScript!</h1>
`; */
// ------ codigo a partir daqui ----//

/* Funções

// Criar Menu Hamburguer para determinada responsividade

// Pegar valor da data e da região (Criar validação para que se for de
determinada regiao e data trazer os respectivos eventos.

// Criar Evento de Rolagem para o Carrosel ex: (scrollSnapChange)

// Mostrar detalhes do evento conforme a foto que o usuario clicar

// Criar Evento Click para quando o usuario clicar no botão com seta para cima
ir para o topo.

*/
//let imgCarrossel = document.getElementByid("bandeiraBrasil");

/*  +-------------------------------------------------+
    |Função clica na imagem e apareça as informações  |
    +-------------------------------------------------+*/

// ===== Click Guilherme =====
// let evento = document.getElementById("agroBrasilia");
// let detalhes = document.getElementById("texto");

// evento.addEventListener("click", () => {
//   detalhes.innerText =
//     " A AgroBrasília é uma feira de tecnologia e negócios voltada para empreendedores rurais de diversos portes e segmentos, Realizada pela Cooperativa Agropecuária da Região do Distrito Federal (COOPA-DF).";

//   console.log(detalhes.textContent);
// });

// let evento = document.getElementById("evento1");
// let detalhes = document.getElementById("texto").value;

// evento.addEventListener("click", () => {
//   detalhes.innerText = " ";

//   console.log(detalhes.textContent);
// });

/*  +-------------------------------------------+
    |              CARROSEL DE IMAGENS          |
    +-------------------------------------------+*/

// let carosseis = document.getElementsByClassName("carossel");

// for (let i = 0; i < carosseis.length; i++) {
//   let carossel = carosseis[i];
//   let btnVoltar = carossel.getElementsByClassName("BtnPassar")[0];
//   let btnPassar = carossel.getElementsByClassName("BtnVoltar")[0];

//   let itens = carossel.getElementsByClassName("imagensCarrossel");
//   let posicaoAnterior = 0;
//   let mover = posicaoAnterior + 100;

//   btnVoltar.addEventListener("click", () => {
//     mover = posicaoAnterior - 100;

//     for (let c = 0; c < itens.length; c++) {
//       itens[c].style.right = mover + "%";

//       posicaoAnterior = mover;
//     }
//   });

//   btnPassar.addEventListener("click", () => {
//     let posicaoAnterior = 0;
//     let mover = posicaoAnterior + 100;
//     mover = posicaoAnterior + 100;

//     for (let c = 0; c < imagensCarrossel.length; c++) {
//       imagensCarrossel[c].style.right = mover + "%";

//       posicaoAnterior = mover;
//     }
//   });
// }

/*  +-------------------------------------------+
    |       CARROSEL DE IMAGENS  Final          |
    +-------------------------------------------+*/

const controls = document.querySelectorAll(".control");
let currentItem = 0;
const items = document.querySelectorAll(".item");
const maxItems = items.length;

controls.forEach((control) => {
  control.addEventListener("click", () => {
    console.log("Seta Apertada");

    const isLeft = control.classList.contains("arrow-left");

    if (isLeft) {
      currentItem -= 1;
    } else {
      currentItem += 1;
    }

    if (currentItem >= maxItems) {
      currentItem = 0;
    }
    if (currentItem < 0) {
      currentItem = maxItems - 1;
    }
    console.log("control clicked", isLeft, currentItem, maxItems);

    items.forEach((item) => item.classList.remove("current-item"));

    items[currentItem].scroll({
      inline: "center",
      behavior: "smooth",
    });
    items[currentItem].classList.add("current-item");
  });
});

/*  +-------------------------------------------+
        |           Abrir Site Eventos              |
        +-------------------------------------------+*/

function redirecionar(idBotao) {
  let botaoSite = document.getElementById(idBotao);

  botaoSite.addEventListener("click", () => {
    //console.log(botaoSite.dataset.siteEvento);
    window.open(botaoSite.dataset.siteEvento);
  });
}

redirecionar("siteAgroBrasilia");
redirecionar("siteNorteShow");
redirecionar("siteSealba");
redirecionar("siteItaipu");
redirecionar("siteAgriShow");

// Teste -> mostra evento especifico com base em alguma condição

/*  +-------------------------------------------+
        |  Clique na imagem e apareca informações    |
        +-------------------------------------------+*/

let evento1 = document.getElementById("agroBrasilia");
let evento2 = document.getElementById("norteShow");
let evento3 = document.getElementById("sealba");
let evento4 = document.getElementById("itaipu");
let evento5 = document.getElementById("agriShow");

let imagem1 = document.getElementById("imgDetAgroBrasilia");
let imagem2 = document.getElementById("imgDetNorteShow");
let imagem3 = document.getElementById("imgDetSealba");
let imagem4 = document.getElementById("imgDetItaipu");
let imagem5 = document.getElementById("imgDetAgriShow");
let fundo = document.getElementById("detalhes");

evento1.addEventListener("click", () => {
  let infoEvento1 = document.getElementById("detalhesAgroBrasilia");
  let infoEvento2 = document.getElementById("detalhesNorteShow");
  let infoEvento3 = document.getElementById("detalhesSealba");
  let infoEvento4 = document.getElementById("detalhesItaipu");
  let infoEvento5 = document.getElementById("detalhesAgriShow");
  console.log("agroBrasília");
  fundo.style.display = "block";

  infoEvento1.style.display = "block";
  infoEvento2.style.display = "none";
  infoEvento3.style.display = "none";
  infoEvento4.style.display = "none";
  infoEvento5.style.display = "none";

  imagem1.style.display = "block";
  imagem2.style.display = "none";
  imagem3.style.display = "none";
  imagem4.style.display = "none";
  imagem5.style.display = "none";

  //     setTimeout(function() {
  //     location.reload();
  // }, 3000);
});

evento2.addEventListener("click", () => {
  let infoEvento1 = document.getElementById("detalhesAgroBrasilia");
  let infoEvento2 = document.getElementById("detalhesNorteShow");
  let infoEvento3 = document.getElementById("detalhesSealba");
  let infoEvento4 = document.getElementById("detalhesItaipu");
  let infoEvento5 = document.getElementById("detalhesAgriShow");
  console.log("norteShow");
  fundo.style.display = "block";
  infoEvento1.style.display = "none";
  infoEvento2.style.display = "block";
  infoEvento3.style.display = "none";
  infoEvento4.style.display = "none";
  infoEvento5.style.display = "none";

  imagem1.style.display = "none";
  imagem2.style.display = "block";
  imagem3.style.display = "none";
  imagem4.style.display = "none";
  imagem5.style.display = "none";

  //   setTimeout(function() {
  //     location.reload();
  // }, 3000);
});

evento3.addEventListener("click", () => {
  let infoEvento1 = document.getElementById("detalhesAgroBrasilia");
  let infoEvento2 = document.getElementById("detalhesNorteShow");
  let infoEvento3 = document.getElementById("detalhesSealba");
  let infoEvento4 = document.getElementById("detalhesItaipu");
  let infoEvento5 = document.getElementById("detalhesAgriShow");
  console.log("sealba");
  fundo.style.display = "block";

  infoEvento1.style.display = "none";
  infoEvento2.style.display = "none";
  infoEvento3.style.display = "block";
  infoEvento4.style.display = "none";
  infoEvento5.style.display = "none";

  imagem1.style.display = "none";
  imagem2.style.display = "none";
  imagem3.style.display = "block";
  imagem4.style.display = "none";
  imagem5.style.display = "none";

  //     setTimeout(function() {
  //     location.reload();
  // }, 3000);
});

evento4.addEventListener("click", () => {
  let infoEvento1 = document.getElementById("detalhesAgroBrasilia");
  let infoEvento2 = document.getElementById("detalhesNorteShow");
  let infoEvento3 = document.getElementById("detalhesSealba");
  let infoEvento4 = document.getElementById("detalhesItaipu");
  let infoEvento5 = document.getElementById("detalhesAgriShow");
  console.log("itaipu");
  fundo.style.display = "block";

  infoEvento1.style.display = "none";
  infoEvento2.style.display = "none";
  infoEvento3.style.display = "none";
  infoEvento4.style.display = "block";
  infoEvento5.style.display = "none";

  imagem1.style.display = "none";
  imagem2.style.display = "none";
  imagem3.style.display = "none";
  imagem4.style.display = "block";
  imagem5.style.display = "none";

  //   setTimeout(function() {
  //     location.reload();
  // }, 3000);
});

evento5.addEventListener("click", () => {
  let infoEvento1 = document.getElementById("detalhesAgroBrasilia");
  let infoEvento2 = document.getElementById("detalhesNorteShow");
  let infoEvento3 = document.getElementById("detalhesSealba");
  let infoEvento4 = document.getElementById("detalhesItaipu");
  let infoEvento5 = document.getElementById("detalhesAgriShow");
  console.log("agriShow");
  fundo.style.display = "block";

  infoEvento1.style.display = "none";
  infoEvento2.style.display = "none";
  infoEvento3.style.display = "none";
  infoEvento4.style.display = "none";
  infoEvento5.style.display = "block";

  imagem1.style.display = "none";
  imagem2.style.display = "none";
  imagem3.style.display = "none";
  imagem4.style.display = "none";
  imagem5.style.display = "block";

  //   setTimeout(function() {
  //     location.reload();
  // }, 3000);
});

//codigo do select (Região)
const regiao = document.getElementById("legenda-regiao");

document.getElementById("regioes").addEventListener("change", (event) => {
  const valor = event.target.value;

  //* Norte
  if (valor === "Norte") {
    regiao.innerHTML = `<div class="eventosSelect">
      <h3> Rondônia Rural Show Internacional 2026</h3> 
      <strong>Data:</strong> 25 a 30 de maio de 2026<br> 
      <strong>Local:</strong> Sede oficial da Rondônia Rural Show Internacional, Ji-Paraná - RO<br>
    <a class = "linkEventosSelect" href="https://portalbrasil.com.br/rondonia-rural-show-internacional-2026-agro-exportacao-e-desenvolvimento/" target="portalBrasil">Mais informações</a><br>

    
    <br><h3>FENETEC PARÁ 2026</h3>
    <strong>Data:</strong> 20 a 22 de maio de 2026<br> 
    <strong>Local:</strong> Dom Eliseu – PA<br>
    <a class = "linkEventosSelect" href="https://portalbrasil.com.br/fenetec-para-2026-tecnologia-inovacao-e-negocios-no-agro-paraense/" target="fenetec">Mais informações</a><br>
    </div>`;
    regiao.style.display = "block";
  }

  //* Norte
  else if (valor === "Nordeste") {
    regiao.innerHTML = `<div class="eventosSelect">
    <h3>Agro Rosário 2026</h3>
    <strong>Data:</strong> 5 a 7 de março de 2026<br>
    <strong>Local:</strong> Rosário, Correntina - BA<br>
    <a class = "linkEventosSelect" href="https://agrorosario.com.br/" target="agrorosario">Mais informações</a><br>
    
    <br><h3>Congresso Brasileiro de Nematologia 2026</h3>
    <strong>Data:</strong> 31 de agosto a 03 de setembro de 2026<br>
    <strong>Local:</strong> Mar Hotel Convention, Recife – PE<br>
    <a class = "linkEventosSelect" href="https://40cbn.com.br/" target="cbn">Mais informações</a><br>
    </div>`;
    regiao.style.display = "block";
  }

  //* Centro Oeste
  else if (valor === "CentroOeste") {
    regiao.innerHTML = `<div class="eventosSelect">
    <h3>Dinetec Canarana - MT 2026</h3>
    <strong>Data:</strong> 14 a 16 de janeiro de 2026<br>
    <strong>Local:</strong> Canarana - MT<br>
    <a class = "linkEventosSelect" href="https://www.dinetec.com.br/canarana/" target="dinetec">Mais informações</a><br>
    
    <br><h3>CBA Goiânia 2026</h3>
    <strong>Data:</strong> 20 a 22 de abril de 2026<br>
    <strong>Local:</strong> Goiânia - GO<br>
    <a class = "linkEventosSelect" href="https://www.cbago.com.br/" target="cbago">Mais informações</a><br>
    </div>`;
    regiao.style.display = "block";
  }

  //* Sudeste
  else if (valor === "Sudeste") {
    regiao.innerHTML = `<div class="eventosSelect">
    <h3> VI Congresso Brasileiro de Direito do Agronegócio</h3>
    <strong>Data:</strong> 30 de março de 2026<br>
    <strong>Local:</strong> Hotel Renaissance, São Paulo - SP<br> 
    <a class = "linkEventosSelect" href="https://www.seminariodocafe.com.br/" target="seminarioDoCafe">Mais informações</a><br>
    
    <br><h3>MilkShow 2026</h3>
    <strong>Data:</strong> 07 a 11 de Julho de 2026<br>
    <strong>Local:</strong> Parque de Exposições de Patos de Minas - MG<br>
    <a class = "linkEventosSelect" href="https://milkshowagro.com.br/" target="milkShowAgro">Mais informações</a>
    </div>`;
    regiao.style.display = "block";
  }

  //* Sul
  else if (valor === "Sul") {
    regiao.innerHTML = `<div class="eventosSelect">
    <h3>PorkExpo Brasil & LATAM 2026</h3>
    <strong>Data:</strong> 28 e 29 de abril de 2026<br>
    <strong>Local:</strong> Recanto Cataratas Thermas Resort & Convention, Foz do Iguaçu – PR<br>
    <a class = "linkEventosSelect" href="https://porkexpo.com.br/porkexpo-latam/" target="porkexpo">Mais informações</a><br>
    
    <br><h3>ExpoMAR 2026</h3>
    <strong>Data:</strong> 24 a 26 de junho de 2026<br>
    <strong>Local:</strong> Itajaí – SC<br>
    <a class = "linkEventosSelect" href="https://expomar.com.br/programacao" target="expormar">Mais informações</a>
    </div>`;
    regiao.style.display = "block";
  } else {
    regiao.textContent = " ";
    regiao.style.display = "none";
  }
});

//Teste Secretos
let insta = document.getElementById("instaimg");

insta.addEventListener("click", () => {
  window.open(insta.dataset.siteInsta);
});

// Click Footer Facebook
let face = document.getElementById("faceimg");

face.addEventListener("click", () => {
  window.open(face.dataset.siteFace);
});

// Menu Hamburguer
let menuMobile = document.getElementById("menu-mobile");
let iconeFechar = document.getElementById("icone-fechar");
let listaMenu = document.getElementById("nav-list");

// Evento para quando clicar no icone do menu abrir os itens do nav
menuMobile.addEventListener("click", () => {
  menuMobile.classList.add("apagar");

  iconeFechar.classList.add("mostrar");
  listaMenu.classList.add("mostrar-lista");
});

// Evento para quando clicar no icone fechar voltar o icone do menu
iconeFechar.addEventListener("click", () => {
  menuMobile.classList.remove("apagar");
  iconeFechar.classList.remove("mostrar");
  listaMenu.classList.remove("mostrar-lista");
});
