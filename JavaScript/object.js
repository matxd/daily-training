const dados = {
    nome: "xdm",
    email: "xdev@gmail.com", 
    tel: 61123456789
}

dados.ano = 2022 // adicionando novas prop. a um obj criado
dados.array = ["valorUm", "valorDois"]
dados.obj = {
    key: 1,
    keys: [3, 4, 5]
}

let { nome, tel } = dados // armazenando uma prop. do obj em uma variavel
let { email: contato } = dados // armazenando prop. e escolhendo a variavel
let { obj: { keys }} = dados // armazenando prop. de um obj que é outro obj

delete dados.tel // deleta uma prop. do obj

let cor = "preto"
const developer = {
    digaOi(nome){ // função dentro da prop. do obj 
        return `Oi, ${nome}` 
    },
    cor // adicionando variavel ao valor de uma prop.
}
console.log(developer.digaOi("Matheus")) // chamando uma prop. e passando o valor do parametro

let merge = Object.assign({}, dados, developer) // Object.assign serve pra mergear/juntar dois ou mais obj's em um novo obj ( {} - novo obj )

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