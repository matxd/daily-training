// O último item em um array é indexado em .length - 1, o último item sempre tem um índice que é 1 a menos que o comprimento da array
// Exemplo : o array.lenght tem 5 itens porém o ultimo item ta na posição 4

let array = ["xdm", "matheus", "esb", "tyler", "cash"]
let arrayDois = [3, 2, 1]

console.log([...array, ...arrayDois]) // ... concatena os valores dos arrays em um novo array
console.log(array.slice(1, 2)) // SLICE necessita de dois indices sem incluir o indice final no console
console.log(array.pop()) // POP remove o ultimo elemento do array
console.log(array.push("expoit")) // PUSH adiciona um elemento na ultima posição do array
console.log(array.includes("xdm")) // INCLUDES verifica se o valor chamado existe no array

const dados = {
    nome: "Matheus",
    email: "xdev@gmail.com", 
    telefone: 61123456789
}

console.log(dados.email)
let str = "nome"
console.log(dados[str]) // pode chamar através de uma variavel que faça referencia a string ou direto dentro dos colchetes passando a string