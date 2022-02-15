// var = cria variáveis com escopo global
// let = cria variáveis com escopo local
// const = cria variáveis com escopo local porém não pode ser re-atribuida, mas pode ser modificada por uma propriedade
// null, undefined, "", false e 0 são todos valores falsos por padrao

let string = "Boa noite Matheus"
console.log(string.replace("Matheus", "xd"))
console.log(string.textContent = "Testando")

let dias = 7
dias > 15 ? console.log("Correto") : console.log("Incorreto") // IF simples (OPERADOR TERNARIO)

var a = 1
console.log(a++) // a vai ser incrementado com atraso pois o console é executado primeiro
console.log(++a) // a vai ser incrementado e depois exibido no console com o incremento atrasado do console de cima