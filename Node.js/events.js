const EventEmitter = require("events")
const fs = require("fs") // requisitando o modulo de arquivos do sistema ou file systema
const path = require("path")
const emitt = new EventEmitter()

emitt.on("exec", (mensagem) => {
    fs.appendFile(path.join(__dirname, "box.txt"), `${mensagem}`, (erro) => {
        if(erro) throw erro
    })
})

function exec(mensagem){
    emitt.emit("exec", mensagem)
}

module.exports = exec // exportando a função exec, podendo ser usado em outra aplicação