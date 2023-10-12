// Para instanciar um array em js, utilizamos:
let alimentos = ['Arroz', 'Feijão', 'Leite']
let codigos = Array(10, 20, 30)
// A forma mais recomendada e utilizada é a primeira.

// Alguns métodos para uso de arrays
// ADICIONAR: esse método adiciona valores no final do array(Depois de 'Leite')
alimentos.push('Açúcar', 'Trigo')
codigos.push(40, 50)

// REMOVER: esse método remove do final.
alimentos.pop() // independente de passar valores, o pop sempre remove a ultima posição do array
codigos.pop() // saída: 50 foi removido 


// ADICIONAR NO ÍNICIO: esse método adiciona valores no início do array
alimentos.unshift('Macarrão', 'Coca-Cola')
codigos.unshift(8, 9)

// REMOVER DO INÍCIO: esse método ele remove arrays do ínicio, ou seja, dá posição do índice 0
alimentos.shift()
codigos.shift()

// REMOVER DE UMA POSIÇÃO ESPECÍFICA: removo um elemento a partir da posição 1 até a posição 2
alimentos.splice(1, 2)

// CLONAR ARRAYS: esse método ele copia um array original. Como ele copia um array, então precisa criar um let
let novoAlimentos = alimentos.slice()
let alimentosMaisUsados = alimentos.slice(0, 2) // Também podemos especificar qual posição queremos copiar, a partir do 0, eu quero pegar 2 valores e armazenar em uma nova variável

// VER O TAMANHO(COMPRIMENTO) DOS ARRAYS: esse método mostra o tamanho do array.
// alimentos.length()
// codigos.length()
// novoAlimentos.length()
// alimentosMaisUsados.length()

// spreed operator... é um novo recurso do Java Script, ele serve para copiar um array, já podendo adicionar novos elementos dentro dele.
let spreedOperator = [...alimentos, 'Alface', 'Pera'] // Chamamos o array alimentos e adiciondos respectivamente dois novos alimentos. O spreed operator sempre adiciona nas últimas posições

// PEGANDO POSIÇÕES DO ARRAY E MANIPULANDO:
// Podemos pegar a posição de um array para imprimir o valor dele
console.log(alimentos[0])

// Podemos ALTERAR também essa posição, adicionando outra no lugar dela
alimentos[1] = 'Feijão Preto' // Nota-se que alteramos o valor da posição 0

console.log(alimentos)
console.log(codigos)
console.log(novoAlimentos)
console.log(alimentosMaisUsados)
console.log(spreedOperator)

