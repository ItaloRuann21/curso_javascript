/* Manipulando o DOM HTML
DOM - Document Object Model
- Tudo que contém navigator, window, location, history e até document é um objeto, podendo ser acessado pelo java script
- Ou seja, é uma árvore com elementos desde o Browser, a janela do browser, o  documento e cada elemento html que formam os conteúdos.
*/

// PARA MANIPULAR O DOM PRECISAMOS
// indicar qual objeto usar, depois
// chamar um método(função) para
// selecionar ele, seus dados, trazer informações, etc.

let titulo = document.querySelector("#titulo"); // Peguei meu id titulo do meu codigo html e armazenei na variavel.
titulo.textContent = "Aula 07 - Manipulando o DOM"; // Para mudar o nome, chamamos a variável e a propriedade textContent e atribuimos um novo valor

// o textContent é uma propriedade ou atributo responsável por pegar informações do texto ou até modificar essas informações

// Obs: se eu selecionar um elemento que contém vários iguais, ele seleciona sempre o primeiro. Para resolver:
let boxAll = document.querySelectorAll(".titulo"); // esse método gera um array lista com todas as classes
boxAll[0].textContent = "Texto do Box 1";
boxAll[1].textContent = "Texto do Box 2";
boxAll[2].textContent = "Texto do Box 3";

// Nota que eu criei um parágrafo vazio com uma classe .novoValor. Eu posso atribuir um novo valor agora a ela
let novoValor = document.querySelector(".novoValor");
novoValor.textContent = "Aqui é um novo parágrafo.";

// Inclusive, eu posso pegar o conteúdo de uma classe e armazenar em uma variável e mostrar em outro seletor
let pegarTitulo = document.querySelector("#titulo").textContent;
let js = document.querySelector(".js");
js.textContent = pegarTitulo;

// Pegando os textos
let textos = (document.querySelector(".textos").textContent =
  "Texto 1 alterado");
// Repare que tem vários seletores que contém o nome .textos mas apenas um elemento conseguimos pegar. Para resolver, especifica a posição utilizando querySelectorAll
let texto2 = document.querySelectorAll(".textos");
texto2[1].textContent = "Texto 2 alterado";
texto2[2].textContent = "Texto 3 alterado";

// Também tem outros métodos como opções para o querySelector que são:
document.getElementsByTagName(); // Aqui é um métood que pega elementos pelo nome da tag
document.getElementsByClassName(); // aqui pela classe
document.getElementById(); // e aqui por id

// entretando, o mais recomendado e moderno é utilizar o querySelector() ou querySelectorAll
