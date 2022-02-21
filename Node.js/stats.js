const os = require("os")
const exec = require("./logger") // requisitando uma função no arquivo "logger"

setInterval(() => { // setInterval com uma ArrowFunction passando todo o bloco de código
    const { freemem, totalmem } = os
    const free = parseInt(freemem() / 1024 / 1024)
    const total = parseInt(totalmem() / 1024 / 1024)
    const usage = parseInt((1 - free / total) * 100)
    const stat = {
        free: `${free} MB`,
        total: `${total} MB`,
        usage: `${usage}%`
    }

console.clear()
console.table(stat)
exec("Rodando...")
}, 1000) // setando o tempo em milissegundos