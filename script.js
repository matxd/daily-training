// var = cria variáveis globais
// let = cria variáveis locais

function loop(){
    let numUm = Number(document.getElementById("n1").value)
    let numDois = Number(document.getElementById("n2").value)
    let i = 0
    let resultado = ''

    do{
        i += 1
        resultado = numUm + numDois++
    } while(i < 10)
    alert("O resultado desse calculo é: " + resultado)
    document.getElementById("n1").value = ""
    document.getElementById("n2").value = ""
}

function login(){
    let usuario = document.getElementById("user").value
    let senha = document.getElementById("pass").value

    if(usuario == 0 || senha == 0){
        alert("Preencha todos os campos.")
    } else if(usuario == "admin" && senha == "admin"){
        alert("Login feito com sucesso.")
    } else{
        alert("Usuario ou Senha invalido.")
    }  
    document.getElementById("user").value = ""
    document.getElementById("pass").value = ""
}

var string = "Boa noite Matheus"
console.log(string.replace("Matheus", "xd"))

if (string.includes("Boa", 0)){
    console.log("Palavra encontrada")
} else {
    console.log("Palavra não encontrada")
}

var dias = 7
dias > 2 ? console.log("Correto") : console.log("Incorreto") // IF simples (OPERADOR TERNARIO)

var array = ["xdm", "matheus", "esb", "tyler", "cash"]
console.log(array.slice(1, 2)) // slice cria um novo array a partir de um existente, dois indices sem incluir o indice final.
console.log(array.pop()) // pop remove o ultimo elemento do array
console.log(array.push("expoit")) // push adiciona um elemento na ultima posição do array

function calculadora(){
    let valorUm = Number(prompt("Insira um numero"))
    let valorDois = Number(prompt("Insira outro número"))
    let operador = prompt("Digite um operador. Ex: + , - , / , *")

    switch(operador){
        case "+":
            resultado.innerHTML = `<p>${valorUm} + ${valorDois} é igual a:</p>` + (valorUm + valorDois)
        break;
        case "-":
            resultado.innerHTML = `<p>${valorUm} - ${valorDois} é igual a:</p>` + (valorUm - valorDois)
        break;
        case "*":
            resultado.innerHTML = `<p>${valorUm} * ${valorDois} é igual a:</p>` + (valorUm * valorDois)
        break;
        case "/":
            resultado.innerHTML = `<p>${valorUm} / ${valorDois} é igual a:</p>` + (valorUm / valorDois)
        break;
        default:
    }
}

