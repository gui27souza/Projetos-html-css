var numero = document.getElementById('numero')

function reset() {
    numero.innerText = '0'
}

function incrementar() {
    numero.innerText++ 
}

function decrementar() {
    if (Number.parseInt(numero.innerText) > 0) {
        numero.innerText--
    }
}