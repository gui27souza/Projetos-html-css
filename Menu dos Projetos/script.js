document.addEventListener('DOMContentLoaded', (event) => {
    atualizarCorBase(); 
    setInterval(atualizarCorBase, 100000); 
});

function atualizarCorBase() {
    const dataAtual = new Date();
    const horas = dataAtual.getHours();
    const minutos = dataAtual.getMinutes();
    const totalMinutos = horas * 60 + minutos;
    const hue = Math.round((totalMinutos / 1440) * 360);

    document.documentElement.style.setProperty('--cor-hue', hue.toString());
}

function showTodos() {
    for (let container of document.getElementsByClassName('container')) {
        container.style.display = '';
    }
    document.getElementsByClassName('project-type__button__text')[0].style.textDecorationColor = 'var(--cor-principal)';
    document.getElementsByClassName('project-type__button__text')[1].style.textDecorationColor = '#f0f8ff'
    document.getElementsByClassName('project-type__button__text')[2].style.textDecorationColor = '#f0f8ff'
}

function show(elemento, botao) {
    for (let container of document.getElementsByClassName('container')) {
        container.style.display = 'none';
    }
    elemento.style.display = ''

    document.getElementsByClassName('project-type__button__text')[botao.getAttribute('data-value')].style.textDecoration = 'underline var(--cor-principal)'

    switch (botao.getAttribute('data-value')) {
        case '1' : 
            document.getElementsByClassName('project-type__button__text')[1].style.textDecorationColor = 'var(--cor-principal)';
            document.getElementsByClassName('project-type__button__text')[2].style.textDecorationColor = '#f0f8ff'
            document.getElementsByClassName('project-type__button__text')[0].style.textDecorationColor = '#f0f8ff'
        break

        case '2' : 
            document.getElementsByClassName('project-type__button__text')[2].style.textDecorationColor = 'var(--cor-principal)';
            document.getElementsByClassName('project-type__button__text')[1].style.textDecorationColor = '#f0f8ff'
            document.getElementsByClassName('project-type__button__text')[0].style.textDecorationColor = '#f0f8ff'
        break
    }
}