/* # Exercício 2
Declare e invoque as funções abaixo:

a) Uma função que recebe 2 números como parâmetros e que imprime a soma deles. Invoque a função e verifique o resultado no console. */

const soma = (n1, n2) => {
    let calcular = n1 + n2
    console.log(`A soma dos 2 numero é de: ${calcular}`)
}

soma(5,5)


/*b) Uma função que recebe 2 números e imprime um booleano que informa se o primeiro número é **maior ou igual** ao segundo.*/

const comparacao = (number1, number2) => {
    const comparacao2 = number1 >= number2
    console.log(comparacao2)
}

comparacao(10, 2)

/*c) Uma função que recebe um número e imprime no console um booleano informando se o número é par ou não.*/

const par = (numero) => {
    const resultado = numero % 2 === 0
    console.log(resultado)
}

par(5)

/* d) Uma função que recebe um salário bruto e retorna o salário líquido com desconto de 10%, referente ao INSS. */

const salario = (salarioBruto) => {
    const descontoINSS = 0.1
    const salarioLiquido = salarioBruto - (salarioBruto * descontoINSS)
    return salarioLiquido

}

const salarioBruto = 2000
const salarioLiquido = salario(salarioBruto) // quando chamo o salario e atribuo valor a (salarioBruto) é executada a função
console.log(salarioLiquido)



