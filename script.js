document.getElementById("botaoEnviar").addEventListener("click", validaFormulario)

function validaFormulario(){
  if(document.getElementById("nome").value != "" && 
     document.getElementById("e-mail").value != "" && 
     document.getElementById("telefone").value != ""){
   alert("Prontinho! Você receberá as novidades por e-mail.")
  }else{
   alert("Por favor, preencha os campos nome, e-mail e telefone!")
  }
}
