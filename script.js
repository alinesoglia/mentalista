var numeroSecreto = parseInt(Math.random() * 11);

function Chutar() {
  var elementoResultado = document.getElementById("resultado");
  var chute = parseInt(document.getElementById("valor").value);
 
  console.log(numeroSecreto)
  if (chute == numeroSecreto) {
    elementoResultado.innerHTML = "Você acertou! Atualize a página para jogar novamente!";
  } else if (chute > 10 || chute < 0) {
    elementoResultado.innerHTML = "Você deve digitar um número de 0 a 10";
  } else if (chute > numeroSecreto) {
    elementoResultado.innerHTML = "Você errou, o número secreto é menor.";
  } else if (chute < numeroSecreto) {
    elementoResultado.innerHTML = "Você errou, o número secreto é maior.";
  }
}