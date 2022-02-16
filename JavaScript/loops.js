for(let inc = 0; inc < 2; inc++){ // FOR - 1­° inicializador, 2° condição pro loop ser falso e 3° incremento
    console.log(`For // ${inc}`)
}

let array = [5, 15, 25] // FOR - decremento de um array começa do ultimo indice até o primeiro, - 1 pra retornar o valor do ultimo indice
for(let dec = array.length - 1; dec >= 0; dec--){ 
    console.log(`key: ${dec} // value: ${array[dec]}`)
}

let random = [10, 20, 30]
for(let value of random){ // FOR OF - forma mais simples de executar o FOR, value recebe o valor de numeros a cada laço (sem indice)
    console.log(value)
}

let count = 0
while(count < 5){ // WHILE se lê enquanto, primeiro testa a condição e depois executa
    if(count % 2 == 0){ // % operador matematico que verifica se a divisão tem resto e retorna inteiro
        console.log(`${count} - Par`)
    } else{ 
        console.log(`${count} - Impar`)
    }
    ++count // ++ incrementa o contador em 1 a cada loop
}

let inc = 0
do{ // DO...WHILE sempre vai ser executado pelo menos uma vez, primeiro executa e depois testa a condição
    inc += 2 // incremento  
} while(inc < 0) // enquanto a condição for verdadeira vai voltar pro '' DO ''
    console.log(`O resultado é: ${inc}`) // resultado final quando a condição é falsa