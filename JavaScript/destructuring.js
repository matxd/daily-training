const arrayD = ["xd", "developer", "bitcoin"]
const [um, dois, tres] = arrayD
console.log(um, dois, tres)

const objD = {prop: "Matheus", prop2: "JavaScript"}
const {prop: nome, prop2: lang} = objD
console.log(nome, lang)

let a, b
[a, b = 2] = [1]
console.log(a, b)

const userID = ({id}) => id
const userName = ({displayName: abreviado, fullName: {firstName: primeiroNome}}) => console.log(`${abreviado} is ${primeiroNome}`)
const user = {
    id: 777,
    displayName: "jdoe",
    fullName: {
        firstName: "John",
        lastName: "Doe"
    }
}
console.log(`userID: ${userID(user)}`)
userName(user)

const key = "z"
const {[key]: palavras} = {z: "Destructuring"}
console.log(palavras)