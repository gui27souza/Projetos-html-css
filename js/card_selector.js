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

        for (let input of all_inputs) {
            input.style.textDecorationColor = "var(--cor-white)"
        }

        document.getElementById("button-todos").style.textDecorationColor = "var(--cor-principal)"

    } else {
    
        for (let item of all_items) {
            
            if (item.classList.contains(card_type)) {
                item.style.display = "flex"
            } else item.style.display = "none"

        }

        for (let input of all_inputs) {
            input.style.textDecorationColor = "var(--cor-white)"
        }

        this_input.style.textDecorationColor = "var(--cor-principal)"

    }

    document.getElementById("sobre").style.display = "none"
}