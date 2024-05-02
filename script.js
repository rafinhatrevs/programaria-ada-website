document.getElementById("botao-enviar").addEventListener("click", validarFormulario);

function validarFormulario() {

  if (document.getElementById("nome").value !== "" &&
    document.getElementById("e-mail").value !== "" &&
    document.getElementById("telefone").value !== "") {
    alert("Prontinho! Você receberá as novidades por e-mail.");
  } else {
    alert("Por favor, preencha todos os campos!");
  }
}
