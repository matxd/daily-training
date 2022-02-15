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

function parametro(numero1 = 5, numero2 = 10){ // PARÂMETRO é usado na declaração da função
    return numero1 * numero2 // código no mesmo bloco após o RETURN é ignorado 
}

console.log(parametro(50, 20)) // ARGUMENTO é usado na chamada da função