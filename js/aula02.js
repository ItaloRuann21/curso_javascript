document.write("<h1>Aula 01 JS - Sintase, Variáveis, Contantes e tipos</h1>")
console.log("Aqui iremos ver os erros para analisar depois.")

// let - variável mutável, ou seja, que podemos mudar futuramente caso precice.
// const - variável imutável, ou seja, não pode ser mudada futuramente.
// Estudando as praticas, vou usar o const no meu nome/sobrenome e na data de nascimento, pois eu sei que nunca vou mudar meu nome. 
const NOME = 'Italo'
const SOBRENOME = 'Ruann'
let meuPeso = 70.3
let idade = 23
let altura = 1.70
let ehDoador = false
let estado = null

// Valores matemáticos que podemos acrescentar as constantes.
// por padrão, devemos colocar o nome das constantes tudo letra maiúscula.
const PI = 3.1415
const TAXA = 0.5

estado = "Aracaju/Sergipe"

// Utilizamos o document.writeln() para escrever o conteúdo na tela do nosso html.
// tem várias formas para imprimir variáveis no html usando o document.write
document.write("<p>Nome: ", NOME, '</p>') // utilizando vírgula, o js já reconhece que quer espaçamentos.
document.write("<p>Sobrenome: " + SOBRENOME +'</p>') // utilizando operador de concatenação
document.write(`<p>Peso: ${meuPeso} </p>`) // utilizando template literals, que é uma forma que utiliza crase e $
document.write("<p>Idade: ", idade, '</p>') 
document.write("<p>Altura: ", altura, '</p>')
document.write("<p>Doador: ", ehDoador, '</p>')
document.write("<p>Estado: ", estado, '</p>')