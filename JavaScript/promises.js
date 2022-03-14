const promiseUm = new Promise((resolve, reject) => {
    let multiplica = 5 * 2
    if(multiplica === 9){
        resolve("Promessa resolvida!")
    } else {
        reject("Promessa rejeitada!")
    }
})

promiseUm.then((resultado) => { // then = promise resolve
    console.log(`Esse é o valor do resolved: ${resultado}`)
}).catch((erro) => { // catch = promise reject
    console.error(`Esse é o valor do rejected: ${erro}`)
}).finally(() => { 
    console.log("O finally sempre será executando independente do resultado da promise")
})