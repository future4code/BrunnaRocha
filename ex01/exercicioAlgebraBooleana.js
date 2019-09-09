//EXERCÍCIOS DA MANHÃ - CODE TOGETHER

/* Exercício 1
const idade = prompt("Qual a sua idade? (ao final deste ano?)");

const anoAtual = 2019;
console.log('Ano de nascimento:', anoAtual - idade);

const dias = idade * 365;
console.log('Dias de vida:',dias);

const horas = dias * 24;
console.log('Horas de vida:', horas);

const segundos = horas * 3600;
console.log('Segundos de vida:', segundos);
*/

/*Exercício 2
const peso = prompt("Qual o seu peso?")
const altura = prompt("Qual a sua altura?")
const IMC = peso / altura * altura

console.log('O seu IMC é de: ' + IMC )
*/

//EXERCÍCIOS DA TARDE - DIY

//Exercício 1 a 
const produtoUm = ("Banana " + "R$ " + 5) 
const valorUm = 5
console.log(produtoUm);

const produtoDois = ("Manga " + "R$ " + 9) 
const valorDois = 9
console.log(produtoDois);

const produtoTres = ("Uva " + "R$ " + 8.50) 
const valorTres = 8.50
console.log(produtoTres);

console.log('A soma total dos produtos é de: R$', valorUm + valorDois + valorTres);


//Exercício 1 b 
let grausFahrenheit = 1;
let conversaoGrausCelsius = (35 * 9/5) + 32
let conversaoGrausKelvin = (308,15 + 273,15) *  9/5 + 32
console.log('Graus Kelvin: ', conversaoGrausKelvin)
console.log(' Graus Celsius: ', conversaoGrausCelsius)


/*Exercício 2 a
O mesmo exerc. do  1 b.
*/

//Exercício 2 b
const nome = prompt("Informe o seu nome")
const sobrenome = prompt("Informe o seu sobrenome")
const nomeCompleto = nome + " " + sobrenome
console.log(nomeCompleto)


//Exercício 2 c
const rua = prompt("Informe o nome da sua rua (Não precisa inserir a palavra rua)")
const numero = prompt("Informe o número da sua residência (Apenas números)")
const complemento = prompt("Informe o complemento (Se não houver complemento, digite '-')")
const bairro = prompt("Informe o seu bairro")
const cidade = prompt("Informe a sua cidade")
const enderecoCompleto = rua + ", " + numero + " - "  + complemento + " - " + bairro + ", " + cidade
console.log(enderecoCompleto)


//Exercício 3 a
const destrancada= confirm("A casa está destrancada?")
const temAChave = confirm("Você tem a chave da casa?")
const entrarCasa = (destrancada || temAChave)
console.log(entrarCasa)


//Exercício 3 b
const chovendo= confirm("Está chovendo?")
const temGuardaChuva = confirm("Você tem guarda chuva?")
const naoVaiSeMolhar = (chovendo && temGuardaChuva)
console.log(naoVaiSeMolhar)


/*Exercício 4
const salarioMinimo= 998.00
const quilowatt = 199.6
const desconto = 15%
const total= 
*/