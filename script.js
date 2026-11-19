// Barra de Navegação
const botaoMenu = document.getElementById("btn-menu");
const imgMenu = document.getElementById("img-menu");
const menu = document.getElementById("menu");
const body = document.body;
const itensMenu = document.querySelectorAll(".item-menu");

function abrirMenu() {
    imgMenu.src = "img/fechar.svg";
    botaoMenu.setAttribute("aria-expanded", "true");
    botaoMenu.setAttribute("aria-label", "Fechar Menu");
    body.classList.add("body-travado");
}

function fecharMenu() {
  menu.classList.remove("menu-aberto");
  body.classList.remove("body-travado");
  imgMenu.src = "img/menu.svg";
  botaoMenu.setAttribute("aria-label", "Abrir Menu");
  botaoMenu.setAttribute("aria-expanded", "false");
}

botaoMenu.addEventListener("click", () => {
  menu.classList.toggle("menu-aberto");
  if (menu.classList.contains("menu-aberto")) {
    abrirMenu();
  } else {
    fecharMenu();
  }
});

itensMenu.forEach((itens) => {
  itens.addEventListener("click", fecharMenu);
});

const mediaDesktop = window.matchMedia("(min-width: 820px)");
mediaDesktop.addEventListener("change", (evento) => {
  if (evento.matches) {
    fecharMenu();
  }
});

document.addEventListener("keydown", (tecla) => {
  if (tecla.key === "Escape") {
    fecharMenu();
  };
});

// Cardápio
const categorias = document.querySelectorAll(".categoria");
const cardapioInfos = document.querySelectorAll(".cardapio-info");

categorias.forEach((categoria) => {
  categoria.addEventListener("click", () => {

    const cardapioSelecionado = document.getElementById(categoria.dataset.menu);

    if(!cardapioSelecionado) return;

    categorias.forEach((item) => {
      item.classList.remove("selecionado");
      item.setAttribute("aria-pressed", "false");
    });

    categoria.classList.add("selecionado");
    categoria.setAttribute("aria-pressed", "true");

    cardapioInfos.forEach((item) => {
      item.classList.add("desativado");
    });

    cardapioSelecionado.classList.remove("desativado");

  });
});
