// var = cria variáveis com escopo global
// let = cria variáveis com escopo local
// const = cria variáveis com escopo local porém não pode ser re-atribuida, mas pode ser modificada por uma propriedade

function loop(){
    let numUm = Number(document.getElementById("n1").value)
    let numDois = Number(document.getElementById("n2").value)
    let i = 0
    let resultado = ''

    if(numUm == 0 || numDois == 0){
        msgLoop.innerHTML = "Digite os valores."
    } else {
        do{
            i += 1
            resultado = numUm + numDois++
    }   while(i < 10)
            msgLoop.innerHTML = `O resultado desse calculo é: ${resultado}`
    }   
    document.getElementById("n1").value = ""
    document.getElementById("n2").value = ""
}

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

let string = "Boa noite Matheus"
console.log(string.replace("Matheus", "xd"))

if(string.includes("Boa", 0)){
    console.log("Palavra encontrada")
} else {
    console.log("Palavra não encontrada")
}

let dias = 7
dias > 15 ? console.log("Correto") : console.log("Incorreto") // IF simples (OPERADOR TERNARIO)

let array = ["xdm", "matheus", "esb", "tyler", "cash"]
console.log(array.slice(1, 2)) // slice cria um novo array a partir de um existente, dois indices sem incluir o indice final.
console.log(array.pop()) // pop remove o ultimo elemento do array
console.log(array.push("expoit")) // push adiciona um elemento na ultima posição do array

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
        }
    }
}

const dados = {
    nome: "Matheus",
    email: "xdev@gmail.com", 
    telefone: 61123456789
}
console.log(dados.nome)
