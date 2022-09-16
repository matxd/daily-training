let words = ["Xdm", "Matheus", "Esb", "Ty", "Cash"]
let arrayNumbers = [3, 2, 1, 5]
const novoArray = [...words, ...arrayNumbers] // espalha os valores do array

words.unshift("newWord") // adiciona elemento na primeira posição
words.shift() // remove elemento da primeira posição

words.slice(1, 2) // retorna uma cópia do array com os valores do indice passado, não modifica array original
words.splice(0, 1) // remove o elemento de acordo com o indice passado

words.pop() // remove o elemento da ultima posição
words.push("Expoit") // adiciona o elemento na ultima posição
words.includes("Xdm") // verifica se o valor existe

words.filter((primeiraLetra) => primeiraLetra[0] === "M")
words.map((word) => word.toLowerCase())
arrayNumbers.map((number) => number * 2) // itera sobre o array e retorna o array modificado
arrayNumbers.filter((number) => number % 2 === 0) // itera sobre o array e filtra o que foi pedido retornando um novo array
arrayNumbers.reduce((vAcumulador, vAtual) => vAcumulador + vAtual, 0) // itera sobre o array e reduz de acordo com o codigo, tendo como segundo argumento o valor inicial do acumulador

arrayNumbers.sort((a, b) => a - b)

let alunos = [
    {nome: "matHeus", idade: 16, nota: 8.5},
    {nome: "FelIpe", idade: 15, nota: 9.3},
    {nome: "gustAVo", idade: 14, nota: 3.2},
    {nome: "REnAn", idade: 17, nota: 5.5}
]

let media = 6

alunos.filter((valor) => valor.nota >= media)
alunos.filter((valor) => valor.nota < media)
alunos.map((maiusc) => Object.assign(maiusc, {nome: maiusc.nome.toUpperCase()}))

// ============== EXERCICIOS MAP, FILTER, REDUCE ==============

/*
  01
  - Gere um novo array com apenas os números ímpares do array abaixo e exiba 
    o novo array no console.
  Dica: pesquise por remainder operator (%).
*/

const randomNumbers = [10, 30, 15, 25, 50, 40, 5]
const arrayImpar = randomNumbers.filter((number) => number % 2 === 1)

/*
  02
  - Exiba no console quantos números abaixo de 501 o array abaixo possui.
*/

const crazyNumbers = [937, 5, 395, 402, 501, 333, 502, 781, 3, 691]
const menorQue501 = crazyNumbers.reduce((accumulator, number) => number < 501 ? accumulator + 1 : accumulator, 0)

/*
  03
  - Gere um novo array com cada um dos números abaixo elevados ao quadrado e 
    exiba o novo array no console.
  
  Dica: pesquise por exponentiation operator (**).
*/

const numbers = [5, 7, 3]
const elevado = numbers.map((number) => number ** 2)

/*
  04
  - Utilizando o array abaixo, gere um novo array com apenas os filmes 
    lançados antes do ano 2000;
  - Exiba o novo array no console.
*/

const tarantinoMovies = [
  { name: 'Bastardos inglórios', release: 2009 },
  { name: 'Pulp Fiction', release: 1994 },
  { name: 'Kill Bill: Volume 2', release: 2004 },
  { name: 'Quatro Quartos', release: 1995 },
  { name: 'Sin City', release: 2005 },
  { name: 'Era uma Vez em... Hollywood', release: 2019 },
  { name: 'Django Livre', release: 2012 },
  { name: 'Cães de Aluguel', release: 1992 },
  { name: 'À Prova de Morte', release: 2007 },
  { name: 'Kill Bill: Volume 1', release: 2003 }
]

const filmesAntesDosAnos2000 = tarantinoMovies.filter(({ release }) => release < 2000)

/*
  05
  - Gere um novo array que contém apenas os nomes das séries abaixo;
  - Exiba o novo array no console.    
*/

const tvShows = [
  { name: 'Breaking Bad', releaseYear: 2008 },
  { name: 'Mr. Robot', releaseYear: 2015 },
  { name: 'True Detective', releaseYear: 2014 },
  { name: 'Hannibal', releaseYear: 2013 },
  { name: 'The Handmaid\'s Tale', releaseYear: 2017 },
  { name: 'House M.D.', releaseYear: 2004 },
  { name: 'Watchmen', releaseYear: 2019 }
]

const nomesSeries = tvShows.map(({ name }) => name)

/*
  06
  - Exiba no console uma lista dos nomes dos jogos do array abaixo;
  - A lista deve ter a formatação exemplificada abaixo do array, considerando 
    inclusive o traço e o espaço antes de cada nome.
  
  Dica: para quebrar linha, você pode usar dentro da string o caractere 
  especial \n.
*/

const cart = [
  { name: 'Dark Souls III', price: 95.03 },
  { name: 'Shadow of the Tomb Raider', price: 101.19 },
  { name: 'Sekiro: Shadows Die Twice', price: 179.99 },
  { name: 'Resident Evil 2', price: 119.90 },
  { name: 'Death Stranding', price: 149.99 }
]

const nomesJogos = cart.reduce((accumulator, { name }) => `${accumulator}- ${name}\n`, '')

/*
- Nome 1
- Nome 2
- Nome 3
*/