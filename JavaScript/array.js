let words = ["Xdm", "Matheus", "Esb", "Ty", "Cash"]
let numbers = [3, 2, 1]
let esparso = [5,,6,,8]

console.log([...words, ...numbers]) 
console.log(words.slice(1, 2)) 
console.log(words.splice(0, 1)) 
console.log(words.pop()) 
console.log(words.push("Expoit")) 
console.log(words.includes("Xdm"))
console.log(words.map(word => word.toLowerCase()))
console.log(numbers.map(number => number * 2))
console.log(numbers.filter(number => number % 2 === 0))
console.log(numbers.reduce((valorAcumulador, valorArray) => valorAcumulador + valorArray, 0))
