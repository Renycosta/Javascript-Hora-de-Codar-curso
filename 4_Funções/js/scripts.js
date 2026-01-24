// 1 - criando uma função
function minhaFuncao(){
    console.log("Testando")
}

minhaFuncao();
minhaFuncao();

const minhaFuncaoEmVariavel = function minhaFuncao(){
    console.log("Testando")
}

minhaFuncaoEmVariavel();

function funcaoComParametro(txt) {
    console.log(`Imprimindo: ${txt}`)
}

funcaoComParametro("Imprimindo alguma coisa")
funcaoComParametro("Banana")