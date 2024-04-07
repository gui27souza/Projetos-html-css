let atual = new Date()

var horasElement = document.getElementById('horas');
var minutosElement = document.getElementById('minutos');

// Obtendo horas e minutos do objeto Date
let horas = atual.getHours();
let minutos = atual.getMinutes();

// Atualizando o texto dos elementos
horasElement.innerText = horas.toString().padStart(2, '0');
minutosElement.innerText = minutos.toString().padStart(2, '0');

let imgTime = document.getElementById('img_time');

if (horas >= 18 || horas <= 4) {
    imgTime.setAttribute('src', 'images/night.jpg')
    document.body.style.backgroundColor = '#1d3254'
}else if (horas >= 5 && horas <=11) {
    imgTime.setAttribute('src', 'images/morning.jpg')
}else if (horas >= 12 && horas <=17) {
    imgTime.setAttribute('src', 'images/afternoon.jpg')
    document.body.style.backgroundColor = '#c9833c'
}