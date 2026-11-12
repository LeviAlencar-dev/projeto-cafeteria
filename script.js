let botaoMenu = document.getElementById("btn-menu");
let ImgMenu = document.getElementById("img-menu");
let Menu = document.getElementById("menu");
let body = document.body;
let ItensMenu = document.querySelectorAll(".item-menu");

botaoMenu.addEventListener("click", () => {
  Menu.classList.toggle("nav-aberto");
  if (Menu.classList.contains("nav-aberto")) {
    ImgMenu.src = "img/fechar.svg";
    botaoMenu.setAttribute("aria-expanded", "true");
    botaoMenu.setAttribute("aria-presesd", "true");
    body.classList.add("body-travado");
  } else {
    ImgMenu.src = "img/menu.svg";
    botaoMenu.setAttribute("aria-expanded", "false");
    botaoMenu.setAttribute("aria-presesd", "false");
    body.classList.remove("body-travado");
  }
});

ItensMenu.forEach((itens) => {
  itens.addEventListener("click", sessoesmenu);
});

function sessoesmenu() {
  Menu.classList.remove("nav-aberto");
  body.classList.remove("body-travado");
  ImgMenu.src = "img/menu.svg";
  botaoMenu.setAttribute("aria-expanded", "false");
  botaoMenu.setAttribute("aria-presesd", "false");
}

let categorias = document.querySelectorAll(".categoria");
let ItensInfo = document.querySelectorAll(".itens-info");

categorias.forEach((categoria) => {

  categoria.addEventListener("click", () => {
    
    categorias.forEach((item) => {
      item.classList.remove("selecionado");
    });

    categoria.classList.add("selecionado");

    ItensInfo.forEach((item) => {
      item.classList.add("desativado");
    });

    let CardapioSelecionado = document.getElementById(categoria.dataset.menu);

    CardapioSelecionado.classList.remove("desativado");
  });
});
