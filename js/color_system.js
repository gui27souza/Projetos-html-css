// Sistema de troca de cores automática

    // Atualiza a cor com base em um intervalo
    document.addEventListener('DOMContentLoaded', (event) => {
        atualizarCorBase(); 
        setInterval(atualizarCorBase, 100000); 
    });

    // Calcula a nova hue de acordo com dia e horário
    function atualizarCorBase() {
        const dataAtual = new Date();
        const hue = Math.round((((dataAtual.getHours()) * 60 + (dataAtual.getMinutes())) / 1440) * 360) + dayRandom(dataAtual);

        document.documentElement.style.setProperty('--cor-hue', hue.toString());
    }

    // Randomiza a variável de cálculo da hue
    function dayRandom(dataAtual) {
        let diaAtual = dataAtual.getDate()
        
        if (diaAtual % 2 != 0) {
            diaAtual += 120
            return diaAtual
        }

        return diaAtual * 12
    }

//