/* # Exercício 3


a) Crie 4 funções. 
Cada função deve receber dois parâmetros numéricos e retornar o valor de uma das operações básicas (soma, subtração, multiplicação e divisão). */


//soma
const soma = (n1, n2) => {
const resultado = n1 + n2
return resultado
}



// subtração
const subtracao = (n1, n2) => {
    const resultado = n1 - n2
    return resultado
    }
    
   

// multiplicação

const multiplicacao = (n1, n2) => {
    const resultado = n1 * n2
    return resultado
    }
    
 

// divisao

const divisao = (n1, n2) => {
    
    const resultado = n1 / n2
    return resultado
    }
    
  


// b) Em seguida, fora das funções, receba do usuário dois números e armazene-os em variáveis.

let n1 = Number(prompt('Por favor digite um numero'))
let n2 = Number(prompt('Por favor digite um numero'))

// c) Invoque cada uma das 4 funções, passando como argumento os dois números recebidos do usuário.

soma(n1, n2)

subtracao(n1, n2)

multiplicacao(n1, n2)

divisao(n1, n2)

// d) Por fim, crie variáveis para receber o retorno de cada uma das funções e imprima o resultado das operações no console.

const resultadoSoma = soma(n1, n2)
console.log(`A Soma dos 2 numeros é de: ${resultadoSoma}`)

const resultadoSubtracao = subtracao(n1, n2)
console.log(`O resultado da Subtração é de: ${resultadoSubtracao}`)

const resultadoMultiplicao = multiplicacao(n1, n2)
console.log(`O resultado da Multiplicação é de: ${resultadoMultiplicao}`)

const resultadoDivisao = divisao(n1, n2)
console.log(`O resultado da Divisão é de: ${resultadoDivisao.toFixed(2)}`)



