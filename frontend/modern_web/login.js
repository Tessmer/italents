const btnAdd = document.querySelector("#loginAccess");

btnAdd.addEventListener("click", function () {
  const emailValue = document.querySelector("#emailInput").value;
  const passwordValue = document.querySelector("#passwordInput").value;
  if (emailValue === "" || passwordValue === "") {
    alert("Algum campo de login está vazio.");
  } else {
    alert("Login efetuado com sucesso.");
  }

  if (emailValue !== "" && passwordValue !== "") {
    document.querySelector("#emailInput").value = "";
    document.querySelector("#passwordInput").value = "";
  }
});
