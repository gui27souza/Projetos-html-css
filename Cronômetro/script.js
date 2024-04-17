// Inicialização das variáveis de controle
let intervalId = null
let pause = false

// Formatador dos valores para formato 00
function formatNumber(num) {
    return num.toString().padStart(2, '0')
}

// Função que inicia e atualiza o cronômetro
function iniciar() {
    intervalId = setInterval(function () {
        let centesimos = document.getElementById('centesimos')
        let segundos = document.getElementById('segundos')
        let minutos = document.getElementById('minutos')

        if (!pause) {
            if (centesimos.innerText != 99) {
                centesimos.innerText = formatNumber(parseInt(centesimos.innerText) + 1)
            } else if (segundos.innerText != 59) {
                centesimos.innerText = formatNumber(0)
                segundos.innerText = formatNumber(parseInt(segundos.innerText) + 1)
            } else {
                segundos.innerText = formatNumber(0)
                minutos.innerText = formatNumber(parseInt(minutos.innerText) + 1)
            }
        }
    }, 10)

    document.getElementById('iniciar').setAttribute('onclick', 'retomar()')
}

// Função que para e reseta o cronômetro
function resetar() {
    document.getElementById('centesimos').innerText = '00'
    document.getElementById('segundos').innerText = '00'
    document.getElementById('minutos').innerText = '00'

    document.getElementById('iniciar').setAttribute('onclick', 'iniciar()')

    clearInterval(intervalId)
    intervalId = null
}

// Funções que pausa e retoma respectivamente o cronômetro
    function pausar() {
        pause = true
    }
    function retomar() {
        pause = false
    }