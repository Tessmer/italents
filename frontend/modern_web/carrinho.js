let modal = document.querySelectorAll(".produtos-carrinho");
let excluir = document.querySelectorAll(".bi-trash");

for (let i = 0; i < excluir.length; i++) {
  excluir[i].addEventListener("click", function (event) {
    if (!event.target.classList.contains(".bi-trash")) {
      modal[i].remove();
    }
  });
}

let diminuir = document.querySelector(".bi-dash-square");
let adicionar = document.querySelector(".bi-plus-square");
let textoProduto = document.querySelector(".numero-produto");
let quantidadeProduto = parseInt(textoProduto.textContent);

adicionar.addEventListener("click", function () {
  quantidadeProduto++;
  textoProduto.innerHTML = quantidadeProduto;
});

diminuir.addEventListener("click", function () {
  if (quantidadeProduto <= 1) {
    alert("A quantidade de produto não pode ser menor que 1.");
  } else {
    quantidadeProduto--;
    textoProduto.innerHTML = quantidadeProduto;
  }
});
