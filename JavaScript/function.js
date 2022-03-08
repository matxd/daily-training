function parametro(...complementares){ 
    console.log(complementares)
}
parametro("xdm", "dev")

let fnAnonima = function(){ 
    console.log("Função Anônima JS")
}
fnAnonima()

function fnCallBack(a, b, soma){ 
    return soma(a + b)
}
console.log(fnCallBack(5, 5, function(total){ 
    return "CallBack: " + total * 2 
}))

let arrowFn = (valor, valorDois) => valor / valorDois  
console.log("ArrowFunction: " + arrowFn(44, 4))

let arrowNoArg = () => console.log("Sem passar argumentos")
arrowNoArg()

let IIFE = (function(){
    return `Função IIFE`
})()
console.log(IIFE)

function thisNew(){
    this.nome = "Matheus"
    this.telefone = 123456789
}

let valores = new thisNew()
console.log(valores)

function callApplyBind(p1, p2){
    console.log(this)
    console.log(p1, p2)
}

let valorThis = "Esse é o valor de this"
callApplyBind.call(valorThis, "pCall", 123) // lista de argumentos
callApplyBind.apply(valorThis, ["pApply", 456]) // array de argumentos
let box = callApplyBind.bind(valorThis, "pBind", 789)
box()

// new instancia um objeto

function retornaFn(){
    return function(){
        console.log("Função que retorna outra função!")
    }
}

retornaFn()() // executa a primeira function e executa o retorno no segundo parenteses