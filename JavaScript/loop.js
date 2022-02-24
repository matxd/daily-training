for(let inc = 0; inc < 2; inc++){
    console.log(`For // ${inc}`)
}

let number = [5, 15, 25] 
for(let dec = number.length - 1; dec >= 0; dec--){ 
    console.log(`chave: ${dec} // valor: ${number[dec]}`)
}

let numberTwo = [10, 20, 30]
let result = 0
for(let value of numberTwo){
    result += value
}
console.log(`A soma de todos os valores do numberTwo é: ${result}`)

let count = 0
while(count < 5){ 
    count % 2 === 0 ? console.log(`${count} - Par`) : console.log(`${count} - Impar`)
    ++count 
}

let inc = 0
do{ 
    inc += 2 
} while(inc < 5) 
    console.log(`O resultado é: ${inc}`) 