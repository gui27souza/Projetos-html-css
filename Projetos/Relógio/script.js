// Área do código que muda o estilo do site de acordo com o momento do dia 
let atual = new Date()
let horas = atual.getHours()

let imgTime = document.getElementById('img_time');

if (horas >= 18 || horas <= 4) {
    imgTime.setAttribute('src', 'images/night.jpg')
    document.body.style.backgroundColor = '#1d3254'
}else if (horas >= 5 && horas <=11) {
    imgTime.setAttribute('src', 'images/morning.jpg')
}else if (horas >= 12 && horas <=17) {
    imgTime.setAttribute('src', 'images/afternoon.jpg')
    document.body.style.backgroundColor = '#ffa21f'
}


// Funções que atualizam o horário para que seja exatamente o atual

setInterval(function() {
    let atual = new Date()    
    let horas = atual.getHours().toString().padStart(2,'0')
    document.getElementById('horas').innerHTML = horas
}, 1000)

setInterval(function() {
    let atual = new Date()    
    let minutos = atual.getMinutes().toString().padStart(2,'0')
    document.getElementById('minutos').innerHTML = minutos

}, 1000)

setInterval(function() {
    let atual = new Date()
    let segundos = atual.getSeconds().toString().padStart(2, '0')
    document.getElementById('segundos').innerHTML = segundos
}, 1000)