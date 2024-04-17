// Sistema de troca de cores automática

document.addEventListener('DOMContentLoaded', (event) => {
    atualizarCorBase(); 
    setInterval(atualizarCorBase, 100000); 
});

function atualizarCorBase() {
    const dataAtual = new Date();
    const horas = dataAtual.getHours();
    const minutos = dataAtual.getMinutes();
    const totalMinutos = horas * 60 + minutos;
    const hue = Math.round((totalMinutos / 1440) * 360) + 120;

    document.documentElement.style.setProperty('--cor-hue', hue.toString());
}



//--------------------------------------------------------------------------------------------------------------------------------------------



// Sistema de seleção de item por tipo

    // Declaração de Variáveis
    let button_text = document.getElementsByClassName('project-type__button__text')

    // Função que reseta a seleção
function showTodos() {
    for (let container of document.getElementsByClassName('container')) {
        container.style.display = '';
    }
    button_text[0].style.textDecorationColor = 'var(--cor-principal)';
    button_text[1].style.textDecorationColor = '#f0f8ff'
    button_text[2].style.textDecorationColor = '#f0f8ff'
}

    // Função que mostra apenas o tipo de item selecionado
function show(elemento, botao) {
    for (let container of document.getElementsByClassName('container')) {
        container.style.display = 'none';
    }
    elemento.style.display = ''

    button_text[botao.getAttribute('data-value')].style.textDecoration = 'underline var(--cor-principal)'

    switch (botao.getAttribute('data-value')) {
        case '1' : 
            button_text[1].style.textDecorationColor = 'var(--cor-principal)';
            button_text[2].style.textDecorationColor = '#f0f8ff'
            button_text[0].style.textDecorationColor = '#f0f8ff'
        break

        case '2' : 
            button_text[2].style.textDecorationColor = 'var(--cor-principal)';
            button_text[1].style.textDecorationColor = '#f0f8ff'
            button_text[0].style.textDecorationColor = '#f0f8ff'
        break
    }
}