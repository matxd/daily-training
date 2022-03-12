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
    constructor(nome, idade, tipo, linguagem){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
        this.linguagem = linguagem   
    }    
    apresentacao(){
        console.log(`Me chamo ${this.nome}, tenho ${this.idade} anos, area de atuação ${this.tipo}, linguagem ${this.linguagem} e framework ${this.framework}.`)
    }
}

class FrontEnd extends Developer { // classe filha herdando classe pai
    constructor(nome, idade, tipo, linguagem, framework){
        super(nome, idade, tipo, linguagem) // chamando o construtor da classe pai
        this.framework = framework
    }
}

const pessoaUm = new FrontEnd("Matheus", 77, "FrontEnd", "JavaScript", "React Native")

pessoaUm.apresentacao()