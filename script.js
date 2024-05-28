document.getElementById("send-button").addEventListener("click", validateForm);

function validateForm() {

  if (document.getElementById("name").value !== "" &&
    document.getElementById("email").value !== "" &&
    document.getElementById("phone").value !== "") {
    alert("Prontinho! Você receberá as novidades por e-mail.");
  } else {
    alert("Por favor, preencha todos os campos!");
  }
}
