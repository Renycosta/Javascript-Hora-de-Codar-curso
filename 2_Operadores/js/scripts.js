// 1 - Number
console.log(typeof 2)
console.log(typeof 2.3)
console.log(typeof -10)

// 2 - Ops. aritméticas
console.log(2+4)
console.log(10-5)
console.log(2*4)
console.log(4/2)

// 3 - Special numbers
console.log(typeof Infinity)
console.log(typeof -Infinity)
console.log(typeof NaN)
console.log(12 + "a")

// 4 - String 
console.log("Texto")
console.log(`Texto`)
console.log('Texto')

console.log(typeof"Texto")
console.log(typeof `Texto`)
console.log(typeof'Texto')

// 5 - Simbolos especiais em string
console.log("Testando a \n quebra de linha")
console.log("Espaçamento \t de tab")

// 6 - Concatenação
console.log("Oi, " + "tudo" + " bem?")
console.log(`Testando ` + `com` + ` crase"`)

// 7 - Template Strings
console.log(`A soma de 2 + 2 é: ${2 + 2}`)

console.log(`Podemos executar qualquer coisa aqui ${console.log("teste")}`)

// 8 - Boolean
console.log(true)
console.log(false)
console.log(5 > 20)
console.log(5 < 20)
console.log(typeof false)
console.log(typeof true)

// 9 - Comparações
console.log(5 <= 5)
console.log(5 < 5)
console.log(10 == 10)
console.log(10 == 9)
console.log(10 != 9) 

// 10 - Comparações de idêntico
console.log(9 == "9")
console.log(9 != "9")
console.log(9 === "9")
console.log(9 !== "9")

// 11 - Operadores lógicos
console.log(true && true)
console.log(true && false)
console.log(5 > 2 && 2 < 10)
console.log(5 > 2 && "Matheus" === 1)
console.log(5 > 2 || "Matheus" === 1)
console.log(5 < 2 || 5 > 10)
console.log(!true)
console.log(!5 > 2)

// 12 - empty values
console.log(typeof null, typeof undefined)
console.log(null == undefined)
console.log(null === undefined)
console.log(null == false)
console.log(undefined == false)

// Conversão de tipo automático
console.log(5 * null)
console.log("texto" * "texto")
console.log("10" + 1)
console.log("10" - 1)