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

let cor = "azul"
const developer = {
    digaOi(nome){ 
        return `Oi, ${nome}` 
    },
    cor 
}
console.log(developer.digaOi("Matheus")) 

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

manipular.atual = 0
console.log(manipular.atual)

const esteObj = {
    game: "CSGO",
    arrow: function(){
        console.log( (() => this)() ) // this - referencia ao contexto deste objeto
    }
}
esteObj.arrow()

const arrayChaves = Object.keys(dados)
const arrayValores = Object.values(developer) 
const merge = Object.assign({}, dados, developer) 

const arrayEntrada = [
    ["abc", 2],
    ["dfe", 4]
]

const retornoObjeto = Object.fromEntries(arrayEntrada)

const objetoEntrada = {
    abc: 2,
    dfe: 4
}

const retornoArray = Object.entries(objetoEntrada)