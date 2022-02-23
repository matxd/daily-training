function login(){
let usuario = document.getElementById("user").value
let senha = document.getElementById("pass").value

    if(usuario === 0 || senha === 0){ 
        return msgLogin.innerHTML = "Preencha todos os campos." 
    } if(usuario === "admin" && senha === "admin"){ 
        return msgLogin.innerHTML = "Login feito com sucesso." 
    } 
    msgLogin.innerHTML = "Usuario ou Senha invalido." 
    document.getElementById("user").value = ""
    document.getElementById("pass").value = ""
}

function calculator(){
let valorUm = Number(prompt("Digite um número"))
let operador = prompt("Digite um operador. Ex: + , - , / , *, %")
let valorDois = Number(prompt("Digite outro número"))

    if(isNaN(valorUm) || isNaN(valorDois)){ 
        return msgCalc.innerHTML = "<strong>ERROR: Digite um número.</strong>"
    }
    switch(operador){
        case "+":
            msgCalc.innerHTML = `${valorUm} + ${valorDois} é igual a: ` + (valorUm + valorDois)
        break;
        case "-":
            msgCalc.innerHTML = `${valorUm} - ${valorDois} é igual a: ` + (valorUm - valorDois)
        break;
        case "*":
            msgCalc.innerHTML = `${valorUm} x ${valorDois} é igual a: ` + (valorUm * valorDois)
        break;
        case "/":
            msgCalc.innerHTML = `${valorUm} dividido por ${valorDois} é igual a: ` + (valorUm / valorDois)
        break;
        case "%":
            msgCalc.innerHTML = `${valorUm}% de ${valorDois} é igual a: ` + ((valorDois / 100) * valorUm)
        break;
        default:
            msgCalc.innerHTML = "<strong>ERROR: Operador inválido.</strong>"
    }
}

function parametro(...compl){ 
    console.log(compl)
}
parametro("xdm", "dev")

let funcaoAnonima = function(){ 
    console.log("Função Anônima JS")
}
funcaoAnonima()

function callBack(a, b, soma){ 
    return soma(a + b)
}
console.log(callBack(5, 5, function(total){ 
    return "CallBack: " + total * 2 
}))

let arrowFn = (valor, valorDois) => valor / valorDois  
console.log("ArrowFunction: " + arrowFn(44, 4))

let arrowNoArg = () => console.log("Sem passar argumentos")
arrowNoArg()

function thisNew(){
    this.nome = "Matheus"
    this.telefone = 123456789
}

let dados = new thisNew()
console.log(dados)

function callApplyBind(p1, p2){
    console.log(this)
    console.log(p1, p2)
}

let valorThis = "Esse é o valor de this"
callApplyBind.call(valorThis, "pCall", 123) 
callApplyBind.apply(valorThis, ["pApply", 456]) 
let box = callApplyBind.bind(valorThis, "pBind", 789) 
box()