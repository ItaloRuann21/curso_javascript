let n1 = 10 //int
let n2 = 2 //int
let n3 = "2" //string

document.write(`N1 ${n1} <br>`)
document.write(`N2 ${n2} <br>`)
document.write(`N3 ${n3} <br>`)

// operadores aritméticos
console.log(n1 + n2) // adicao
console.log(n1 - n2) // subtracao
console.log(n1 * n2) // multiplicacao
console.log(n1 ** n2) // potência (n1 elevado a n2)
console.log(n1 / n2) // divisao
console.log(n1 % n2) // resto ou modulo

// operadores de comparação
console.log(n2 == n3)  // igual a (o valor precisa ser igual, independente do tipo primitivo)
console.log(n2 === n3) // identico a. (o valor e o tipo primitivo precisam ser iguais)
console.log(n2 != n3)  // diferente de Nao=
console.log(n2 !== n3) // Nao e identico
console.log(n1 > n2) // maior que
console.log(n1 < n2) // menor que
console.log(n1 >= n2) // maior ou igual a
console.log(n1 <= n2) // menor ou igual a

// operadores lógicos
let a = true
let b = false
console.log(a && b) // E AND - As duas variáveis precisam ser verdadeiras. saída: false
console.log(a || b) // OU OR - Apenas uma variável precisa ser verdadeira. saída: true
console.log(!a) // NAO NOT - inverte a condição da variável. saída: false
console.log(!b) // NAO NOT - saída: true