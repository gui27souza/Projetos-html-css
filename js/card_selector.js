// Variáveis 

    var all_items = document.getElementsByClassName("item-wrapper")
    var all_inputs = document.getElementsByClassName("actions__button")
    var sobre_element = document.getElementById("sobre")

// 

// Função para filtrar os cards

    function cardSelector(this_input) {

        // Verifica qual botão foi acionado de acordo com seu atributo
        var card_type = this_input.value

        if (card_type == "Todos") {

            // Reseta a ordem dos cards, colocando os mais antigos primeiro
            ajustaOrdem()
            ordem_inversa = false

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

            // Função para colocar os cards mais recentes primeiro
            inverterOrdem()
        
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
        sobre_element.style.display = "none"
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
        sobre_element.style.display = "block"
        
        // Coloca o underline no input Sobre
        document.getElementById("button-sobre").style.textDecorationColor = "var(--cor-principal)"

    }

// 




// Variaveis

    // Página se inicializa com ordem normal
    var ordem_inversa = false

// 

// Função apra inverter a ordem caso esteja na ordem padrão

    function inverterOrdem() {

        // Checa se a ordem já não está inversa
        if (!ordem_inversa) {

            // Converte HTMLCollection para um array
            var itemsArray = Array.from(all_items)

            // Inverte a ordem do array
            itemsArray.reverse()

            // Pega o elemento pai
            var parent = itemsArray[0].parentElement

            // Adiciona os itens de volta na ordem invertida
            itemsArray.forEach(item => {
                parent.appendChild(item)
            })

            // Atualiza a variável de controle de ordem
            ordem_inversa = true
        }
    }

// 

// Função para resetar a ordem

    function ajustaOrdem() {

        // Só reseta se já estiver na ordem inversa
        if (ordem_inversa) {
            ordem_inversa = false
            inverterOrdem()
            ordem_inversa = false
        } 
        
    }

// 