const EventEmitter = require("events")
const fs = require("fs")
const emitter = new EventEmitter()

emitter.on("exec", (message) => {
    console.log(message)
})

function exec(message){
    emitter.emit("exec", message)
}

module.exports = exec // exportando a função exec, podendo ser usado em outra aplicação