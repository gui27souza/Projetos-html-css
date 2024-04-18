function aumentarMenor(elemento) {
    // Mudando elementos do style para aumentar, centralizar, e adequar a imagem ao container
    elemento.style.transform = 'scale(4.3)'
    elemento.style.position = 'absolute'
    elemento.style.alignSelf = 'center'
    elemento.style.justifySelf = 'center'
    elemento.style.marginBottom = '0'
    elemento.style.zIndex = '1'
    elemento.style.cursor = 'default'
    elemento.style.transition = 'all .5s ease'

    // Criando o efeito de blur na ampliação da imagem
    document.getElementById('diminuir').style.zIndex = 1
    document.getElementById('diminuir').style.backgroundColor = '#00000055'
    document.getElementById('diminuir').style.backdropFilter = 'blur(1rem)'
    document.getElementById('diminuir').style.cursor = 'pointer'

    // Limpa a máscara e o footer da imagem
    let mask = document.getElementsByClassName('mask');
    let footer = document.getElementsByClassName('img-footer')
    for ( let i = 0; i < mask.length; i++ ) {
        mask[i].style.display = 'none'
        footer[i].style.display = 'none'
    }
}

function aumentarMaior(elemento) {
    // Mudando elementos do style para aumentar, centralizar, e adequar a imagem ao container
    elemento.style.transform = 'scale(2.1)'
    elemento.style.position = 'absolute'
    elemento.style.alignSelf = 'center'
    elemento.style.justifySelf = 'center'
    elemento.style.marginBottom = '0'
    elemento.style.zIndex = '1'
    elemento.style.cursor = 'default'
    elemento.style.transition = 'all .5s ease'

    // Criando o efeito de blur na ampliação da imagem
    document.getElementById('diminuir').style.zIndex = 1
    document.getElementById('diminuir').style.backgroundColor = '#00000055'
    document.getElementById('diminuir').style.backdropFilter = 'blur(1rem)'
    document.getElementById('diminuir').style.cursor = 'pointer'
    document.getElementById('diminuir').style.transition = 'all .5s ease'

    // Limpa a máscara e o footer da imagem
    let mask = document.getElementsByClassName('mask');
    let footer = document.getElementsByClassName('img-footer')
    for ( let i = 0; i < mask.length; i++ ) {
        mask[i].style.display = 'none'
        footer[i].style.display = 'none'
    }
}

function diminuir() {
    // Laço que reseta as imagens no container e volta a galeria como no inicio
    let imagensMenor = document.getElementsByClassName('item-menor');    
    for (let i = 0; i < imagensMenor.length; i++) {
        imagensMenor[i].style.transform = 'scale(1)';
        imagensMenor[i].style.position = 'relative';
        imagensMenor[i].style.alignSelf = '';
        imagensMenor[i].style.marginBottom = ''
        imagensMenor[i].style.zIndex = '0';
        imagensMenor[i].style.cursor = 'pointer';
        imagensMenor[i].style.transition = 'all .5s ease'
    }

    // Laço que reseta as imagens no container e volta a galeria como no inicio
    let imagensMaior = document.getElementsByClassName('item-maior');    
    for (let i = 0; i < imagensMaior.length; i++) {
        imagensMaior[i].style.transform = 'scale(1)';
        imagensMaior[i].style.position = 'relative';
        imagensMaior[i].style.alignSelf = '';
        imagensMaior[i].style.marginBottom = ''
        imagensMaior[i].style.zIndex = '0';
        imagensMaior[i].style.cursor = 'pointer';
        imagensMaior[i].style.transition = 'all .5s ease'
    }

    // Laço que reseta os footers e máscaras das imagens
    let mask = document.getElementsByClassName('mask');
    let footer = document.getElementsByClassName('img-footer')
    for ( let i = 0; i < mask.length; i++ ) {
        mask[i].style.display = ''
        footer[i].style.display = ''
    }

    // Laço que reseta o efeito de blur para não visivel
    document.getElementById('diminuir').style.zIndex = -1
    document.getElementById('diminuir').style.backgroundColor = '#00000000'
    document.getElementById('diminuir').style.transition = 'all .5s ease'
}