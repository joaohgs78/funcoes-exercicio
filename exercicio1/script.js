/* a) Declare uma função que imprima `Olá, [SEU NOME]!`. Chame esta função. */



const meunome = (nome) => {

    const frase = `Olá, ${nome} !`
    console.log(frase)
}
meunome('Joao Lucas')

/* 
b) Declare uma função que receba um número como parâmetro e imprima no console 
a tabuada de 1 a 10 dele. Chame esta função várias vezes com números diferentes. */

const tabuada = (numero) => {
    let conta1 = numero * 1
    let conta2 = numero * 2
    let conta3 = numero * 3
    let conta4 = numero * 4
    let conta5 = numero * 5
    let conta6 = numero * 6
    let conta7 = numero * 7
    let conta8 = numero * 8
    let conta9 = numero * 9
    let conta10 = numero * 10

    console.log(`A tabuade de ${numero} é :
    ${conta1}
    ${conta2}
    ${conta3}
    ${conta4}
    ${conta5}
    ${conta6}
    ${conta7}
    ${conta8}
    ${conta9}
    ${conta10}
     `)
}

tabuada(5)


/*c) Comente as funções criadas acima, e reescreva-as utilizando expressões de função, ou __arrow functions__ */

// PRIMEIRA FUNÇÃO ME RETORNA MEU NOME

// SEGUNDA FUNÇÃO ME RETORNA A TABUADA DE UM NUMERO QUE EU DESEJAR


