const iniciarJogada = confirm("Quer iniciar uma rodada?");

if (iniciarJogada){
  const cartaUsuario1 = comprarCarta();
  const cartaUsuario2 = comprarCarta();
  const cartaComputador1 = comprarCarta();
  const cartaComputador2 = comprarCarta();

  const pontuacaoUsuario = cartaUsuario1.valor + cartaUsuario2.valor
  const pontuacaoComputador = cartaComputador1.valor + cartaComputador2.valor

  console.log("Bem vindo ao jogo de BlackJack!");

  const impressaoCartaUsuario = cartaUsuario1.texto + " " + cartaUsuario2.texto
 
  const impressaoCartaComputador = cartaComputador1.texto + " " + cartaComputador2.texto

  console.log("Usuário - cartas : " + impressaoCartaUsuario + " - pontuação " + pontuacaoUsuario);

  console.log("Computador - cartas : " + impressaoCartaComputador + " - pontuação " + pontuacaoComputador);

if (pontuacaoUsuario < pontuacaoComputador){
    console.log ("O computador ganhou!");
  }
  else if (pontuacaoUsuario === pontuacaoComputador){
    console.log ("Foi um empate!");
  }
  else {
    console.log ("O Usuário ganhou!");
  }
}
else {  
  console.log("O jogo acabou!");
}


function comprarCarta() {
  // Cria array de cartas
  const cartas = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

  // Cria array de naipes
  const naipes = ["♦️", "♥️", "♣️", "♠️"]

  // Sorteia uma carta
  const numero = cartas[Math.floor(Math.random() * 13)]

  // Sorteia um naipe
  const naipe = naipes[Math.floor(Math.random() * 4)]

  let valor

  // Verifica se é uma das letras e coloca o valor correspondente na variável valor
  if (numero === "A") {
    valor = 11
  } else if (numero === "J" || numero === "Q" || numero === "K") {
    valor = 10
  } else { // Se nao for uma das letras, só converte a string para número
    valor = Number(numero)
  }

  // Cria um objeto da carta com as propriedades que vamos precisar: texto e valor
  const carta = {
    texto: numero + naipe,
    valor: valor
  }

  return carta

}

