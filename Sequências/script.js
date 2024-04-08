function calcular() {
    let inicio = Number(document.getElementById('inicio').value)
    let fim = Number(document.getElementById('fim').value)
    let intervalo = Number(document.getElementById('intervalo').value)

    
    let separador = document.getElementById('separador').value
    
    let saida = ''

    if (intervalo <= 0) {
        document.getElementById('saida').innerText = 'Intervalo não pode ser igual ou menor a zero'
        return
    }

    if (inicio <= fim) {
        for ( let i = inicio; i <= fim; i += intervalo ) {
            if (i == fim || i + intervalo > fim) saida += `${i}`
            else saida += `${i}${separador}`
        }
    } else {
        for ( let i = inicio; i >= fim; i -= intervalo ) {
            if (i == fim || i - intervalo < fim) saida += `${i}`
            else saida += `${i}${separador}`
        }
    }    

    document.getElementById('saida').innerText = saida
}