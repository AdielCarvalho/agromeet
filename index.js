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
    |       CARROSEL DE IMAGENS  parte Final    |
    +-------------------------------------------+*/

const controls = document.querySelectorAll('.control');
let currentItem = 0;
const items = document.querySelectorAll('.item');
const maxItems = items.length;

controls.forEach(control => {
    control.addEventListener('click', () => {
        const isLeft = control.classList.contains('arrow-left');

        if (isLeft) {
            currentItem -= 1
        } else {
            currentItem += 1
        }

        if (currentItem >= maxItems) {
            currentItem = 0
        } if (currentItem < 0) {
            currentItem = maxItems - 1
        }
        console.log('control clicked', isLeft, currentItem,maxItems);

        items.forEach( item => item.classList.remove('current-item'));

        items[currentItem].scrollIntoView({
            inline:"center",
            behavior:"smooth"
        })
        items[currentItem].classList.add('current-item')
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

let evento1 = document.getElementById("agroBrasilia");
let infoEvento1 = document.getElementById("detalhes");

evento1.addEventListener("click", () => {
  console.log("AgroBrasília");
  infoEvento1.style.display = "block";
});

let selecao = document.getElementById("regioes");

selecao.addEventListener("change", () => {
  console.log(`teste ${selecao.value}`);

  selecao.value == "CentroOeste"
    ? (infoEvento1.style.display = "block")
    : (infoEvento1.style.display = "none");
});


