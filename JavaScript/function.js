function login(){
let usuario = document.getElementById("user").value
let senha = document.getElementById("pass").value

    if(usuario == 0 || senha == 0){
        msgLogin.innerHTML = "Preencha todos os campos."
    } else if(usuario == "admin" && senha == "admin"){
        msgLogin.innerHTML = "Login feito com sucesso."
    } else{
        msgLogin.innerHTML = "Usuario ou Senha invalido."
    }  
    document.getElementById("user").value = ""
    document.getElementById("pass").value = ""
}

function calculator(){
let valorUm = Number(prompt("Digite um número"))
let operador = prompt("Digite um operador. Ex: + , - , / , *, %")
let valorDois = Number(prompt("Digite outro número"))

    if(isNaN(valorUm) || isNaN(valorDois)){ // isNaN(variavel) verifica se o valor da variavel retorna um numero ou não
        msgCalc.innerHTML = "<strong>ERROR: Digite um número.</strong>"
    } else {
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
            break;
        }
    }
}

function parametro(...compl){  // ...nome serve pra adicionar mais parametros, todos no mesmo array
    console.log(compl)
}
parametro("xdm", "expoit")

var funcaoAnonima = function(){ // função anônima não tem nome, é armazenada dentro de uma variavel
    console.log("Função Anônima JavaScript")
}
funcaoAnonima()

function callBack(a, b, soma){ // função de callback são funções que os param. são outra função que vai ser executada dentro dela
    return soma(a + b)
}
console.log(callBack(5, 5, function(total){ // param. "total" vai receber o valor do param. "soma" e executar o bloco de codigo
    return total * 2 
}))
