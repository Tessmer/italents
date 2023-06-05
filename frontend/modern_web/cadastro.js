function cadastroUsuario() {
  let nome = document.forms["formulario"]["nome"].value;
  let email = document.forms["formulario"]["email"].value;
  let senha = document.forms["formulario"]["senha"].value;
  let imagem = document.forms["formulario"]["link"].value;
  let endereco = document.forms["formulario"]["endereco"].value;
  let produtos = document.forms["formulario"]["produtos"].value;
  let admin = document.forms["formulario"]["admin"].value;
  let cliente = document.forms["formulario"]["cliente"].value;

  if (
    nome === "" ||
    email === "" ||
    senha === "" ||
    imagem === "" ||
    endereco === "" ||
    produtos === ""
  ) {
    alert("Campos não preenchidos.");
    return;
  }
  if (admin !== "on" || cliente !== "on") {
    alert("Permissão não marcada.");
    return;
  } else {
    alert("Formulário enviado com sucesso.");
  }
}

function cadastroProduto() {
  let nome = document.querySelector("#nome").value;
  let descricao = document.querySelector("#descricao").value;
  let categoria = document.querySelector("#categoria").value;
  let preco_unitario = document.querySelector("#unidade").value;
  let codigo_de_barras = document.querySelector("#codigo").value;

  if (
    nome === "" ||
    descricao === "" ||
    categoria === "" ||
    preco_unitario === "" ||
    codigo_de_barras === ""
  ) {
    alert("Existem dados não preenchidos no formulário");
    return;
  } else {
    alert("Cadastro de produto efetuado.");
  }
}
