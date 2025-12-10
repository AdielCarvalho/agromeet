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
    |       CARROSEL DE IMAGENS  parte 3        |
    +-------------------------------------------+*/

let lista = document.getElementById("carrossel");
let botaoEsquerdo = document.getElementById("btnVoltar");
let botaoDireito = document.getElementById("btnPassar");
let primeiraSessao = document.getElementById("primeiraSessao");
let segundaSessao = document.getElementById("segundaSessao");

botaoDireito.addEventListener("click", () => {
  console.log("clicado direita");

  // Carrossel da Shopee kkkkk

  if (
    segundaSessao.style.display == "block" &&
    primeiraSessao.style.display == "none"
  ) {
    segundaSessao.style.display = "none";
    primeiraSessao.style.display = "block";
  } else {
    segundaSessao.style.display = "block";
    primeiraSessao.style.display = "none";
  }

  //lista.scrollLeft += 700;
  //lista.style.scrollLeft += 700;
});

//sera se não tem que passar esses paramentro com style não?
// tipo isso: lista.style.scrollLeft += 700;
// eu fiz de um jeito mais simplificado , usando uma div e as imagens dentro dela

botaoEsquerdo.addEventListener("click", () => {
  console.log("clicado esquerda");

  if (
    segundaSessao.style.display == "none" &&
    primeiraSessao.style.display == "block"
  ) {
    segundaSessao.style.display = "block";
    primeiraSessao.style.display = "none";
  } else {
    segundaSessao.style.display = "none";
    primeiraSessao.style.display = "block";
  }

  // lista.scrollLeft -= 700;
  // lista.style.scrollLeft += 700;
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

// let evento1 = document.getElementById("agroBrasilia");
// let infoEvento1 = document.getElementById("detalhes");

// evento1.addEventListener("click", () => {
//   console.log("AgroBrasília");
//   infoEvento1.style.display = "block";
// });

//select funcionando as regioaes
const regiao = document.getElementById("legenda-regiao");

document.getElementById("regioes").addEventListener("change", (event) => {
  const valor = event.target.value;

  //* Norte
  if (valor === "Norte") {
    regiao.innerHTML = 
    `<div class="eventosSelect">
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
    regiao.innerHTML = 
    `<div class="eventosSelect">
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
    regiao.innerHTML = 
    `<div class="eventosSelect">
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
    regiao.innerHTML = 
    `<div class="eventosSelect">
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
    regiao.innerHTML = 
    `<div class="eventosSelect">
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
  }
  else {
    regiao.textContent = " ";
    regiao.style.display = "none";
  }
});

