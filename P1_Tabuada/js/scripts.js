// Seleção de elementos
const multiplicationForm = document.querySelector("#multiplication-form")
const numberInput = document.querySelector("#number")
const multiplicationInput = document.querySelector("#multiplicator")

const multiplicationTitle = document.querySelector("#multiplication-title span")

const multiplicationTable = document.querySelector("#multiplication-operations")

// Funções
const createTable = (a, b) => {
    multiplicationTable.innerHTML = ""

    for(let i = 1; i <= b; i++){
        const result = a * i
        
        const template = `<div class="row">
                <div class="operation">${a} x ${i} = </div>
                <div class="result">${result}</div>
            </div>`;
        
        const parser = new DOMParser();

        const htmlTemplate = parser.parseFromString(template, "text/html");

        const row = htmlTemplate.querySelector(".row");

        multiplicationTable.appendChild(row);

        console.log(result)
    }

    multiplicationTitle.innerHTML = a
}

// Eventos
multiplicationForm.addEventListener("submit", (e) => {
    e.preventDefault()

    const multiplicationNumber = +numberInput.value

    const multiplicatiorNumber = +multiplicationInput.value

    if(!multiplicationNumber || !multiplicationNumber) return

    createTable(multiplicationNumber, multiplicatiorNumber)
})