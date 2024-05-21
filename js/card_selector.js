// Variáveis 

    var all_items = document.getElementsByClassName("item-wrapper")
    var all_inputs = document.getElementsByClassName("actions__button")

// 

// Função para filtrar os cards

    function cardSelector(this_input) {

        // Verifica qual botão foi acionado de acordo com seu atributo
        var card_type = this_input.value

        if (card_type == "Todos") {

            // Todos visíveis
            for (let item of all_items) {
                item.style.display = "flex"
            }

            // Limpa o underline dos inputs
            for (let input of all_inputs) {
                input.style.textDecorationColor = "var(--cor-white)"
            }

            // Coloca underline só no input Todos
            document.getElementById("button-todos").style.textDecorationColor = "var(--cor-principal)"

        } else {
        
            // Laço que verifica o tipo do card e muda a sua visibilidade
            for (let item of all_items) {
                
                if (item.classList.contains(card_type)) {
                    item.style.display = "flex"
                } else item.style.display = "none"

            }

            // Limpa o underline dos inputs
            for (let input of all_inputs) {
                input.style.textDecorationColor = "var(--cor-white)"
            }

            // Coloca underline só no input selecionado
            this_input.style.textDecorationColor = "var(--cor-principal)"

        }

        // Torna o sobre invisível, se necessário
        document.getElementById("sobre").style.display = "none"
    }

// 


// Seletor da seção sobre

    function sobre() {

        // Torna todos os cards invisíveis
        for (let item of all_items) {
            item.style.display = "none"
        }

        // Limpa o underline dos inputs
        for (let input of all_inputs) {
            input.style.textDecorationColor = "var(--cor-white)"
        }

        // Torna o sobre visível
        document.getElementById("sobre").style.display = "block"
        
        // Coloca o underline no input Sobre
        document.getElementById("button-sobre").style.textDecorationColor = "var(--cor-principal)"

    }

// 