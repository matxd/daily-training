const dados = {
    nome: "xdm",
    email: "xdev@gmail.com", 
    tel: 61123456789
}

dados.ano = 2022 
dados.array = ["valorUm", "valorDois"]
dados.obj = {
    key: 1,
    keys: [3, 4, 5]
}

let { nome, tel } = dados 
let { email: contato } = dados 
let { obj: { keys }} = dados 

delete dados.tel 

let cor = "preto"
const developer = {
    digaOi(nome){ 
        return `Oi, ${nome}` 
    },
    cor 
}
console.log(developer.digaOi("Matheus")) 

let chaves = Object.keys(dados) 
let valores = Object.values(developer) 
let merge = Object.assign({}, dados, developer) 

const usuarios = [
    {nome: "Fulano", idade: 18, profissão: "Professor"},
    {nome: "Ciclano", idade: 25, profissão: "Médico"},
    {nome: "Beltrano", idade: 40, profissão: "Mecânico"}
]
    
const manipular = {
    posicao: 0,
    get proximo(){ 
        return usuarios[++this.posicao] 
    },
    get anterior(){
        return usuarios[--this.posicao]
    },
    get atual(){
        return usuarios[this.posicao]
    },
    set atual(posicao){ 
        return this.posicao = posicao
    }
}