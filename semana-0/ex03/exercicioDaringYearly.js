/*let estomago = 0;

while (estomago < 100) {
    console.log("Quero comer mais coxinhas");
    estomago = estomago + 10;
}
*/

// exercicio da tarde

// Pre-comands
  //1 - Estipular o número certo

//Comands
  // 2 - Pedir ao usuário um número de 1 a 20
  // 3 - Guardar o número informado pelo usuário
  // 4 - Se o usuário acertar, emitir um "Parabéns! Você acertou!"
  // 5 - Se o usuário errar, emitir uma mensagem dizendo se o número informado está acima ou abaixo do escolhido pela máquina
  // 6 - Mostrar ao final do acerto, quantas vezes ele jogou até acertar

  let chuteCerto = 13;
  let chute = Number(prompt("Chute um número de 1 a 20: "));
  
  while (chute <= 12 || chute >= 14 || chute <= 20) {
    if (chute <= 12) {
      alert("Mais pra cima!")
      confirm("Quer tentar outra vez?");
    }
    if (chute >= 14) {
      alert("Passou perto!")
      confirm("Quer tentar outra vez?");
    }
    if (chute <= 20) {
      alert("Mais pra baixo")
      confirm("Quer tentar outra vez?");
    }
  
  }
  if (chute = 13) {
    prompt("Parabéns, você acertou")
    
  }
  
  let chutesDados = 1;
  chute = chute + 1;
  console.log("Você tentou ", chutesDados, "vezes");
  