let words = ["Xdm", "Matheus", "Esb", "Ty", "Cash"]
let numbers = [3, 2, 1, 5]
const novoArray = [...words, ...numbers] // espalha os valores do array

words.unshift("newWord") // adiciona elemento na primeira posição
words.shift() // remove elemento da primeira posição

words.slice(1, 2) // retorna uma cópia do array com os valores do indice passado, não modifica array original
words.splice(0, 1) // remove o elemento de acordo com o indice passado

words.pop() // remove o elemento da ultima posição
words.push("Expoit") // adiciona o elemento na ultima posição
words.includes("Xdm") // verifica se o valor existe

words.map(word => word.toLowerCase())
numbers.map(number => number * 2) // itera sobre o array e mapeia o que foi pedido retornando um novo array mapeado
numbers.filter(number => number % 2 === 0) // itera sobre o array e filtra o que foi pedido
numbers.reduce((vAcumulador, vAtual) => vAcumulador + vAtual, 0) // itera sobre o array e reduz de acordo com o codigo, tendo como segundo argumento o valor inicial do acumulador

numbers.sort((a, b) => a - b)
