// OBJETOS
let pessoa = {
    nome: 'Italo',
    idade: 23,
    peso: 70,
    altura: 1.70,
    doador: false
}

let produtos = {
    descricao: [],
    preco: []
}

const carros = {
    marca: ['Ford', 'Fiat', 'GM'],
    modelo: ['Ka', 'Uno', 'Corsa'],
    ano: [1999, 2005, 2010]
}

// Como acessar um atributo com .
pessoa.nome
pessoa.idade
pessoa.peso
pessoa.altura
// Acessar com ['']
pessoa['nome']
pessoa['idade']
pessoa['peso']
pessoa['doador']
pessoa['altura']

// Operação IMC = peso / (altura * altura)
let imc =  pessoa['peso'] / (pessoa.altura * pessoa.altura)

// Nota-se que o cálculo do imc está com números infinitos. Para resolver, utilizamos o método toFixed() para limitar o uso de casas decimais.
console.log(`IMC: ${imc.toFixed(2)}`)

// ALTERAR/ATUALIZAR VALOR DE ATRIBUTOS
pessoa.idade = 24 // com .
pessoa['peso'] = 1.71 // com ['']

// Alterando um valor do array pela posição
carros.marca[0] = 'Fusca'
carros['modelo'][0] = 'Volkswagen'
carros.ano[0] = 1978

// e pra adicionar novos valores? ai que vem o spreed operator :D
carros.marca = [...carros.marca, 'Lamborguini', 'Pop100']

carros['modelo'] = [...carros['modelo'], 'Modelo da lamborguini', 'Modelo da pop100']

carros.ano = [...carros.ano, 1999, 1977]