// Sistema de troca de cores automática

    document.addEventListener('DOMContentLoaded', (event) => {
        atualizarCorBase(); 
        setInterval(atualizarCorBase, 100000); 
    });

    function atualizarCorBase() {
        const dataAtual = new Date();
        const hue = Math.round((((dataAtual.getHours()) * 60 + (dataAtual.getMinutes())) / 1440) * 360);

        document.documentElement.style.setProperty('--cor-hue', hue.toString());
    }
//


//--------------------------------------------------------------------------------------------------------------------------------------------



// Sistema de seleção de item por tipo

    // Declaração de Variáveis
    let button_text = document.getElementsByClassName('project-type__button__text')

    // Função que reseta a seleção
    function showTodos() {
        for (let item of document.getElementsByClassName('item')) {
            item.style.display = '';
        }
        for (let hidden of document.getElementsByClassName('hidden-todos')) {
            hidden.style.display = 'none'
        }

        document.getElementById('container').style.flexFlow = 'column'

        // Reset da underline dos botões
        for (let button of button_text) {
            button.style.textDecorationColor = '#f0f8ff'
        }
        button_text[0].style.textDecorationColor = 'var(--cor-principal)'
    }

    // Função que mostra apenas o tipo de item selecionado
    function show(elemento, botao) {
        for (let item of document.getElementsByClassName('item')) {
            item.style.display = 'none';
        }

        for (let e of elemento) {
            e.style.display = ''
        }

        document.getElementById('container').style.flexFlow = 'column-reverse'

        button_text[botao.getAttribute('data-value')].style.textDecoration = 'underline var(--cor-principal)'

        for (let button of button_text) {
            button.style.textDecorationColor = '#f0f8ff'
        }
        button_text[Number(botao.getAttribute('data-value'))].style.textDecorationColor = 'var(--cor-principal)'
    }
//