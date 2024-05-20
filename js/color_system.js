// Sistema de troca de cores automática

    document.addEventListener('DOMContentLoaded', (event) => {
        atualizarCorBase(); 
        setInterval(atualizarCorBase, 100000); 
    });

    function atualizarCorBase() {
        const dataAtual = new Date();
        const hue = Math.round((((dataAtual.getHours()) * 60 + (dataAtual.getMinutes())) / 1440) * 360) + 0;

        document.documentElement.style.setProperty('--cor-hue', hue.toString());
    }

//