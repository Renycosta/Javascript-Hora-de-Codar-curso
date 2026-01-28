// 1 - Adicionando eventos
const btn = document.querySelector("#my-button")

btn.addEventListener("click", function() {
    console.log("Clicou aqui!")
})

// 2 - Removendo evento
const secondbtn = document.querySelector("#btn")

function imprimirMensagem() {
    console.log("Teste")
}

secondbtn.addEventListener("click", imprimirMensagem)

const thirdbtn = document.querySelector("#other-btn")

thirdbtn.addEventListener("click", () => {
    console.log("Evento removido")
    secondbtn.removeEventListener("click", imprimirMensagem)
})

// 3 - Argumento do evento
const myTitle = document.querySelector("#myTitle")

myTitle.addEventListener("click", (event) => {
    console.log(event)
    console.log(event.offsetx)
    console.log(event.pointerType)
    console.log(event.target)
})

// 4 - propagação
const containerBtn = document.querySelector("#btn-container")
const btnInsideContainer = document.querySelector("#div-btn")

containerBtn.addEventListener("click", (event) => {
    console.log("Evento 1")
})

btnInsideContainer.addEventListener("click", (event) => {
    event.stopPropagation()
    console.log("Evento 2")
})

// 5 - removendo evento padrão
const a = document.querySelector("a")

a.addEventListener("click", (event) => {
    event.preventDefault()

    console.log("Não alterou a página")
})

// 6 - eventos de tecla
document.addEventListener("keyup", (event) => {
    console.log(`Soltou a tecla ${event.key}`)
})

document.addEventListener("keydown", (event) => {
    console.log(`Pressionou a tecla ${event.key}`)
})

// 7 - Eventos de mouse
const mouseEvent = document.querySelector("#mouse")

mouseEvent.addEventListener("mousedown", (event) => {
    console.log("Pressionou o botão")
})

mouseEvent.addEventListener("mouseup", (event) => {
    console.log("Soltou o botão")
})

mouseEvent.addEventListener("dblclick", (event) => {
    console.log("Clique duplo")
})

// 8 - Movimento do mouse
document.addEventListener("mousemove", (e) => {
    console.log(`No eixo X ${e.x}`)
    console.log(`No eixo y ${e.y}`)
})

// 9 - Evento de scroll
window.addEventListener("scroll", (e) => {
    if(window.pageYOffset > 200){
        console.log("Passamos de 200px")
    }
})

// 10 - Evento de focus/blur
const input = document.querySelector("#my-input")

input.addEventListener("focus", (e) => {
    console.log("Entrou no input")
})

input.addEventListener("blur", (e) => {
    console.log("Saiu do input")
})

// 11 - Evento de carregamento 
window.addEventListener("load", (e) => {
    console.log("A página carregou")
})

window.addEventListener("beforeunload", (e) => {
    e.preventDefault()
})

// 12 - debounce
const debounce = (f, delay) => {
    let timeout;

    return (...arguments) => {
        if(timeout){
            clearTimeout(timeout)
        }

        timeout = setTimeout(() => {
            f.apply(arguments)
        }, delay)
    }
}

window.addEventListener("mousemove", debounce(() => {
    console.log("Executando a cada 400ms")
},400))