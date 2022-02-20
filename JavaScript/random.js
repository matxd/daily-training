// var = cria variáveis com escopo global
// let = cria variáveis com escopo local
// const = cria variáveis com escopo local porém não pode ser re-atribuida, podendo ser modificada por uma propriedade
// null, undefined, "", false e 0 são todos valores default false

let string = "Boa noite Matheus"
console.log(string.replace("Matheus", "xd"))
console.log(string.textContent = "Testando")

let dias = 7
dias > 15 ? console.log("Correto") : console.log("Incorreto")

var a = 1
console.log(a++)
console.log(++a) 