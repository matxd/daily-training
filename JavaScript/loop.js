for(let inc = 0; inc < 2; inc++){
    console.log(`For // ${inc}`)
}

let array = [5, 15, 25] 
for(let dec = array.length - 1; dec >= 0; dec--){ 
    console.log(`chave: ${dec} // valor: ${array[dec]}`)
}

let arrayDois = [10, 20, 30]
let result = 0
for(let value of arrayDois){
    result += value
}
console.log(`A soma de todos os valores do arrayDois é: ${result}`)

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