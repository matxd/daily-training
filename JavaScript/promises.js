const promiseBasic = new Promise((resolve, reject) => { // promises é um tipo de estrutura que permite “encapsular” operações assíncronas
    let multiplica = 5 * 2
    if(multiplica === 10){
        resolve("Promessa resolvida!")
    } else {
        reject("Promessa rejeitada!")
    }
})

promiseBasic.then((resultado) => { // then = promise resolve
    console.log(`Esse é o valor do resolved: ${resultado}`)
}).catch((erro) => { // catch = promise reject
    console.error(`Esse é o valor do rejected: ${erro}`)
}).finally(() => { 
    console.log("O finally sempre será executando independente do resultado da promise")
})

const promiseUm = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Promise 01 resolvida!"), 1000)
})

const promiseDois = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Promise 02 resolvida!"), 500)
})

const promiseTres = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Promise 03 resolvida!"), 100)
})

Promise.race([promiseUm, promiseDois, promiseTres]).then((retorno) => { console.log(retorno) }) // race retorna a primeira promise resolvida ou rejeitada

Promise.all([promiseUm, promiseDois, promiseTres]).then((retorno) => { console.log(retorno) }) // all retorna todas as promises resolvidas ou rejeitadas


const sync1500 = () => new Promise((resolve, reject) => {
    setTimeout(() => resolve("Sync 1500 milisegundos resolvido!"), 1500)
})

const sync500 = () => new Promise((resolve, reject) => {
    setTimeout(() => resolve("Sync 500 milisegundos resolvido!"), 500)
})

const promisesAsync = async () => { // async transforma sincronas em assincronas
    const resultUm = await sync1500() // await é o modo de espera pra ser executado os proximos comandos
    const resultDois = await sync500()

    console.log(` ${resultUm} \n ${resultDois}`)
}

promisesAsync()