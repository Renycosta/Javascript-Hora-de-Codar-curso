// 1 - arrays
const lista = [1, 2, 3, 4, 5]

console.log(lista)

// 2 - mais sobre array
const arr = ["a", "b", "c", "d", "e",]

console.log(arr[0])
console.log(arr[3])

// 3 - propriedades
const numbers = [5, 3, 4]
console.log(numbers.length)
console.log(numbers["length"])

const myName = "Reny"
console.log(myName.length)

// 4 - métodos
const otherNumbers = [1, 2, 3]

const allNumbers = numbers.concat(otherNumbers)
console.log(allNumbers)

const text = "texto"
console.log(text.toUpperCase)
console.log(typeof text.toUpperCase)
console.log(text.indexOf("g"))

// 5 - objetos
const person = {
    name: "Matheus",
    age: 31,
    job: "programador",
}

console.log(person)
console.log(person.name)
console.log(person.name.length)

// 6 - Criando e deletando propriedades 
const car = {
    engine: 2.0,
    brand: "VW",
    model: "Tiguan",
    km: 20000,
}
console.log(car)

car.doors = 4
console.log(car)

delete car.km
console.log(car)

// 7 - mais sobre objetos
const obj = {
    a: "teste",
    b: true,
}

console.log(obj instanceof Object)

const obj2 = {
    c: []
}

Object.assign(obj2, obj)

console.log(obj2)
console.log(obj)

// 8 - conhecendo melhor os objetos
console.log(Object.keys(obj))
console.log(Object.keys(obj2))
console.log(Object.keys(car))

console.log(Object.entries(car))

// 9 - mutação
const a = {
    name: "Reny"
}

const b = a

console.log(a)
console.log(b)

console.log(a === b)

a.age = 19

console.log(a)
console.log(b)

delete b.age

console.log(a)
console.log(b)

// 10 - Loop em array
const users = ["Reny", "João", "Maria", "Miguel"]

for(let i = 0; i < users.length; i++){
    console.log(`Listando o usuário: ${users[i]}`)
}

// 11 - push e pop
const array = ["a", "b", "c"]

array.push("d")
console.log(array)

array.pop()
console.log(array)

const itemRemovido = array.pop()
console.log(itemRemovido)
console.log(array)

array.push("z", "x", "y")

// 12 - shift e unshift
const letters = ["a", "b", "c"]

const letter = letters.shift()

console.log(letter)
console.log(letters)

letters.unshift("p", "q", "r")
letters.unshift("z")

console.log(letters)

// 13 - indexOf e lastindexOf
const myElements = ["Morango", "Maça", "Abacate", "Pêra", "Abacate"]

console.log(myElements.indexOf("Maça"))
console.log(myElements.indexOf("Abacate"))

console.log(myElements.lastIndexOf("Abacate")) 

// 14 - slice
const testeSlice =  ["a", "b", "c", "d", "e", "f"]

const subArray = testeSlice.slice(2, 4)

console.log(subArray)
console.log(testeSlice)

const subArray2 = testeSlice.slice(2, 4 + 1)
console.log(subArray2)

// 15 - forEach
const nums = [1, 2, 3, 4, 5]
nums.forEach((numero) => {
    console.log(`O número é ${numero}`)
})

const post = [
    {title: "Primeiro post", category: "PHP"},
    {title: "Segundo post", category: "JavaScript"},
    {title: "Terceiro post", category: "Python"},
]

post.forEach((post) => {
    console.log(`Exibindo post: ${post.title}, da categoria: ${post.category}`)
})

// 16 - includes
const brands = ["BMW", "VW", "Fiat"]

console.log(brands.includes("Fiat"))
console.log(brands.includes("KIA"))

if(brands.includes("BMW")){
    console.log("Há carros da maraca BMW")
}

// 17 - reverse
const reverseTest = [1, 2, 3, 4, 5]

reverseTest.reverse()

console.log(reverseTest)

// 18 - trim
const trimTeste = " testand \n"

console.log(trimTeste)
console.log(trimTeste.trim())

console.log(trimTeste.length)
console.log(trimTeste.trim().length)

// 19 - padstart
const testeStart = "1"

const newNumber = testeStart.padStart(4, "0")

console.log(testeStart)
console.log(newNumber)

const testEnd = newNumber.padEnd(10, "0")

console.log(testEnd)

// 20 - split
const frase = "O rato roeu a roupa do rei de roma"

const arraFrase = frase.split(" ")

console.log(arraFrase)

// 21 - join
const fraseDenovo = arraFrase.join(" ")

console.log(fraseDenovo)

const itensParaComprar = ["Mouse", "Teclado", "Monitor"]

const fraseCompra = `Precisamos comprar ${itensParaComprar.join(", ")}`

console.log(fraseCompra)

// 22 - repeat
const palavra = "Testando"

console.log(palavra.repeat(5))

// 23 - rest operator
const somaInfinita = (...args) => {
    let total = 0
    for(let i = 0; i < args.length; i++){
        total += args[i]
    }
    return total
}
console.log(somaInfinita(1, 2, 3))

console.log(somaInfinita(1, 42, 534, 53423))

// 24 - for of
const somaInfinita2 = (...args) => {
    let total = 0

    for(num of args){
        total += num
    }

    return total
}

console.log(somaInfinita2(1, 2, 4))
console.log(somaInfinita2(5, 6, 1, 42, 65, 32))

// 25 - destructuring em objetos
const userDetails = {
    firstName: "Reny",
    lastName: "Costa",
    job: "Programador"
}

const { firstName, lastName, job } = userDetails
console.log(firstName, lastName, job)

const {firstName: PrimeiroNome} = userDetails
console.log(PrimeiroNome)

// 26 - destruction em arrays
const myList = ["Avião", "Submarino", "Carro"]

const [veiculoA, veiculoB, veiculoC] = myList

console.log(veiculoA, veiculoB, veiculoC)

// 27 - JSON
const myJson = '{"name": "Reny", "age": 19, "skills": ["PHP", "JavaScript", "Python"]}'

// 28 - JSON para objeto e objeto para JSON
const myObject = JSON.parse(myJson)
console.log(myObject)

const myNewJson = JSON.stringify(myObject)
console.log(myNewJson)