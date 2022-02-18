const dados = {
    name: "xd",
    email: "xdev@gmail.com", 
    tel: 61123456789
}

console.log(dados.tel)
console.log(dados["name"])

dados.ano = 2022 // adicionando novas propriedades a um objeto criado
console.log(dados.ano)

delete dados.tel // deleta uma propriedade do objeto
console.log(dados)

dados.array = ["valorUm", "valorDois"]
dados.obj = {
    keyZero: 1,
    keys: [3, 4, 5]
}
console.log(dados.obj.keyOne) // chamando uma propriedade de um objeto que está dentro de outro objeto

const cor = "preto"
const developer = {
    digaOi(name){ // função dentro da propriedade do objeto 
        return `Oi, ${name}` 
    },
    cor // adicionando variavel ao valor de uma propriedade
}
console.log(developer.digaOi("Matheus")) // chamando uma propriedade e passando o valor do parametro
console.log(developer.cor)


const merge = Object.assign({}, dados, developer) // Object.assign serve pra mergear/juntar dois ou mais objetos em um novo objeto ( {} - novo objeto )
console.log(merge)



const usuarios = [
    {nome: "Fulano", idade: 18, profissão: "Professor"},
    {nome: "Ciclano", idade: 25, profissão: "Médico"},
    {nome: "Beltrano", idade: 40, profissão: "Mecânico"}
]
    
const manipular = {
    posicao: 0,
    get proximo(){ // get associa uma prop. de um obj a uma função e retorna o valor
        return usuarios[++this.posicao] // this se refere a este obj
    },
    get anterior(){
        return usuarios[--this.posicao]
    },
    get atual(){
        return usuarios[this.posicao]
    },
    set atual(posicao){ // set liga a prop. da função quando existe uma tentativa de definir valor a essa prop.
        return this.posicao = posicao
    }
}

console.log(manipular.atual)

manipular.proximo
console.log(manipular.atual)

manipular.anterior
console.log(manipular.atual)

manipular.atual = 2
console.log(manipular.atual)