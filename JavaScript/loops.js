let numeros = [10, 20, 30]
for(let value of numeros){ // VALUE recebe o valor de NUMEROS a cada laço (sem indice)
    console.log(value)
}

let numUm = 5
let numDois = 5
let i = 0
let result = ""

do{
    i += 1
    result = numUm + numDois++
} while(i < 10)
    console.log(`O resultado desse calculo é: ${result}`)
