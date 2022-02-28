function login(){
    const usuario = document.getElementById("user").value
    const senha = document.getElementById("pass").value

    if(usuario === "" || senha === ""){ 
        return msgLogin.innerHTML = "Preencha todos os campos." 
    } if(usuario === "admin" && senha === "admin"){    
        return msgLogin.innerHTML = "Login feito com sucesso." 
    }
    document.getElementById("user").value = ""
    document.getElementById("pass").value = "" 
    msgLogin.innerHTML = "Usuário ou Senha inválido." 
}

function calculator(){
    const valorUm = parseFloat(document.getElementById("numeroUm").value)
    const operador = document.getElementById("operadores").value
    const valorDois = parseFloat(document.getElementById("numeroDois").value)

    if(isNaN(valorUm) || isNaN(valorDois)){ 
        return msgCalc.innerHTML = "Digite um número."
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
            msgCalc.innerHTML = "Operador inválido."
    }
    document.getElementById("numeroUm").value = ""
    document.getElementById("numeroDois").value = ""
    document.getElementById("operadores").value = ""
}