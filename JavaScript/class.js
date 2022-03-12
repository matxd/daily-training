class Carro {
    constructor(nome, ano){
        this.nome = nome
        this.ano = ano
    }
}

const carroUm = new Carro("BMW X6", 2021)
const carroDois = new Carro("Audi A4", 2019)

console.log(carroUm)
console.log(carroDois)

class Developer { // classe pai
    constructor(nome, idade, linguagem){
        this.nome = nome
        this.idade = idade
        this.linguagem = linguagem
    }
}

class FrontEnd extends Developer { // classe filha herdando classe pai
    constructor(nome, idade, linguagem, framework){
        super() // chamando o construtor da classe pai
        this.nome = nome
        this.idade = idade
        this.linguagem = linguagem
        this.framework = framework
    }
    apresentacao(){
        console.log(`Me chamo ${this.nome}, tenho ${this.idade} anos, trabalho com ${this.linguagem} e com o framework ${this.framework}.`)
    }
}

const pessoaUm = new FrontEnd("Matheus", 20, "JavaScript", "React Native")

pessoaUm.apresentacao()