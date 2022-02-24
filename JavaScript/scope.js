// Escopo global é tudo que você declara na raiz do seu script, sendo acessivel por toda a aplicação, geralmente criada com " var "

var global = "Este escopo é global"
var arrowGlobal = () => console.log(global)
arrowGlobal()

// Escopo local é tudo que você declara dentro de um escopo já existente, por exemplo o escopo de uma funçao.

function escopoLocal(){
    var localVar = "Escopo local criado com var por se tratar de uma function"
    console.log(localVar)
}
escopoLocal()

// Escopo local com " let " só vai existir dentro do bloco que ela foi criada, " var " não respeitaria o escopo local do bloco " if ".

if(true){
    let localLet = "Escopo local com let"
    console.log(localLet)
}

// Escopo local com " const " só vai existir dentro do bloco que ela foi criada porem não pode redeclarar e nem reatribuir o valor caso esteja no mesmo escopo, caso a constante receba um array ou objeto os valores podem mudar

if(true){
    const anoNascimento = 1995
    console.log(anoNascimento)
}

const array = ["JavaScript", "PHP"]
console.log(array)
array[1] = "React Native"
console.log(array)