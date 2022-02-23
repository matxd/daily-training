for(let inc = 0; inc < 2; inc++){
    console.log(`For // ${inc}`)
}

let array = [5, 15, 25] 
for(let dec = array.length - 1; dec >= 0; dec--){ 
    console.log(`key: ${dec} // value: ${array[dec]}`)
}

let random = [10, 20, 30]
let result  = 0
for(let value of random){
    result += value
}
console.log(`A soma de todos os valores do array é: ${result}`)

let count = 0
while(count < 5){ 
    if(count % 2 == 0){ 
        console.log(`${count} - Par`)
    } else{ 
        console.log(`${count} - Impar`)
    }
    ++count 
}

let inc = 0
do{ 
    inc += 2 
} while(inc < 0) 
    console.log(`O resultado é: ${inc}`) 