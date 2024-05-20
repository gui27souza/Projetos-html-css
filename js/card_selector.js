var all_items = document.getElementsByClassName("item-wrapper")
var all_inputs = document.getElementsByClassName("actions__button")

function sobre() {

    for (let item of all_items) {
        item.style.display = "none"
    }

    for (let input of all_inputs) {
        input.style.textDecorationColor = "var(--cor-white)"
    }

    document.getElementById("sobre").style.display = "block"
    document.getElementById("button-sobre").style.textDecorationColor = "var(--cor-principal)"

}

function cardSelector(this_input) {

    var card_type = this_input.value

    if (card_type == "Todos") {

        for (let item of all_items) {
            item.style.display = "flex"
        }

    } else {
    
        for (let item of all_items) {
            
            if (item.classList.contains(card_type)) {
                item.style.display = "flex"
            } else item.style.display = "none"

        }

    }

    for (let input of all_inputs) {
        input.style.textDecorationColor = "var(--cor-white)"
    }

    document.getElementById("button-todos").style.textDecorationColor = "var(--cor-principal)"

    document.getElementById("sobre").style.display = "none"
}






























// // Sistema de seleção de item por tipo

//     // Declaração de Variáveis
//     let button_text = document.getElementsByClassName('project-type__button__text')

//     // Função que reseta a seleção
//     function showTodos() {
//         for (let item of document.getElementsByClassName('item')) {
//             item.style.display = '';
//         }
//         for (let hidden of document.getElementsByClassName('hidden-todos')) {
//             hidden.style.display = 'none'
//         }

//         document.getElementById('container').style.flexFlow = 'column'

//         // Reset da underline dos botões
//         for (let button of button_text) {
//             button.style.textDecorationColor = '#f0f8ff'
//         }
//         button_text[0].style.textDecorationColor = 'var(--cor-principal)'
//     }

//     // Função que mostra apenas o tipo de item selecionado
//     function show(elemento, botao) {
//         for (let item of document.getElementsByClassName('item')) {
//             item.style.display = 'none';
//         }

//         for (let e of elemento) {
//             e.style.display = ''
//         }

//         document.getElementById('container').style.flexFlow = 'column-reverse'

//         button_text[botao.getAttribute('data-value')].style.textDecoration = 'underline var(--cor-principal)'

//         for (let button of button_text) {
//             button.style.textDecorationColor = '#f0f8ff'
//         }
//         button_text[Number(botao.getAttribute('data-value'))].style.textDecorationColor = 'var(--cor-principal)'
//     }
// //
