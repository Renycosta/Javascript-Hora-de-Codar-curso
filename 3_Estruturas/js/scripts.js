// 1 - Variáveis
let nome = "Matheus";
console.log(nome)
nome = "Matheus Battisti"
console.log(nome)

const idade = 31
console.log(idade)
// idade = 32

// 2 - mais sobre vaiáveis
//let 2teste = "inválido"
//let @teste = "inválido"

let a = 10, b = 20, c = 30
console.log(a, b, c)

const nomecompleto = "Matheus Battisti"
const nomeCompleto = "João da Silva"
console.log(nomecompleto)
console.log(nomeCompleto)

let _teste = "ok"
let $teste = "ok"
console.log(_teste, $teste)

// 3 - prompt
const age = prompt("Digite a sua idade")
console.log(`Você tem ${age} anos`)

// 4 - alert
alert("Testando")

const z = 10
alert(`${z}`)

// 5 - math
console.log(Math.max(5, 2, 1, 10))
console.log(Math.floor(5.14))
console.log(Math.ceil(5.14))

// 6 - console
console.log("Texto")
console.error("Erro")
console.warn("Aviso")

// 7 - if
const m = 10
if (m > 5){
    console.log(`${m} é maior que 5!`)
}

const user = "João"
if (user === "João"){
    console.log("Olá João")
}
if(user === "Maria"){
    console.log("olá Maria")
}

// 8 - else
const loggedIn = false
if(loggedIn){
    console.log("Está autenticado")
}else{
    console.log("Não está autenticado")
}

const q = 10
const w = 15
if(q > 5 && w > 20){
    console.log("Números mais altos")
}else{
    console.log("Os números não são mais altos")
}

// 9 - else if
if(1 > 2){
    console.log("Teste")
}else if(2 > 3){
    console.log("Teste 2")
}else if(5 > 1){
    console.log("Agora sim")
}

const userName = "Matheus"
const userAge = 31
if(userName === "José"){
    console.log("Bem vido José")
}else if(userName === "Matheus" && userAge === 31){
    console.log("Olá Matheus, você tem 31 anos")
}else{
    console.log("Nenhuma condição foi aceita")
}

// 10 - while
let p = 0
while(p < 5){
    console.log(`Repetindo ${p}`)
    p = p + 1
}

// 11 - do while
let o = 10

do{
    console.log(`valor de o: ${o}`)
    o--
}while(o > 1)

// 12 - for
for(let t = 0; t < 10; t++){
    console.log("Repetind algo...")
}

let r = 10
for(r; r > 0; r - 1){
    console.log(`O e está diminuindo ${r}`)
}

// 13 - identação
for(let u = 0; u < 10; u++){
    if(u * 2 > 10){
        console.log(`Maior que 10 ${u}`)
    } else{
        if (u / 2 === 0) {
            console.log("Deu 0")
        }
    }
}

// 14 - break
for(let g = 20; g > 10; g--){
    console.log(`O valor do g é: ${g}`)

    if(g === 12){
        console.log("O g é: 12")
        break
    }
}

// 15 - continue
for(let s = 1; s < 10; s++){
    if(s % 2 === 0){
        console.log("Número par")
        continue
    }
    console.log(s)
}

// 16 - switch
const job = "Advogado"
switch(job){
    case "Programado":
        console.log("Você é um programador")
    case "Advogado":
        console.log("Você é um advogado")
    default:
        console.log("Profissão não encontrada")
}