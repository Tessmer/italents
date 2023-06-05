let coracao = document.querySelector(".bi-heart-fill");
console.log("coracao", coracao);
coracao.addEventListener("click", function (event) {
  if (event.target.nodeName === "I") {
    event.target.classList.toggle("red");
    event.target.style.color = "red";
  }
});

function addCarrinho() {
  alert("Adicionado ao carrinho com sucesso.");
}
