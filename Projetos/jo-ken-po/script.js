function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}

function jogar(elemento) {
    var player = elemento.getAttribute('play-value')

    var comp = getRandomInt(0, 3)

    if (player == comp) {

       document.getElementById('result').innerHTML = 'Empate!'
       document.getElementById('result').style.backgroundColor = '#297bff55'
       document.getElementById('result').style.borderColor = '#297bff'

       document.getElementById('empates').innerText++

       return
    }

    if ( player == 0 && comp == 2 ||
         player == 1 && comp == 0 ||
         player == 2 && comp == 1  ) {
        
        document.getElementById('result').innerHTML = 'Vitória!'
        document.getElementById('result').style.backgroundColor = '#08ff6f55'
        document.getElementById('result').style.borderColor = '#08ff6f'

        document.getElementById('vitorias').innerText++

       return
    }

    if ( player == 0 && comp == 1 ||
         player == 1 && comp == 2 ||
         player == 2 && comp == 0  ) {
       
       document.getElementById('result').innerHTML = 'Derrota!'
       document.getElementById('result').style.backgroundColor = '#ff1c0855'
       document.getElementById('result').style.borderColor = '#ff1c08'

       document.getElementById('derrotas').innerText++

      return
   }
}

function reset() {
    document.getElementById('vitorias').innerText = 0
    document.getElementById('empates').innerText = 0
    document.getElementById('derrotas').innerText = 0

    document.getElementById('result').innerHTML = 'Clique em um dos símbolos acima para começar!'
    document.getElementById('result').style.backgroundColor = '#ffc400'
    document.getElementById('result').style.borderColor = '#cf9f00'
}