// Barra de Navegação
const botaoMenu = document.getElementById("btn-menu");
const imgMenu = document.getElementById("img-menu");
const menu = document.getElementById("menu");
const body = document.body;
const itensMenu = document.querySelectorAll(".item-menu");

botaoMenu.addEventListener("click", () => {
  menu.classList.toggle("menu-aberto");
  if (menu.classList.contains("menu-aberto")) {
    imgMenu.src = "img/fechar.svg";
    botaoMenu.setAttribute("aria-expanded", "true");
    botaoMenu.setAttribute("aria-label", "Fechar Menu");
    body.classList.add("body-travado");
  } else {
    imgMenu.src = "img/menu.svg";
    botaoMenu.setAttribute("aria-expanded", "false");
    botaoMenu.setAttribute("aria-label", "Abrir Menu");
    body.classList.remove("body-travado");
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

function fecharMenu() {
  menu.classList.remove("menu-aberto");
  body.classList.remove("body-travado");
  imgMenu.src = "img/menu.svg";
  botaoMenu.setAttribute("aria-label", "Abrir Menu");
  botaoMenu.setAttribute("aria-expanded", "false");
}

// Cardápio
const categorias = document.querySelectorAll(".categoria");
const itensInfo = document.querySelectorAll(".cardapio-info");

categorias.forEach((categoria) => {
  categoria.addEventListener("click", () => {
    categorias.forEach((item) => {
      item.classList.remove("selecionado");
      item.setAttribute("aria-pressed", "false");
    });

    categoria.classList.add("selecionado");
    categoria.setAttribute("aria-pressed", "true");

    itensInfo.forEach((item) => {
      item.classList.add("desativado");
    });

    const cardapioSelecionado = document.getElementById(categoria.dataset.menu);

    cardapioSelecionado.classList.remove("desativado");
  });
});
